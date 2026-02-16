'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, MapPin, QrCode } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/rtk5',
    icon: Github,
    ascii: '⚡ Git',
    color: 'text-cyber-primary',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rithvik-matta-a8490b2ba/',
    icon: Linkedin,
    ascii: '💼 Work',
    color: 'text-cyber-secondary',
  },
  {
    name: 'Email',
    url: 'mailto:rithvikmatta@gmail.com',
    icon: Mail,
    ascii: '📧 Mail',
    color: 'text-cyber-green',
  },
];

const terminalLines = [
  '> Initializing secure communication channel...',
  '> Establishing encrypted connection...',
  '> Loading contact protocols...',
  '> System ready. Please enter your message.',
  '',
  '> Available channels:',
  '  [1] Direct message (recommended)',
  '  [2] Email transmission',
  '  [3] Social network ping',
  '',
  '> Security: End-to-end encrypted ✓',
  '> Status: Online and monitoring ✓',
];

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setTerminalOutput(prev => [...prev, terminalLines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [currentLine, isMounted]);

  const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  try {
    const res = await fetch(
      "https://formsubmit.co/ajax/31c49057e6d8647174622f6374f75cd4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _captcha: "false",
          _template: "table",
        }),
      }
    );

    if (!res.ok) throw new Error("Failed");

    // Terminal success animation
    setTerminalOutput((prev) => [
      ...prev,
      "",
      '> echo "Message sent successfully!" > /dev/email',
      "> Message transmitted to secure server ✓",
      "> Response time: < 24 hours",
      "> Thank you for reaching out!",
    ]);

    toast.success("Message sent successfully!");
    form.reset();
  } catch (error) {
    toast.error("Failed to send message. Please try again.");
    setTerminalOutput((prev) => [
      ...prev,
      "",
      "> ERROR: Message transmission failed",
      "> Please try alternative communication channels",
    ]);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-cyber-primary mb-4">
            <span className="glitch" data-text="FIND-ME">FIND-ME</span>
          </h1>
          <p className="text-cyber-gray font-mono">$ echo "Let's connect!" &gt; /dev/network</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Terminal Interface */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Terminal Log */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 font-mono text-sm text-cyber-primary">
                  contact.log
                </span>
              </div>
              
              <div className="terminal-content max-h-64 overflow-y-auto">
                {terminalOutput.map((line, index) => (
                  <motion.div
                    key={index}
                    className="font-mono text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                  >
                    {line.startsWith('>') ? (
                      <span className="text-cyber-secondary">{line}</span>
                    ) : line.includes('✓') ? (
                      <span className="text-cyber-green">{line}</span>
                    ) : line.includes('ERROR') ? (
                      <span className="text-red-400">{line}</span>
                    ) : line.startsWith('  [') ? (
                      <span className="text-cyber-primary">{line}</span>
                    ) : (
                      <span className="text-cyber-gray">{line}</span>
                    )}
                  </motion.div>
                ))}
                {currentLine >= terminalLines.length && (
                  <motion.span
                    className="text-cyber-primary animate-cursor-blink"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    _
                  </motion.span>
                )}
              </div>
            </div>

            {/* Social Links ASCII Style */}
            <motion.div
              className="terminal-window"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 font-mono text-sm text-cyber-primary">
                  social.network
                </span>
              </div>
              
              <div className="terminal-content">
                <div className="font-mono text-center space-y-4">
                  <div className="text-cyber-gray text-xs">
                    <pre>
{`.-. .-. .-. .-. .-. .-. .-. .-. .-.
| O| O| O| O| O| O| O| O| O|
'~' '~' '~' '~' '~' '~' '~' '~' '~'`}
                    </pre>
                  </div>
                  
                  <div className="flex justify-center gap-8">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${link.color} hover:scale-110 transition-all duration-300 text-center group`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.2 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <link.icon className="w-8 h-8 mx-auto mb-1" />
                        <div className="text-xs group-hover:text-cyber-primary transition-colors">
                          {link.ascii}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  
                  <div className="text-cyber-gray text-xs">
                    <pre>
{`'~' '~' '~' '~' '~' '~' '~' '~' '~'
.-. .-. .-. .-. .-. .-. .-. .-. .-.`}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* QR Code Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <button
                onClick={() => setShowQR(!showQR)}
                className="cyber-button text-sm flex items-center gap-2 mx-auto"
              >
                <QrCode className="w-4 h-4" />
                {showQR ? 'Hide' : 'Show'} vCard QR
              </button>
              
            {showQR && (() => {
              const vCardData = `BEGIN:VCARD
            VERSION:3.0
            N:Matta;Rithvik;;;
            FN:Rithvik Matta
            TITLE:Software Engineer
            EMAIL;TYPE=INTERNET:rithvik.matta@gmail.com
            URL:https://rithvikmatta.netlify.app
            END:VCARD`;

              return (
                <motion.div
                  className="mt-4 p-4 bg-cyber-charcoal rounded-lg border border-cyber-gray"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="w-32 h-32 mx-auto rounded bg-white p-2"
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(vCardData)}`}
                    alt="vCard QR"
                  />
                  <p className="text-cyber-gray font-mono text-xs mt-2 text-center">
                    Scan to add contact info
                  </p>
                </motion.div>
              );
            })()}

                  <p className="text-cyber-gray font-mono text-xs mt-2">
                    Scan to add contact info
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="terminal-window"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-4 font-mono text-sm text-cyber-primary">
                compose-message.sh
              </span>
            </div>
            
            <div className="terminal-content">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="font-mono text-sm text-cyber-secondary mb-4">
                  $ ./send-secure-message ---------------------
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block font-mono text-sm text-cyber-primary mb-2">
                      --name=
                    </label>
                    <input
                      {...form.register('name')}
                      className="w-full bg-cyber-dark border border-cyber-gray rounded px-3 py-2 font-mono text-cyber-primary focus:border-cyber-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-400 text-xs mt-1 font-mono">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-sm text-cyber-primary mb-2">
                      --email=
                    </label>
                    <input
                      {...form.register('email')}
                      type="email"
                      className="w-full bg-cyber-dark border border-cyber-gray rounded px-3 py-2 font-mono text-cyber-primary focus:border-cyber-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-400 text-xs mt-1 font-mono">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-sm text-cyber-primary mb-2">
                      --subject=
                    </label>
                    <input
                      {...form.register('subject')}
                      className="w-full bg-cyber-dark border border-cyber-gray rounded px-3 py-2 font-mono text-cyber-primary focus:border-cyber-primary focus:outline-none transition-colors"
                      placeholder="Message subject"
                    />
                    {form.formState.errors.subject && (
                      <p className="text-red-400 text-xs mt-1 font-mono">
                        {form.formState.errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-sm text-cyber-primary mb-2">
                      --message=
                    </label>
                    <textarea
                      {...form.register('message')}
                      rows={6}
                      className="w-full bg-cyber-dark border border-cyber-gray rounded px-3 py-2 font-mono text-cyber-primary focus:border-cyber-primary focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-xs mt-1 font-mono">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-cyber-primary border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}