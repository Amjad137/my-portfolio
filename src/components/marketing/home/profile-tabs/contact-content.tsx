import { Github, Linkedin, Mail } from 'lucide-react';

export const ContactContent = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-xl font-semibold'>Contact</h2>
        <p className='mt-2 text-sm text-muted-foreground'>
          Feel free to reach out! I&apos;m always open to discussing new opportunities,
          collaborations, or just having a chat about technology.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:max-w-3xl'>
        {/* Email */}
        <a
          href='mailto:hey.amjath@gmail.com'
          className='group flex items-center gap-3 rounded-lg border-2 border-border bg-background/80 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg'
        >
          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20'>
            <Mail className='h-5 w-5 text-primary' />
          </div>
          <div className='flex min-w-0 flex-col'>
            <span className='text-sm font-semibold'>Email</span>
            <span className='truncate text-xs text-muted-foreground'>hey.amjath@gmail.com</span>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href='https://www.linkedin.com/in/amjad137/'
          target='_blank'
          rel='noopener noreferrer'
          className='group flex items-center gap-3 rounded-lg border-2 border-border bg-background/80 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg'
        >
          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20'>
            <Linkedin className='h-5 w-5 text-primary' />
          </div>
          <div className='flex min-w-0 flex-col'>
            <span className='text-sm font-semibold'>LinkedIn</span>
            <span className='truncate text-xs text-muted-foreground'>@amjad137</span>
          </div>
        </a>

        {/* GitHub */}
        <a
          href='https://github.com/Amjad137'
          target='_blank'
          rel='noopener noreferrer'
          className='group flex items-center gap-3 rounded-lg border-2 border-border bg-background/80 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg'
        >
          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20'>
            <Github className='h-5 w-5 text-primary' />
          </div>
          <div className='flex min-w-0 flex-col'>
            <span className='text-sm font-semibold'>GitHub</span>
            <span className='truncate text-xs text-muted-foreground'>@Amjad137</span>
          </div>
        </a>
      </div>
    </div>
  );
};
