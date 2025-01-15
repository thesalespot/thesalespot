'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { WaitlistForm } from '@/components/waitlist-form';
import { MaskContainer } from './ui/svg-mask-effect';

export function HeroSection() {
  return (
    <section className="relative mt-5 bg-gradient-to-br from-blue-100 to-blue-50/70 to-50% w-[96vw] mx-auto rounded-lg   h-screen flex items-center justify-center p-8" style={{ borderRadius: '30px' }}>
     
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Empower Sales, 
          Delight Prospects,<br/> 
          Close Quick
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Transform your sales process with AI-powered meeting insights, seamless collaboration, and actionable analytics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-all duration-300">
                Join the Waitlist
              </Button>
            </DialogTrigger>
            <DialogContent>
              <WaitlistForm />
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
      
    </section>
  );
}