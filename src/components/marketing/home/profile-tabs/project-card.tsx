import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

export const ProjectCard = ({ title, description, image, link, tags }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-border bg-background transition-all duration-300 hover:border-primary/50 hover:shadow-xl',
      )}
    >
      {/* Project Image */}
      <div className='relative h-48 w-full overflow-hidden bg-muted'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>

      {/* Content */}
      <div className='flex flex-1 flex-col gap-3 p-4'>
        {/* Title */}
        <h3 className='text-lg font-semibold'>{title}</h3>

        {/* Description */}
        <p className='line-clamp-4 text-sm text-muted-foreground'>{description}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary'
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* View Project Button */}
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className={cn(
            'mt-auto flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg',
          )}
        >
          View Project
          <ExternalLink className='h-4 w-4' />
        </a>
      </div>
    </div>
  );
};
