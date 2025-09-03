import { useEffect } from "react";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "per month",
      description: "Perfect for individual creators getting started",
      features: [
        "3 social media accounts",
        "30 posts per month",
        "Basic analytics",
        "AI caption generation",
        "Email support",
        "Content calendar",
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "For serious creators and small businesses",
      features: [
        "10 social media accounts",
        "Unlimited posts",
        "Advanced analytics & reports",
        "AI content suggestions",
        "Priority support",
        "Team collaboration",
        "Custom scheduling",
        "Brand kit integration",
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For agencies and large teams",
      features: [
        "Unlimited accounts",
        "Unlimited posts",
        "Advanced AI features",
        "White-label solution",
        "Dedicated account manager",
        "API access",
        "Custom integrations",
        "Advanced security",
        "Training & onboarding",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-24 relative bg-background" id="pricing">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            data-aos="fade-up"
          >
            💰 Simple, transparent pricing
          </div>
          <h2 className="text-gradient mb-6 text-4xl font-extrabold" data-aos="fade-up">
            Choose your perfect plan
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Start free for 7 days. No credit card required. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl transition-all duration-500 hover:scale-105`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white text-sm font-medium flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`glass rounded-3xl p-8 border h-full ${
                  plan.popular
                    ? "border-primary/40 shadow-xl"
                    : "border-border/50 hover:border-primary/20"
                }`}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md`}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full text-lg font-semibold py-6 rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
                      : "bg-background border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary" />
              <span>7-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
