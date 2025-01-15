'use client';

import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { WaitlistForm } from '@/components/waitlist-form';

export function WaitlistCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the waitlist today and be among the first to experience the future of sales enablement.
          </p>
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