'use client';

import { cn } from '@/lib/utils';
import { Code2, Database, Palette, Rocket, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FloatingIcon } from './floating-icon';

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = ['Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Code Craftsman'];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={cn('relative h-[500px] w-full overflow-hidden md:h-[600px]')}>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0'>
        <Image
          src='/assets/images/cover-image.jpg'
          alt='Cover'
          fill
          className='object-cover'
          priority
        />
        {/* Dark Overlay for better text visibility */}
        <div className='absolute inset-0 bg-background/70' />
        {/* Subtle gradient accent */}
        <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10' />
      </div>

      {/* Floating Icons */}
      {mounted && (
        <>
          <FloatingIcon icon={Code2} delay='0s' position='top-20 left-10 md:left-20' />
          <FloatingIcon icon={Rocket} delay='0.5s' position='top-32 right-16 md:right-32' />
          <FloatingIcon icon={Database} delay='1s' position='bottom-40 left-16 md:left-40' />
          <FloatingIcon icon={Zap} delay='1.5s' position='bottom-32 right-20 md:right-48' />
          <FloatingIcon icon={Palette} delay='2s' position='top-48 left-1/4' />
          <FloatingIcon icon={Sparkles} delay='2.5s' position='top-40 right-1/4' />
        </>
      )}

      {/* Hero Content */}
      <div className='relative z-10 flex h-full items-center justify-center'>
        <div className='container mx-auto px-4 text-center'>
          <div
            className={cn('animate-fade-in-up space-y-4', mounted ? 'opacity-100' : 'opacity-0')}
          >
            {/* Main Heading */}
            <h1 className='text-4xl font-bold text-foreground md:text-6xl lg:text-7xl'>
              Hi, I&apos;m <span className='text-primary'>Amjath Husain</span>
            </h1>

            {/* Animated Subtitle */}
            <div className='relative h-12 md:h-16'>
              <p
                key={currentWord}
                className={cn(
                  'absolute inset-0 flex items-center justify-center text-xl font-semibold text-foreground md:text-2xl',
                  'animate-fade-in',
                )}
              >
                {words[currentWord]}
              </p>
            </div>

            {/* Description */}
            <p className='mx-auto max-w-2xl text-base text-foreground/80 md:text-lg'>
              Building scalable applications with modern technologies. Passionate about creating
              seamless user experiences and robust backend systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
