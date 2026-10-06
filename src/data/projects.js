// edit this list to add/change projects; Projects.jsx renders whatever is here
const projects = [
  {
    title: 'ASCII Art Generator',
    keyword: 'ASCII', // short label shown on the selector button
    description: 'short description of the ascii art generator',
    tech: ['JavaScript', 'HTML', 'CSS'],
    video: '', // e.g. '/videos/ascii.mp4' (put file in public/videos)
    thumbnail: '', // e.g. '/images/ascii.png'
    link: 'https://github.com/kkawayuki/asciiArt',
    live: 'https://ascii-art-iota.vercel.app/', // hosted site url; leave '' if none (live button shows greyed out)
  },
  {
    title: 'CRUD Marketplace',
    keyword: 'CRUD',
    description: 'short description of the marketplace API',
    tech: ['Node', 'Express'],
    video: '',
    thumbnail: '',
    link: 'https://github.com/kkawayuki/crudMarketplace',
    live: 'https://crud-marketplace-front.vercel.app/',
  },
  {
    title: 'TEMP',
    keyword: 'TEMP',
    description: 'short description of the marketplace frontend',
    tech: ['React'],
    video: '',
    thumbnail: '',
    link: 'https://github.com/kkawayuki/crudMarketplaceFront',
    live: '',
  },
]

export default projects
