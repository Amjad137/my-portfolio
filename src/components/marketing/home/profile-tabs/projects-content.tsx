import { ProjectCard } from './project-card';

const projects = [
  {
    title: 'EASNA',
    description:
      'The Educational Administration System based on National Standards (EASNA) is an innovative solution designed to streamline and enhance the administrative processes of government schools.',
    image: '/assets/images/projects/easna-princi.png',
    link: 'https://easna.vercel.app',
    tags: ['Next.js', 'Shadcn', 'TypeScript', 'Hono.js', 'MongoDB', 'Zustand'],
  },
  {
    title: 'Blogora',
    description:
      'A full-stack blogging platform with user authentication, rich text editor, and real-time comments. Features include post management, user profiles, and interactive commenting system.',
    image: '/assets/images/projects/blogora-web.png',
    link: 'https://blogora-fe-sigma.vercel.app',
    tags: ['Next.js', 'Shadcn', 'TypeScript', 'Nest.js', 'MongoDB', 'Zustand'],
  },
  {
    title: 'Cine Library',
    description:
      'A movie browsing application that allows users to explore movie details, ratings, and reviews. Integrated with TMDB API to fetch real-time movie data with a sleek, responsive interface.',
    image: '/assets/images/projects/cine-library-web.png',
    link: 'https://main--cine-library.netlify.app/',
    tags: ['React.js', 'TMDB API', 'JavaScript'],
  },
];

export const ProjectsContent = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-xl font-semibold'>Projects</h2>
        <p className='mt-2 text-sm text-muted-foreground'>
          Here are some of my recent projects that showcase my skills and experience in full-stack
          development.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};
