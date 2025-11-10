'use client';

import { Tabs, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { AboutContent } from './about-content';
import { ContactContent } from './contact-content';
import { EducationContent } from './education-content';
import { ProjectsContent } from './projects-content';
import { TabTriggers } from './tab-triggers';
import { TechnologiesContent } from './technologies-content';

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className={cn('container mx-auto px-4')}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        {/* Tab Triggers */}
        <TabTriggers />

        {/* Tab Contents */}
        <div className={cn('mt-6 pb-8')}>
          <TabsContent value='about' className='mt-0'>
            <AboutContent />
          </TabsContent>

          <TabsContent value='education' className='mt-0'>
            <EducationContent />
          </TabsContent>

          <TabsContent value='projects' className='mt-0'>
            <ProjectsContent />
          </TabsContent>

          <TabsContent value='technologies' className='mt-0'>
            <TechnologiesContent />
          </TabsContent>

          <TabsContent value='contact' className='mt-0'>
            <ContactContent />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
