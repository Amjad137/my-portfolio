import { Loader2Icon } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className='flex items-center justify-center bg-secondary fixed top-0 left-0 z-50 w-screen h-screen'>
      <Loader2Icon className='w-7 h-7 animate-spin text-secondary-foreground' />
    </div>
  );
};

export default PageLoader;
