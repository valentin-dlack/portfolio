import { Skill } from '@/types/skill';
import { CodeIcon, DatabaseIcon, ServerIcon, WorkflowIcon } from 'lucide-react';

const skills: Skill[] = [
  {
    name: 'Web Development',
    description:
      'Building websites using TypeScript, NodeJs, Bun, and Tailwind CSS.',
    Icon: CodeIcon
  },
  {
    name: 'Depolyment & Cloud Services',
    description:
      'Deploying and managing applications on the cloud with AWS, GCP and else.',
    Icon: ServerIcon
  },
  {
    name: 'Database Management',
    description:
      'Storing and organizing data efficiently <ith SQL and NoSQL databases or Firebase.',
    Icon: DatabaseIcon
  },
  {
    name: 'Continuous Integration',
    description:
      'Using CI/CD pipelines to automate the deployment process with GitHub Actions, GitlabCI or CircleCI.',
    Icon: WorkflowIcon
  }
];

export { skills };
