import { cn } from '@/lib/utils';
import { Copyright, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('border-t bg-background/80 backdrop-blur-sm')}>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          {/* Left: Copyright */}
          <div className='text-center text-sm text-muted-foreground md:text-left'>
            <p className='flex items-center gap-1'>
              <Copyright className='h-4 w-4' />
              {currentYear} Amjath Husain. All rights reserved.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className='flex items-center gap-4'>
            <a
              href='mailto:hey.amjath@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border bg-background transition-all hover:border-primary/50 hover:shadow-lg'
              aria-label='Email'
            >
              <Mail className='h-5 w-5 text-foreground' />
            </a>
            <a
              href='https://www.linkedin.com/in/amjad137/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border bg-background transition-all hover:border-primary/50 hover:shadow-lg'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-5 w-5 text-foreground' />
            </a>
            <a
              href='https://github.com/Amjad137'
              target='_blank'
              rel='noopener noreferrer'
              className='flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border bg-background transition-all hover:border-primary/50 hover:shadow-lg'
              aria-label='GitHub'
            >
              <Github className='h-5 w-5 text-foreground' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
