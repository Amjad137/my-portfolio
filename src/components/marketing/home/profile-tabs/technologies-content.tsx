import { TechCategory } from './tech-category';

const techStackData = [
  {
    title: 'Languages',
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
  {
    title: 'Frontend',
    technologies: [
      'React.js',
      'Next.js',
      'Redux',
      'Zustand',
      'TailwindCSS',
      'ShadCn',
      'TamagUI',
      'React Native',
      'Expo',
    ],
  },
  {
    title: 'Backend',
    technologies: ['Node.js', 'Express.js', 'Nest.js', 'Hono.js', 'REST API'],
  },
  {
    title: 'Databases & ORMs',
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose', 'Prisma', 'Drizzle'],
  },
  {
    title: 'Cloud Services',
    technologies: ['AWS', 'GCP', 'Firebase'],
  },
  {
    title: 'Development Tools',
    technologies: ['GitHub', 'Jira', 'ClickUp', 'Hoppscotch', 'Postman', 'Swagger'],
  },
  {
    title: 'Professional Skills',
    technologies: ['Agile Methodologies', 'English Proficiency', 'Presentations', 'Slack'],
  },
];

export const TechnologiesContent = () => {
  return (
    <div className='space-y-6'>
      <h2 className='text-xl font-semibold'>Technologies & Skills</h2>

      {techStackData.map((category) => (
        <TechCategory
          key={category.title}
          title={category.title}
          technologies={category.technologies}
        />
      ))}
    </div>
  );
};
