"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsApp = () => {
    const message = `Hello Partha, I'm ${formData.name} (${formData.email}). ${formData.message}`;
    const whatsappUrl = `https://wa.me/8801936754123?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send via WhatsApp
    handleWhatsApp();

    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
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
            Have a project in mind? Send me a message directly on WhatsApp!
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

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                variant="default"
              >
                {isSubmitting ? (
                  <>
                    <MessageCircle className="w-4 h-4 mr-2 animate-pulse" />
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground">
                Or directly message me on{" "}
                <Link
                  href="https://wa.me/8801936754123"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  WhatsApp
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
