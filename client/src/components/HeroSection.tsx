import { Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import heroImage from "../assets/img/dashboardscreeshot.png";

const HeroSection = () => {
  const socialPlatforms = ["📱", "📘", "🐦", "📸", "💼", "🎵", "📌", "▶️"];
  const userAvatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
  ];

  return (
    <section className="relative pt-28 pb-24 overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-32 w-[32rem] h-[32rem] bg-purple-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-medium mb-7 shadow-sm"
            >
              🎉 Built for Creators, Small Teams & Indie Hackers
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight mb-7">
              Manage your social media{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                effortlessly.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
              Connect your accounts, generate AI-powered captions, preview your
              posts, then schedule & publish — all in one powerful dashboard.
            </p>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg px-10 py-5 rounded-2xl shadow-xl transition-all"
              >
                🚀 Start 7-Day Free Trial
              </Button>
            </motion.div>

            {/* Social Proof */}
            <div className="flex items-center gap-5 mb-12">
              <div className="flex -space-x-3">
                {userAvatars.map((avatar, index) => (
                  <motion.img
                    key={index}
                    src={avatar}
                    alt="User avatar"
                    className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-900 shadow-md"
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Trusted by <strong>350+ creators</strong>
              </span>
            </div>

            {/* Supported Platforms */}
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-semibold uppercase tracking-wider">
                Supported Platforms
              </p>
              <div className="flex flex-wrap gap-3">
                {socialPlatforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-xl shadow hover:shadow-lg transition"
                  >
                    {platform}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-25 animate-pulse" />

            {/* Dashboard Preview */}
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <img
                src={heroImage}
                alt="SocialPlan Dashboard Preview"
                className="w-full h-auto"
              />

              {/* Floating Labels */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-5 right-5 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
              >
                ✨ AI Captions Ready
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-5 left-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    5 posts scheduled
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
