'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CircuitBoard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { WaitlistForm } from '@/components/waitlist-form';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={cn(
      'sticky top-0 w-[80%] mx-auto mt-2 z-50 transition-all shadow-none duration-300 ease-in-out px-24 py-3',
      isScrolled ? 'bg-white shadow-md w-[80%] mx-auto fixed mt-2 ml-[10%] rounded-[80px]' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href={'/'} >
          <div className=" cursor-pointer flex items-center space-x-2">
            <CircuitBoard className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">TheSaleSpot</span>
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('how-it-works')}
          >
            How It Works
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Join the Waiting List</Button>
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
        </div>
      </div>
    </nav>
  );
}