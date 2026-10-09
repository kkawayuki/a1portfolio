import demo1 from '../assets/videos/demo1.mp4'
import demo2 from '../assets/videos/demo2.mp4'

// edit this list to add/change projects; Projects.jsx renders whatever is here
const projects = [
  {
    title: 'ASCII Art Generator',
    keyword: 'ASCII', // short label shown in the navbar's projects dropdown
    description: 'Converts images to ASCII characters at user-adjustable output widths via slider. The application works by averaging luminance over pixel regions, then mapping them to characters of varying darkness.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    video: demo1, // imported above; plays behind the selector buttons
    thumbnail: '', // e.g. '/images/ascii.png'
    link: 'https://github.com/kkawayuki/asciiArt',
    live: 'https://ascii-art-iota.vercel.app/', // hosted site url; leave '' if none (live button shows greyed out)
  },
  {
    title: 'CRUD Marketplace',
    keyword: 'CRUD',
    description: 'A fullstack webapp built with React that uses RESTful API endpoints for the primary usage loop. Leverages Tailwind utility classes and Toast notifications for interactive user feedback.',
    tech: ['React.js', 'Node.js', 'MongoDB Atlas', 'Express', 'Tailwind CSS'],
    video: demo2,
    thumbnail: '',
    link: 'https://github.com/kkawayuki/crudMarketplaceFront',
    live: 'https://crud-marketplace-front.vercel.app/',
  },
  {
    title: 'WIP',
    keyword: 'WIP',
    description: 'under construction! Will add another project here once proud enough of one to!',
    tech: ['WIP'],
    video: '',
    thumbnail: '',
    link: '',
    live: '',
  },
]

export default projects
