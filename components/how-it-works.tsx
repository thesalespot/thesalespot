'use client';

import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your sales process with our AI-powered platform
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden bg-secondary/40"
          >


            <ReactPlayer
              url="https://youtu.be/cjrN-vru2h8?si=Kl5bvdCPnUo7qYuj"
              playing={false}
              controls={true}
              width="100%"
              height="100%"
            />

          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Record & Transcribe",
              description: "Automatically capture and transcribe sales meetings with high accuracy"
            },
            {
              title: "AI Analysis",
              description: "Get actionable insights through advanced AI-driven analysis"
            },
            {
              title: "Collaborate",
              description: "Share insights and work seamlessly with your team and prospects"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}