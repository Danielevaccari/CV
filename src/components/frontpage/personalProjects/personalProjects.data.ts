import mtgpng from '../../../images/mtg.png';
import satojapng from '../../../images/satoja.png';
import cvimage from '../../../images/cvimage.png';
import cryptopng from '../../../images/crypto.png';
import nodesvg from '../../../images/node.svg';
import reactsvg from '../../../images/reactSvg.svg';
import nextsvg from '../../../images/next.svg';
import postgressvg from '../../../images/postgresql.svg';

const personalProjects: ReadonlyArray<IProject> = [
  {
    id: "satoja",
    description: 'Software project course in University of Tampere. Application that allows easier selling and buying of locally produced food. Customer: Satoja oy',
    href: 'https://satoja2.herokuapp.com',
    image: satojapng,
    icons: [reactsvg, nodesvg, postgressvg],
  },
  {
    id: "bitcoinTracker",
    description: 'Bitcoin downward trend, volume and best buy/sell date from historic data. Data from Coingecko.com API.',
    href: 'https://tender-aryabhata-fa5705.netlify.app',
    image: cryptopng,
    icons: [reactsvg],
  },
  {
    id: "mtg",
    description: 'Rulebook for cardgame Magic The Gathering. Data from Wizards API.',
    href: 'https://reaktor-next-js-express-js-preassignment.vercel.app',
    image: mtgpng,
    icons: [reactsvg, nextsvg],
  },
  {
    id: "cv",
    description: 'My CV',
    href: '/CV',
    image: cvimage,
    icons: [],
  },

];

export default personalProjects;
