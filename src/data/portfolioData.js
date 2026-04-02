import resumeFile from '../assets/Resume/Manish Das – Resume.pdf';

export const portfolioConfig = {
  name: 'Manish Das',
  role: 'MERN Stack Web Developer',
  location: 'Surat, Gujarat, India',
  email: 'manishlakhaipur1999@gmail.com',
  phone: '+91 9128408171',
  resumeUrl: resumeFile,
  socialLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/8171-manishsingh',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manish-das-51b68734a/',
    },
  ],
};

export const projectList = [
  {
    name: 'Blog Page Project',
    description:
      'A full-stack blog application with user authentication and CRUD operations for blog posts using the MERN stack.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    repo: 'https://github.com/8171-manishsingh/Node-js/tree/master/BLOG-PROJECTS-main',
    live: '#',
  },
  {
    name: 'Book Store',
    description:
      'A MERN-based REST API for managing books with full CRUD operations and clean backend architecture.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    repo: 'https://github.com/8171-manishsingh/Node-js/tree/master/book-store',
    live: '#',
  },
  {
    name: 'Movie Management',
    description:
      'A full-stack MERN web app to manage movies with add, edit, search, and delete features.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    repo: 'https://github.com/8171-manishsingh/Node-js/tree/master/movie-management-system',
    live: '#',
  },
  {
    name: 'Portfolio and Admin Dashboard',
    description:
      'A responsive MERN portfolio system with reusable UI components and admin-ready architecture for future content control.',
    stack: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    repo: 'https://github.com/8171-manishsingh',
    live: '#',
  },
  {
    name: 'Realtime Chat Module',
    description:
      'A chat feature using Socket.IO with room-based messaging, seen status, and backend event handling.',
    stack: ['React', 'Node.js', 'Express.js', 'Socket.IO'],
    repo: 'https://github.com/8171-manishsingh',
    live: '#',
  },
  {
    name: 'Job Portal Backend',
    description:
      'A robust API for job posting, applicant tracking, and recruiter workflow automation with secure auth.',
    stack: ['Express.js', 'MongoDB', 'Node.js', 'JWT'],
    repo: 'https://github.com/8171-manishsingh',
    live: '#',
  },
];
