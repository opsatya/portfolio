import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle } from 'lucide-react';

const ContactFormWidget = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="h-full bg-terminal-bg/30 border-l border-terminal-comment/20">
      {/* Header */}
      <div className="p-4 border-b border-terminal-comment/20">
        <div className="flex items-center space-x-2">
          <Send size={16} className="text-terminal-string" />
          <h3 className="text-terminal-text font-mono text-sm">// send-message.tsx</h3>
        </div>
      </div>

      {/* Form */}
      <div className="p-6">
        <div className="mb-6 text-terminal-comment text-sm font-mono">
          <div>{"/**"}</div>
          <div>{" * Ready to collaborate? Let's talk!"}</div>
          <div>{" */"}</div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-terminal-variable text-sm font-mono">
              const yourName =
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name..."
              required
              className="bg-terminal-bg/50 border-terminal-comment/30 text-terminal-text font-mono text-sm focus:border-terminal-string"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-terminal-variable text-sm font-mono">
              const yourEmail =
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              required
              className="bg-terminal-bg/50 border-terminal-comment/30 text-terminal-text font-mono text-sm focus:border-terminal-string"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-terminal-variable text-sm font-mono">
              const yourMessage =
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project or idea..."
              required
              rows={6}
              className="bg-terminal-bg/50 border-terminal-comment/30 text-terminal-text font-mono text-sm focus:border-terminal-string resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-terminal-string hover:bg-terminal-string/80 text-terminal-bg font-mono text-sm transition-all"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-terminal-bg/30 border-t-terminal-bg rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send size={16} />
                <span>sendMessage()</span>
              </div>
            )}
          </Button>
        </form>

        {/* Social Links */}
        <div className="mt-8 pt-6 border-t border-terminal-comment/20">
          <div className="text-terminal-comment text-sm font-mono mb-4">
            // Or connect with me on:
          </div>
          <div className="space-y-3">
            <a
              href="mailto:satyajeet.singh12005@email.com"
              className="flex items-center space-x-3 text-terminal-link hover:text-terminal-keyword transition-colors font-mono text-sm"
            >
              <span>✉</span>
              <span>satyajeet.singh12005@email.com</span>
            </a>
            <a
              href="https://github.com/opsatya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-terminal-link hover:text-terminal-keyword transition-colors font-mono text-sm"
            >
              <span>⚡</span>
              <span>github.com/opsatya</span>
            </a>
            <a
              href="https://www.linkedin.com/in/satyjeet-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-terminal-link hover:text-terminal-keyword transition-colors font-mono text-sm"
            >
              <span>💼</span>
              <span>https://www.linkedin.com/in/satyjeet-singh/</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormWidget;