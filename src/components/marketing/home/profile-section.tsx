'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export const ProfileSection = () => {
  return (
    <div className={cn('container mx-auto px-4')}>
      <div
        className={cn(
          'flex flex-col items-center gap-2 md:flex-row md:items-end md:gap-4',
          '-mt-20 md:-mt-28',
        )}
      >
        {/* Profile Avatar */}
        <Avatar className={cn('h-40 w-40 border-4 border-background md:h-52 md:w-52')}>
          <AvatarImage src='/assets/images/my-profile.jpg' alt='Amjath Husain' />
          <AvatarFallback className='text-2xl font-semibold md:text-4xl'>AH</AvatarFallback>
        </Avatar>

        {/* Name and Title */}
        <div
          className={cn(
            'flex flex-col items-center gap-0 pb-2 text-center md:mb-4 md:items-start md:text-left',
          )}
        >
          <h1 className={cn('text-2xl font-bold md:text-3xl')}>Amjath Husain</h1>
          <p className={cn('text-sm text-muted-foreground md:text-base')}>Software Developer</p>
        </div>
      </div>
    </div>
  );
};
