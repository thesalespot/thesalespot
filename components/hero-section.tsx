'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { WaitlistForm } from '@/components/waitlist-form';
import { MaskContainer } from './ui/svg-mask-effect';

export function HeroSection() {
  return (
    <section className="relative mt-3 bg-gradient-to-br from-blue-100 to-blue-50/70 to-50% w-[96vw] mx-auto rounded-lg   h-screen flex items-center justify-center p-8" style={{ borderRadius: '30px' }}>

      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-[#1a365d]"
        >
          Empower Sales,
          Delight Prospects,
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 "
          style={{ 
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >

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
              <button 
                className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                  boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 2px 4px -1px rgba(37, 99, 235, 0.1)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 8px -1px rgba(37, 99, 235, 0.3), 0 4px 6px -1px rgba(37, 99, 235, 0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 2px 4px -1px rgba(37, 99, 235, 0.1)';
                }}
              >
                Join the Waitlist
              </button>
            </DialogTrigger>
            <DialogContent 
              className="rounded-2xl p-0 overflow-hidden border-none"
              style={{
                background: 'white',
                maxWidth: '500px',
                width: '90%',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="p-8">
                <h2 
                  className="text-3xl font-bold mb-2"
                  style={{ color: '#1a365d' }}
                >
                  Join the Waitlist
                </h2>
                <p 
                  className="text-base mb-6"
                  style={{ color: '#475569' }}
                >
                  Be the first to experience the future of sales enablement.
                </p>
                <WaitlistForm />
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

    </section>
  );
}