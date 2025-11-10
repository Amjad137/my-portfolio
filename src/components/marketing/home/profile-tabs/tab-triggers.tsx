import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export const TabTriggers = () => {
  return (
    <TabsList
      className={cn(
        'mt-4 flex h-auto w-full justify-start gap-1 overflow-x-auto rounded-none border-b bg-transparent p-0',
      )}
    >
      <TabsTrigger
        value='about'
        className={cn(
          'rounded-none border-b-2 border-transparent bg-transparent px-4 py-3 data-[state=on]:border-primary data-[state=on]:bg-transparent data-[state=on]:shadow-none',
        )}
      >
        About
      </TabsTrigger>
      <TabsTrigger
        value='education'
        className={cn(
          'rounded-none border-b-2 border-transparent bg-transparent px-4 py-3 data-[state=on]:border-primary data-[state=on]:bg-transparent data-[state=on]:shadow-none',
        )}
      >
        Education
      </TabsTrigger>
      <TabsTrigger
        value='projects'
        className={cn(
          'rounded-none border-b-2 border-transparent bg-transparent px-4 py-3 data-[state=on]:border-primary data-[state=on]:bg-transparent data-[state=on]:shadow-none',
        )}
      >
        Projects
      </TabsTrigger>
      <TabsTrigger
        value='technologies'
        className={cn(
          'rounded-none border-b-2 border-transparent bg-transparent px-4 py-3 data-[state=on]:border-primary data-[state=on]:bg-transparent data-[state=on]:shadow-none',
        )}
      >
        Technologies
      </TabsTrigger>
      <TabsTrigger
        value='contact'
        className={cn(
          'rounded-none border-b-2 border-transparent bg-transparent px-4 py-3 data-[state=on]:border-primary data-[state=on]:bg-transparent data-[state=on]:shadow-none',
        )}
      >
        Contact
      </TabsTrigger>
    </TabsList>
  );
};
