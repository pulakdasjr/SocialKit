import {
  BarChart3,
  Bot,
  Globe,
  Palette,
  Shield,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import analyticsImage from "../assets/img/analytics.webp";
import calendarImage from "../assets/img/calenderview.png";
import aiImage from "../assets/img/ai caption.png";

// Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// const fadeIn: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.8 } },
// };

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const AdvancedFeaturesSection = () => {
  const features = [
    {
      icon: <BarChart3 className="w-7 h-7 text-white" />,
      title: "Advanced Analytics",
      description:
        "Track engagement, reach, and growth across all platforms with detailed insights and reports.",
      image: analyticsImage,
      benefits: [
        "Real-time performance tracking",
        "Competitor analysis",
        "ROI measurement",
        "Growth recommendations",
      ],
    },
    {
      icon: <Bot className="w-7 h-7 text-white" />,
      title: "AI-Powered Content",
      description:
        "Generate captions, hashtags, and content ideas that match your brand voice and audience.",
      image: aiImage,
      benefits: [
        "Brand voice learning",
        "Trend-based suggestions",
        "Multi-language support",
        "A/B test recommendations",
      ],
    },
    {
      icon: <Globe className="w-7 h-7 text-white" />,
      title: "Multi-Platform Management",
      description:
        "Manage all your social accounts from one dashboard with platform-specific optimizations.",
      image: calendarImage,
      benefits: [
        "10+ platform support",
        "Custom scheduling",
        "Bulk operations",
        "Cross-platform campaigns",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: <Palette className="w-5 h-5 text-white" />,
      title: "Brand Kit Integration",
      description: "Maintain consistent branding across all posts",
    },
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Enterprise Security",
      description: "SOC 2 compliant with advanced data protection",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-white" />,
      title: "Mobile Apps",
      description: "Manage your content on-the-go with our iOS and Android apps",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold tracking-wide mb-5">
            ⚡ Powerful capabilities
          </span>
          <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl md:text-5xl font-extrabold mb-5">
            Everything you need to dominate social media
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Advanced features designed for creators, marketers, and businesses
            ready to scale their social presence.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="space-y-20 md:space-y-28 mb-20 md:mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Text Block */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 25px rgba(59,130,246,0.7)",
                    }}
                    className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-base md:text-lg text-gray-600 mb-6">
                  {feature.description}
                </p>

                {/* Benefits with staggered animation */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {feature.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3"
                      variants={fadeUp}
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium text-sm md:text-base">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Image Block */}
              <motion.div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl opacity-30 rounded-full"></div>

                {/* Glass Card */}
                <div className="relative rounded-2xl overflow-hidden border border-white/40 backdrop-blur-md shadow-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-16 shadow-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Plus even more powerful tools
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Everything you need for professional social media management
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="text-center p-6 rounded-2xl transition-all duration-300 bg-white/40 backdrop-blur-md hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-5 text-white shadow-md">
                  {feature.icon}
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;
