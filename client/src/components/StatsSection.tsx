import { TrendingUp, Users, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: "10K+",
      label: "Active Creators",
      description: "Trust SocialPlan daily",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      value: "2M+",
      label: "Posts Scheduled",
      description: "Across all platforms",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      value: "85%",
      label: "Time Saved",
      description: "On content management",
      gradient: "from-blue-500 via-cyan-400 to-green-400",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable posting",
      gradient: "from-emerald-500 via-teal-400 to-lime-400",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Animated background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-purple-400/30 via-pink-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400/30 via-teal-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            📊 Trusted by thousands worldwide
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Numbers that speak for themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of creators who have transformed their social media workflow with SocialPlan
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
            >
              {/* Icon with gradient background */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 animate-pulse`}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-gray-900">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-gray-600 mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
