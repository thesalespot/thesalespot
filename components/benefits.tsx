"use client";

import { Zap, Users, LineChart, Clock } from "lucide-react";
import { MagicCard } from "./ui/magic-card";
import { useTheme } from "next-themes";

export function Benefits() {
  const { theme } = useTheme();
  const benefits = [
    {
      icon: Zap,
      title: "Improves Sales Efficiency",
      description: "Streamline your sales process and close deals faster",
    },
    {
      icon: LineChart,
      title: "Actionable Insights",
      description: "Make data-driven decisions with AI-powered analytics",
    },
    {
      icon: Users,
      title: "Enhanced Collaboration",
      description: "Work seamlessly with your team and prospects",
    },
    {
      icon: Clock,
      title: "Time-Saving Automation",
      description: "Reduce manual work and focus on what matters",
    },
  ];

  return (
    <section className="py-12 sm:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="relative z-10 p-5 text-lg md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold">
            Benefits of TheSaleSpot
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your sales process with our powerful features
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              key={index}
              className="group relative overflow-hidden border rounded-2xl bg-card p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 transition-transform duration-300 group-hover:scale-110">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
