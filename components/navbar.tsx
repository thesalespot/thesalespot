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
      'sticky top-0 w-full z-50 transition-all shadow-none duration-500 ease-out px-24 py-4',
      isScrolled ? 'bg-white shadow-lg w-[80%] mx-auto fixed mt-3 ml-[10%] rounded-[80px]' : 'bg-transparent'
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
            <DialogContent>
              <WaitlistForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
}