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
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90">
                Join the Waitlist Now
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