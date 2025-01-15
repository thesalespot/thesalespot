'use client';

import { motion } from 'framer-motion';
import { Zap, Users, LineChart, Clock } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Improves Sales Efficiency",
      description: "Streamline your sales process and close deals faster"
    },
    {
      icon: LineChart,
      title: "Actionable Insights",
      description: "Make data-driven decisions with AI-powered analytics"
    },
    {
      icon: Users,
      title: "Enhanced Collaboration",
      description: "Work seamlessly with your team and prospects"
    },
    {
      icon: Clock,
      title: "Time-Saving Automation",
      description: "Reduce manual work and focus on what matters"
    }
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Benefits of TheSaleSpot</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your sales process with our powerful features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-block p-4 rounded-full bg-primary/5 mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}