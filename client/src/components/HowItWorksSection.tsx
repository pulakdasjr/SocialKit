import { Link, Sparkles, Eye, Send } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Link className="w-8 h-8" />,
      title: "Connect Your Accounts",
      description:
        "Link all your social media platforms in just a few clicks. We support Instagram, Twitter, Facebook, LinkedIn, TikTok, and more.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Create with AI",
      description:
        "Generate engaging captions, hashtags, and content ideas using our advanced AI. Customize tone and style for each platform.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Preview & Plan",
      description:
        "See exactly how your posts will look on each platform. Arrange them in our visual calendar for perfect timing.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Schedule & Publish",
      description:
        "Set your preferred times or let our AI suggest optimal posting times. Your content goes live automatically.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-28 relative bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            🚀 Simple 4-step process
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            How SocialPlan works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From connection to publication in minutes. Our streamlined workflow
            makes social media management effortless.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connection line with shimmer */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-amber-500 to-green-500 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center relative"
              >
                <div className="relative mb-8">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-9 h-9 bg-gradient-to-r from-primary to-purple-500 text-white font-bold rounded-full flex items-center justify-center shadow-md z-10">
                    {index + 1}
                  </div>

                  {/* Icon container with glow */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Text content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-6 text-gray-400/40">
                    <svg
                      className="w-8 h-8 animate-bounce-x"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
