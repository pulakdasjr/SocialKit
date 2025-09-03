import { motion } from "framer-motion";

const CompanyLogosSection = () => {
  const companies = [
    "TechFlow",
    "CreativeHub",
    "StartupXYZ",
    "DigitalCorp",
    "InnovateNow",
    "BrandStudio",
    "MediaPlus",
    "NextGen",
    "CloudWorks",
    "DesignPro",
  ];

  // Vibrant gradient backgrounds for variety
  const gradients = [
    "from-pink-500 via-red-500 to-yellow-500",
    "from-blue-500 via-cyan-400 to-green-400",
    "from-purple-500 via-pink-500 to-red-500",
    "from-indigo-500 via-blue-600 to-purple-600",
    "from-emerald-500 via-green-400 to-lime-400",
    "from-orange-500 via-yellow-500 to-pink-500",
    "from-teal-500 via-cyan-500 to-blue-400",
    "from-fuchsia-500 via-purple-500 to-pink-400",
    "from-rose-500 via-orange-500 to-yellow-400",
    "from-sky-500 via-indigo-500 to-purple-500",
  ];

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="py-20 border-t border-b border-border/30 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative">
        <div className="section-container relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
              Trusted by innovators & creators
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Powering 500+ companies worldwide
            </h2>
          </motion.div>

          {/* Logo scroll container */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex animate-scroll">
              {[...companies, ...companies].map((company, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <div
                    className={`w-40 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r ${
                      gradients[index % gradients.length]
                    } text-white font-bold text-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                  >
                    {company}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyLogosSection;
