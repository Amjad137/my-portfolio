import Image from 'next/image';

export const EducationContent = () => {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-semibold'>Education</h2>

      {/* Education Item */}
      <div className='flex gap-4'>
        {/* Institute Logo */}
        <div className='flex-shrink-0 shadow-md'>
          <Image
            src='/assets/images/ucsc_logo.jpeg'
            alt='University of Colombo School of Computing'
            width={64}
            height={64}
            className='rounded-md object-cover'
          />
        </div>

        {/* Education Details */}
        <div className='flex flex-col gap-1'>
          <h3 className='text-sm font-semibold md:text-base'>
            University of Colombo School of Computing
          </h3>
          <p className='text-xs font-light text-muted-foreground md:text-sm'>
            Bachelor of Information Technology
          </p>
          <p className='text-xs text-muted-foreground md:text-sm'>2025</p>
        </div>
      </div>
    </div>
  );
};
