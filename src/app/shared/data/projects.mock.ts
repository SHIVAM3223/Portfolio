import { Project } from 'src/app/models/project.interface';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Blog-Maniac',
    tags: ['React', 'JavaScript', 'Tailwind', 'Firebase'],
    description:
      'It shows my work and skills, developed using React Js with Tailwind.',
    url: 'https://github.com/Shivam072001/Blog-Maniac',
    repo: 'https://github.com/Shivam072001/Blog-Maniac',
  },
  {
    id: '2',
    name: 'Editor-IO',
    tags: ['React', 'Material', 'Bootstrap'],
    description:
      'Editor-IO is an online code editor that allows real-time compilation and preview of HTML, CSS, and JavaScript. It also features a live Markdown preview functionality.',
    url: 'https://editor-io-rho.vercel.app/',
    repo: 'https://github.com/Shivam072001/Editor-io',
  },
];
