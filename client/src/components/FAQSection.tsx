import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the free trial work?",
      answer:
        "You get full access to SocialPlan for 7 days without any limitations. No credit card required to start. You can explore all features, connect your accounts, and schedule posts. If you decide to continue, you can choose a plan that fits your needs.",
    },
    {
      question: "Which social media platforms do you support?",
      answer:
        "We support Instagram, Twitter/X, Facebook, LinkedIn, TikTok, Pinterest, YouTube, and more. We're constantly adding new platforms based on user demand.",
    },
    {
      question: "How does the AI caption generation work?",
      answer:
        "Our AI learns from your past successful posts and adapts to your brand voice, generating engaging captions with hashtags and emojis tailored to each platform.",
    },
    {
      question: "Can I collaborate with my team?",
      answer:
        "Yes! Invite team members, assign roles, share content calendars, and work together on campaigns. Enterprise plans also include approval workflows.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we provide a 30-day money-back guarantee for all paid plans. If you're not satisfied within your first month, we'll issue a full refund.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 relative" id="faq">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent blur-3xl -z-10" />

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 shadow-sm backdrop-blur-md"
          >
            ❓ Frequently Asked Questions
          </motion.div>
          <motion.h2
            className="text-gradient mb-6 text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Everything you need to know
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Can’t find the answer you’re looking for? Reach out to our support team anytime.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-foreground pr-8 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openFAQ === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Still have questions? We’re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              Contact Support
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
