import { cn } from '@/lib/utils';

interface FloatingIconProps {
  icon: React.ElementType;
  delay: string;
  position: string;
}

export const FloatingIcon = ({ icon: Icon, delay, position }: FloatingIconProps) => (
  <div
    className={cn(
      'absolute animate-float opacity-20',
      'transition-all duration-300 hover:opacity-60 hover:scale-110',
      position,
    )}
    style={{ animationDelay: delay }}
  >
    <Icon className='h-8 w-8 text-primary md:h-12 md:w-12' />
  </div>
);
