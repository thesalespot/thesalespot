"use client";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { ArrowRight, ChevronRight, PlayCircle } from "lucide-react";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";

const FeatureSection = ({ title, description, left, imageSrc, index }: any) => {
  const containerVariants = {
    hidden: { opacity: 0, x: left ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center gap-8 mb-20 relative"
    >
      {left ? (
        <>
          <div className="w-full md:w-1/2 group flex items-center justify-center">
            <motion.div
              className="relative rounded-xl overflow-hidden  w-full max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={imageSrc}
                  alt={title}
                  className="rounded-lg object-cover absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div variants={itemVariants}>
              <div className="z-10 flex min-h-64 mb-10">
                <AnimatedGradientText>
                  🌟 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    Feature {index + 1}
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                {title}
              </h3>
            </motion.div>
            <ul className="space-y-4 text-muted-foreground list-none">
              {description.map((point: string, idx: number) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3 group cursor-pointer p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200"
                >
                  <ArrowRight className="w-5 h-5 text-primary mt-1 group-hover:translate-x-1 transition-transform duration-200" />
                  <span className="group-hover:text-primary transition-colors duration-200">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2">
            <motion.div variants={itemVariants}>
              <div className="z-10 min-h-64 mb-10">
                <AnimatedGradientText>
                  🌟 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    Feature {index + 1}
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                {title}
              </h3>
            </motion.div>
            <ul className="space-y-4 text-muted-foreground list-none">
              {description.map((point: string, idx: number) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3 group cursor-pointer p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200"
                >
                  <ArrowRight className="w-5 h-5 text-primary mt-1 group-hover:translate-x-1 transition-transform duration-200" />
                  <span className="group-hover:text-primary transition-colors duration-200">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 group flex items-center justify-center">
            <motion.div
              className="relative rounded-xl overflow-hidden w-full max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={imageSrc}
                  alt={title}
                  className="rounded-lg object-cover absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export function HowItWorks() {
  const features = [
    {
      title: "Record & Transcribe",
      description: [
        "Automatically captures and records all sales meetings with crystal-clear audio quality",
        "Real-time transcription with 99% accuracy using advanced speech recognition",
        "Smart punctuation and speaker identification for better readability",
        "Searchable transcripts with timestamp linking to video segments",
        "Multiple language support with automatic language detection",
      ],
      imageSrc: "./assets/Transcribe.png",
      left: true,
    },
    {
      title: "AI Analysis",
      description: [
        "Advanced sentiment analysis to gauge customer engagement and interest",
        "Key topics extraction and conversation summarization",
        "Identification of action items and follow-up tasks",
        "Sales opportunity scoring and risk assessment",
        "Competitor mention tracking and analysis",
        "Automated meeting highlights and key moments detection",
      ],
      imageSrc: "./assets/AI-analysis.png",
      left: false,
    },
    {
      title: "Collaborate",
      description: [
        "Real-time sharing of meeting insights with team members",
        "Collaborative annotation and commenting on transcripts",
        "Integrated task assignment and tracking system",
        "Customizable sharing permissions and access controls",
        "Version history and change tracking for all shared content",
        "Integration with popular CRM and project management tools",
      ],
      imageSrc: "./assets/Collaborate.png",
      left: true,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="relative z-10 p-5 text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            Transform your sales process with our AI-powered platform
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden bg-secondary/40 group"
          >
            <ReactPlayer
              url="https://youtu.be/cjrN-vru2h8?si=Kl5bvdCPnUo7qYuj"
              playing={false}
              controls={true}
              width="100%"
              height="100%"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <PlayCircle className="w-24 h-24 text-primary" />
            </div>
          </motion.div>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureSection key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;