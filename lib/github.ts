export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

export interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  total_forks: number;
}

const GITHUB_USERNAME = 'rtk5';
const GITHUB_API_BASE = 'https://api.github.com';

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    const repos = await response.json();
    return repos.filter((repo: GitHubRepo) => !repo.name.includes('fork'));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' },
        next: { revalidate: 3600 },
      }),
      fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' },
        next: { revalidate: 3600 },
      }),
    ]);

    const user = await userResponse.json();
    const repos = await reposResponse.json();

    const totalStars = repos.reduce((sum: number, repo: GitHubRepo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum: number, repo: GitHubRepo) => sum + repo.forks_count, 0);

    return {
      public_repos: user.public_repos,
      followers: user.followers,
      following: user.following,
      total_stars: totalStars,
      total_forks: totalForks,
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return {
      public_repos: 0,
      followers: 0,
      following: 0,
      total_stars: 0,
      total_forks: 0,
    };
  }
}