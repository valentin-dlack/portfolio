import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'R6dle',
    description:
      'R6dle is a website like Wordle but for Rainbow Six Siege operators. The goal is to find the operator with the least amount of tries.',
    thumbnail: '/images/projects/r6dle/rainbowsix-illu.jpg',
    links: [
      {
        type: 'github',
        url: 'https://github.com/valentin-dlack/r6dle'
      },
      {
        type: 'live',
        url: 'https://r6dle.com/'
      }
    ]
  },
  {
    name: 'NatHD / NatHD SI',
    description:
      'NatHD (Nouvelle-Aquitaine Très Haut Débit) is a regional project to deploy fiber optics in the Nouvelle-Aquitaine region. I also on the backoffice of the project, NatHD SI.',
    thumbnail: '/images/projects/nathd/nathd-illu.png',
    links: [
      {
        type: 'live',
        url: 'https://nathd.fr/'
      }
    ]
  },
  {
    name: 'React Live Chat',
    description:
      'A simple live chat application made with React and Firebase. You can create a room and chat with your friends.',
    thumbnail: '/images/projects/react-livechat/react-livechat-illu.png',
    links: [
      {
        type: 'github',
        url: 'https://github.com/valentin-dlack/livechat-react'
      }
    ]
  },
  {
    name: 'Portfolio',
    description:
      'My personal portfolio. I made this website to showcase my projects and skills.',
    thumbnail: '/images/projects/portfolio/portfolio-illu.png',
    links: [
      {
        type: 'github',
        url: 'https://github.com/valentin-dlack/portfolio'
      },
      {
        type: 'live',
        url: 'https://www.vdautrement.fr/'
      }
    ]
  },
  {
    name: 'B1P B0UP - My First Discord Bot',
    description:
      "B1P B0UP is a simple Discord bot made with Discord.js and Node.js. It can do some auto moderation and some fun commands. It's archived now.",
    thumbnail: '/images/projects/bipboup/bipboup-illu.png',
    links: [
      {
        type: 'github',
        url: 'https://github.com/valentin-dlack/bipboup-bot'
      }
    ]
  }
];

export { projects };