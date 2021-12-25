/* eslint-disable max-len */
import mtgpng from '../../../images/mtg.png';
import satojapng from '../../../images/satoja.png';
import cvimage from '../../../images/cvimage.png';
import cryptopng from '../../../images/crypto.png';
import nodesvg from '../../../images/node.svg';
import reactsvg from '../../../images/reactSvg.svg';
import nextsvg from '../../../images/next.svg';
import postgressvg from '../../../images/postgresql.svg';

const personalProjects = [
  {
    id: 'Satoja',
    description: 'Software project course in University of Tampere. Application that allows easier selling and buying of locally produced food. Customer: Satoja oy',
    href: 'https://satoja2.herokuapp.com',
    image: satojapng,
    technology: [reactsvg, nodesvg, postgressvg],
    alt: 'cvimg',
  },
  {
    id: 'cryptoAnalyzer',
    description: 'Bitcoin downward trend, volume and best buy/sell date from historic data. Data from Coingecko.com API.',
    href: 'https://tender-aryabhata-fa5705.netlify.app',
    image: cryptopng,
    technology: [reactsvg],
    alt: 'cryptopic',
  },
  {
    id: 'magicTheGathering',
    description: 'Rulebook for cardgame Magic The Gathering. Data from Wizards API.',
    href: 'https://reaktor-next-js-express-js-preassignment.vercel.app',
    image: mtgpng,
    technology: [reactsvg, nextsvg],
    alt: 'mtgpng',
  },
  {
    id: 'myCv',
    description: 'My CV',
    href: '/CV',
    image: cvimage,
    technology: [],
    alt: 'cvpic',
  },

];

export default personalProjects;
