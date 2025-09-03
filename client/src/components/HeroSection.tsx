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
    <section className="relative pt-24 pb-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 shadow-sm">
              🎉 Built for Creators, Small Teams and Indie Hackers
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
              Schedule your social media posts{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                in one place.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Connect your accounts, generate captions with AI, preview each post, 
              then schedule & publish — in seconds.
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mb-10"
            >
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-4 rounded-xl shadow-lg transition-all"
              >
                🚀 Start 7-Day Free Trial
              </Button>
            </motion.div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 mb-10">
              <div className="flex -space-x-3">
                {userAvatars.map((avatar, index) => (
                  <motion.img
                    key={index}
                    src={avatar}
                    alt="User avatar"
                    className="w-11 h-11 rounded-full border-2 border-white shadow-sm"
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  />
                ))}
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 text-sm font-medium">
                Trusted by 350+ creators
              </span>
            </div>

            {/* Supported Platforms */}
            <div>
              <p className="text-sm text-gray-500 mb-3 font-medium uppercase tracking-wide">
                All major platforms supported
              </p>
              <div className="flex flex-wrap gap-3">
                {socialPlatforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-xl hover:bg-gray-200 transition"
                  >
                    {platform}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-25 scale-105" />
              
              {/* Main Image */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <img
                  src={heroImage}
                  alt="SocialPlan Dashboard Preview"
                  className="w-full h-auto"
                />
                
                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg"
                >
                  ✨ AI Captions Ready
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-4 left-4 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-md"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 font-medium">5 posts scheduled</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
