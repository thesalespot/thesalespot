"use client";
import TitleSection from "@/components/ui/title-section";
import { Button } from "@/components/ui/button";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { WaitlistForm } from "./waitlist-form";
import { useTheme } from "next-themes";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
export function HeroSection() {
  const {theme} = useTheme()
  return (
    <section
      className=" overflow-hidden
  px-4
  sm:px-6
  mt-10
  sm:flex
  sm:flex-col
  gap-4
  md:justify-center
  md:items-center"
    >
       <div className="z-10 flex min-h-64 items-center justify-center">
      <AnimatedGradientText>
        🌟 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          The future of sales enablement.
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
     
    </div>
     <TitleSection

        title="Empower Sales,Delight Prospects, Close Quick"
      />
      <div
        className="dark:bg-white
        dark:text-black
      p-[2px]
      mt-6
      rounded-xl
      bg-gradient-to-r
      from-primary
      to-brand-primaryBlue
    "
      >
        <Dialog>
          <DialogTrigger asChild>
            {(theme == "dark" ?<Button className="dark:bg-white dark:text-black rounded-xl flex justify-center items-center ">
              <div className="relative px-4 py-4 rounded-full flex justify-center items-center">
                <span className="group inline-flex justify-center items-center font-bold ">
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
            :
            <Button className="text-white bg-black rounded-xl flex justify-center items-center ">
              <div className="relative px-4 py-4 rounded-full flex justify-center items-center">
                <span className="group inline-flex justify-center items-center font-bold ">
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
            </Button>)}
          </DialogTrigger>

          <DialogContent className="sm:max-w-[500px] p-0 border-none bg-background/10  rounded-3xl shadow-2xl">
            <div className="relative p-6 sm:p-8">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl pointer-events-none" />

              <div className="relative space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Join the Waitlist
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Be the first to experience the future of sales enablement.
                  </p>
                </div>
                <WaitlistForm />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
