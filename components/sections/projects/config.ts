import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'PlayPal',
    description:
      'PlayPal is a SaaS platform aimed at helping Board Game/Tabletop Game Café owners manage their games library and loaning system.',
    thumbnail: '/images/projects/playpal/playpal_illu.png',
    links: [
      {
        type: 'github',
        url: 'https://github.com/Maximauve/PlayPal'
      }
    ]
  },
  {
    name: 'NatHD / NatHD SI',
    description:
      'NatHD (Nouvelle-Aquitaine Très Haut Débit) is a regional project to deploy fiber optics in the Nouvelle-Aquitaine region. I also worked on the backoffice of the project, NatHD SI.',
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
