"use client";

import { Users, BarChart3, Building2 } from "lucide-react";
import { useTheme } from "next-themes";
import { ShineBorder } from "./ui/shine-border";

export function WhoWeHelp() {
  const cards = [
    {
      icon: Users,
      title: "Sales Representatives",
      points: [
        "Streamlines meeting preparation",
        "Provides actionable insights post-meetings",
        "Enhances follow-ups with prospects",
      ],
    },
    {
      icon: BarChart3,
      title: "Sales Managers",
      points: [
        "Tracks team performance",
        "Provides data-driven insights",
        "Helps set actionable strategies",
      ],
    },
    {
      icon: Building2,
      title: "Management",
      points: [
        "High-level overview of sales trends",
        "Informs strategic decision-making",
        "Increases team productivity",
      ],
    },
  ];
  const { theme } = useTheme();
  return (
    <section className=" bg-background" id="who-we-help">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="relative z-10 p-5 text-lg md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold">
            Who Do We Help?
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering every level of your sales organization
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <ShineBorder
              className="relative size-48 rounded-lg"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <div
                key={index}
                className="h-full flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-6 sm:p-8 flex flex-col justify-center items-center h-full">
                  <card.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-primary mx-auto" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
                    {card.title}
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 text-center flex-grow">
                    {card.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center text-center "
                      >
                        <span className="w-2 h-2 bg-primary text-center rounded-full mr-3 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ShineBorder>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeHelp;
