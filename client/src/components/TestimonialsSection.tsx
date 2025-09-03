import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = Array.from({ length: 30 }, (_, i) => ({
  quote: `This is testimonial number ${i + 1}. SocialPlan makes my workflow so smooth 🚀`,
  author: `User ${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
  platform: ["Twitter", "LinkedIn", "Instagram", "ProductHunt"][i % 4],
}));

// Split into 4 columns
const columns = [0, 1, 2, 3].map((col) =>
  testimonials.filter((_, i) => i % 4 === col)
);

const TestimonialsWall = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              30,000+ creators
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Real feedback from real people — always moving, just like your growth 🚀
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((colItems, colIndex) => (
            <ScrollingColumn
              key={colIndex}
              items={colItems}
              direction={colIndex % 2 === 0 ? "up" : "down"}
              speed={60 + colIndex * 10} // slower scrolling
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// 🔥 Reusable scrolling column with pause-on-hover
const ScrollingColumn = ({
  items,
  direction,
  speed,
}: {
  items: typeof testimonials;
  direction: "up" | "down";
  speed: number;
}) => {
  const [paused, setPaused] = useState(false);

  return (
    // 👇 fixed height wrapper (responsive)
    <div className="h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
      <motion.div
        className="flex flex-col space-y-6"
        animate={
          paused
            ? { y: 0 }
            : direction === "up"
            ? { y: ["0%", "-50%"] }
            : { y: ["-50%", "0%"] }
        }
        transition={
          paused
            ? { duration: 0 }
            : {
                duration: speed,
                ease: "linear",
                repeat: Infinity,
              }
        }
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Duplicate items to create infinite loop */}
        {[...items, ...items].map((t, i) => (
          <div
            key={i}
            className="bg-card/70 backdrop-blur-md border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 w-full"
          >
            <Quote className="w-6 h-6 text-primary mb-3" />
            <blockquote className="text-foreground mb-4 leading-relaxed">
              “{t.quote}”
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-foreground text-sm">{t.author}</p>
                  <p className="text-muted-foreground text-xs">{t.platform}</p>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsWall;
