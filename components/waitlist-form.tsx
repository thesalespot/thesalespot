'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { addDocument, conf } from '@/lib/config';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const result = await addDocument("67878cc30030ca9ec3ae", "67878ccf001b4de2e4d6", { email });
      console.log("Document added:", result);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to add document:", error);
      // Optional: Show an error message to the user
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <h3 className="text-2xl font-semibold mb-2">Thank you for joining!</h3>
        <p className="text-muted-foreground">
          We'll keep you updated on our progress.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <DialogHeader>
        <DialogTitle>Join the Waitlist</DialogTitle>
        <DialogDescription>
          Be the first to know when we launch and get early access to TheSaleSpot.
        </DialogDescription>
      </DialogHeader>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </div>
    </form>
  );
}