"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle, Mail, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleWhatsApp = () => {
    const message = `Hello Partha, I'm ${formData.name} (${formData.email}). ${formData.message}`;
    const whatsappUrl = `https://wa.me/8801936754123?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send email using EmailJS or similar service
      // For now, we'll use a mailto link as a fallback
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      
      const mailtoUrl = `mailto:partharajsarker@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.location.href = mailtoUrl;
      
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus("idle");
      }, 3000);
      
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>

          <p className="text-muted-foreground mb-8">
            Have a project in mind? Send me a message and I'll get back to you!
          </p>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="partha raj sarker"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="partharajsarker@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-md"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Email client opened! Please send the message.</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-md"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                variant="default"
              >
                {isSubmitting ? (
                  <>
                    <Mail className="w-4 h-4 mr-2 animate-pulse" />
                    Opening Email Client...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                Or contact me directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="mailto:partharajsarker@gmail.com"
                  className="flex items-center justify-center gap-2 text-primary hover:underline px-4 py-2 rounded-md border border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Link>
                <Link
                  href="https://wa.me/8801936754123"
                  className="flex items-center justify-center gap-2 text-green-600 hover:underline px-4 py-2 rounded-md border border-green-600/20 hover:bg-green-600/5 transition-colors"
                  target="_blank"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
