"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/waitlist-form";

export function WaitlistCTA() {
  return (
    <section className="relative py-16 sm:py-12 overflow-hidden"  id="contact" >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-secondary/20">
        <div className="absolute inset-0 bg-[url('/grain.svg')] opacity-20" />
      </div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6 relative">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text">
                Ready to Transform Your Sales Process?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the waitlist today and be among the first to experience the
                future of sales enablement.
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="dark:bg-white dark:text-black text-white bg-black rounded-xl">
                  <div className="relative px-8 py-4 rounded-full flex items-center">
                      <span className="group inline-flex items-center">
                        Join the Waiting List
                      </span>
                    <svg
                      className="ml-2 w-5 h-5 stroke-primary group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[500px] p-0 border-none text-white  bg-background/95 backdrop-blur-sm rounded-3xl shadow-2xl">
                <div className="relative p-6 sm:p-8">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl pointer-events-none" />

                  <div className="relative space-y-6">
                    <div className="space-y-2 text-white  ">
                      <h2 className="text-2xl sm:text-3xl text-white  font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        Join the Waitlist
                      </h2>
                      <p className="text-base sm:text-lg text-muted-foreground text-white ">
                        Be the first to experience the future of sales
                        enablement.
                      </p>
                    </div>

                    <WaitlistForm />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WaitlistCTA;
