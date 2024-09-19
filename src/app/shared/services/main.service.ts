import { Injectable } from '@angular/core';
import { Experience, Post, Project, User } from '@models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  getPosts(): Observable<Post[]> {
    const dummyPosts: Post[] = [
      {
        id: '1',
        title: 'Dummy Post 1',
        tags: ['dummy', 'post'],
        url: 'https://example.com/dummy-post-1',
        date: new Date('2023-05-01'),
        description: 'This is a dummy post content',
      },
      {
        id: '2',
        title: 'Dummy Post 2',
        tags: ['dummy', 'post'],
        url: 'https://example.com/dummy-post-2',
        date: new Date('2023-05-02'),
        description: 'Another dummy post content',
      },
    ];
    return of(dummyPosts);
  }

  getExperience(): Observable<Experience[]> {
    const experience: Experience[] = [
      {
        id: '1',
        company: 'Biz2Credit',
        location: 'City, Country',
        description:
          'Developing SaaS products using the MEAN stack (MongoDB, Express.js, Angular, Node.js). Implementing cloud solutions with AWS for scalability and performance. Collaborating with cross-functional teams to deliver high-quality financial technology solutions. Focusing on creating user-friendly interfaces and robust backend systems for small business lending platforms.',
        position: 'Developer',
        url: 'https://www.biz2credit.com',
        startDate: 'August 2024',
        endDate: 'Present',
        remote: false,
        highlights: ['Accomplishment 1', 'Accomplishment 2'],
      },
      {
        id: '2',
        company: 'Tata Elxsi Limited',
        location: 'City, Country',
        description:
          'Developing a 3D object detection module for autonomous parking systems using ROS (Robot Operating System) and C++. Implementing advanced computer vision algorithms for accurate object recognition and tracking. Collaborating with automotive engineers to integrate the module into existing vehicle systems. Optimizing performance for real-time processing and enhancing parking assistance features.',
        position: 'Developer',
        url: 'https://www.tataelxsi.com',
        startDate: 'January 2024',
        endDate: 'June 2024',
        remote: false,
        highlights: ['Achievement 1', 'Achievement 2'],
      },
      {
        id: '3',
        company: 'NIT Patna',
        location: 'Patna, India',
        description:
          'Conducted research on malware analysis using machine learning decision tree algorithms. Published a conference paper on the findings and methodologies. Developed and implemented machine learning models to classify and detect various types of malware. Analyzed large datasets of malware samples to improve detection accuracy and efficiency.',
        position: 'Intern',
        url: 'http://www.nitp.ac.in',
        startDate: 'May 2023',
        endDate: 'July 2023',
        remote: false,
        highlights: ['Accomplishment 1', 'Accomplishment 2'],
      },
    ];
    return of(experience);
  }
  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        id: '1',
        name: 'Blog Maniac',
        description:
          'A blogging platform with user authentication and CRUD operations.',
        url: 'https://blog-maniac-nine.vercel.app/',
        repo: 'https://github.com/Shivam072001',
        tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
      },
      {
        id: '2',
        name: 'Editor-io',
        description:
          'An online code editor with real-time compilation and execution.',
        url: 'https://editor-io-rho.vercel.app/',
        repo: 'https://github.com/Shivam072001/Editor-io',
        tags: ['React', 'Node.js', 'Express'],
      },
    ];
    return of(projects);
  }
  getSkills(): Observable<string[]> {
    const dummySkills: string[] = [
      'Angular',
      'Typescript',
      'Tailwind',
      'HTML',
      'CSS',
      'React',
      'Bootstrap',
      'Node',
      'Firebase',
    ];
    return of(dummySkills);
  }

  getUser(): Observable<User> {
    const dummyUser: User = {
      id: '1',
      name: 'Shivam Tripathy',
      label: 'Software Developer',
      image: '../assets/logo.jpg',
      email: 'shivambhushan653@gamil.com',
      phone: '8340534900',
      phoneLabel: 'Mobile',
      url: 'https://johndoe.com',
      summart: 'This is a dummy user bio',
      location: {
        address: 'City, Country',
        map: 'https://maps.google.com/?q=City,Country',
      },
      profiles: [
        {
          url: 'https://github.com/Shivam072001',
          network: 'GitHub',
          username: 'Shivam072001',
        },
        {
          url: 'https://www.linkedin.com/in/shivam-bhushan-7ba53b204/',
          network: 'LinkedIn',
          username: 'Shivam Bhushan',
        },
      ],
    };
    return of(dummyUser);
  }
}
