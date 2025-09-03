import { Sparkles, Zap, Eye, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "AI Caption Generation",
      description: "Instant, brand-matched captions for every platform.",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Canva & Google Drive Integration",
      description: "Choose any Canva design and publish it straight from SocialPlan.",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: "Post Previews",
      description: "Check how each post will look before it goes live.",
      gradient: "from-blue-500 via-cyan-400 to-green-400",
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Clean Calendar View",
      description: "Plan and manage all your content in a simple weekly timeline.",
      gradient: "from-emerald-500 via-teal-400 to-lime-400",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 font-medium uppercase tracking-wider mb-2">
            Powerful Features
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Everything you need to scale your content
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group"
            >
              {/* Icon with Gradient Background */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
