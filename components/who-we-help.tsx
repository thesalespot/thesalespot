'use client';

import { motion } from 'framer-motion';
import { Users, BarChart3, Building2 } from 'lucide-react';

export function WhoWeHelp() {
  const cards = [
    {
      icon: Users,
      title: "Sales Representatives",
      points: [
        "Streamlines meeting preparation",
        "Provides actionable insights post-meetings",
        "Enhances follow-ups with prospects"
      ]
    },
    {
      icon: BarChart3,
      title: "Sales Managers",
      points: [
        "Tracks team performance",
        "Provides data-driven insights",
        "Helps set actionable strategies"
      ]
    },
    {
      icon: Building2,
      title: "Management",
      points: [
        "High-level overview of sales trends",
        "Informs strategic decision-making",
        "Increases team productivity"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Who Do We Help?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering every level of your sales organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <card.icon className="w-12 h-12 mb-6 text-primary mx-auto" />
              <h3 className="text-xl font-semibold mb-6 text-center">{card.title}</h3>
              <ul className="space-y-4">
                {card.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}