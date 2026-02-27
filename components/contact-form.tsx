"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, User, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ name: "", email: "", message: "" });

    // Validation
    let hasErrors = false;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      hasErrors = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      hasErrors = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      hasErrors = true;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);

    // In production, you would send this to your backend/API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl animate-fade-in">
      <CardHeader className="space-y-2 pb-8">
        <h2 className="text-3xl font-bold text-center text-foreground">
          Get in Touch
        </h2>
        <p className="text-center text-muted-foreground">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </CardHeader>
      <CardContent>
        {isSubmitted && (
          <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="text-primary" size={24} />
            <p className="text-primary font-medium">
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div
            className="space-y-2 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <Label htmlFor="name" className="flex items-center gap-2">
              <User size={16} className="text-primary" />
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive animate-fade-in">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div
            className="space-y-2 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive animate-fade-in">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div
            className="space-y-2 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare size={16} className="text-primary" />
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us what you need help with..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && (
              <p className="text-sm text-destructive animate-fade-in">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold animate-slide-up"
            style={{ animationDelay: "400ms" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Sending...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
