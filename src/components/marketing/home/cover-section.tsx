import { cn } from '@/lib/utils';
import Image from 'next/image';

export const CoverSection = () => {
  return (
    <div className={cn('relative h-80 w-full overflow-hidden md:h-[28rem]')}>
      <Image
        src='/assets/images/cover-image.jpg'
        alt='Cover'
        fill
        className='object-cover'
        priority
      />
    </div>
  );
};
