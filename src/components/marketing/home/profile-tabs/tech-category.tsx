import { cn } from '@/lib/utils';

interface TechCategoryProps {
  title: string;
  technologies: string[];
}

export const TechCategory = ({ title, technologies }: TechCategoryProps) => {
  return (
    <div className='space-y-3'>
      <h3 className='text-sm font-semibold md:text-base'>{title}</h3>
      <div className='flex flex-wrap gap-4'>
        {technologies.map((tech, index) => (
          <span
            key={tech}
            className={cn(
              'group relative overflow-visible rounded-lg border-2 border-border bg-background/80 px-4 py-2 text-xs font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 md:text-sm',
              'shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.6),0_0_40px_hsl(var(--primary)/0.4)]',
              'before:absolute before:-inset-[2px] before:rounded-lg before:bg-gradient-to-r before:from-emerald-500 before:via-cyan-500 before:to-blue-600 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 before:content-[""] hover:before:opacity-70',
              'after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-r after:from-emerald-500/20 after:via-cyan-500/20 after:to-blue-600/20 after:opacity-0 after:transition-all after:duration-300 after:content-[""] hover:after:opacity-100',
              'animate-in fade-in slide-in-from-bottom-2',
            )}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'backwards',
            }}
          >
            <span className='relative z-10'>{tech}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
