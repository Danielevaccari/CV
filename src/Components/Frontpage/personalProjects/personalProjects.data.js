/* eslint-disable max-len */
import mtgpng from '../../../images/mtg.png';
import satojapng from '../../../images/satoja.png';
import cvimage from '../../../images/cvimage.png';
import cryptopng from '../../../images/crypto.png';

const personalProjects = [
  {
    id: 'Satoja',
    description: 'Software project course in University of Tampere. Application that allows easier selling and buying of locally produced food. Customer: Satoja oy',
    href: 'https://satoja2.herokuapp.com',
    image: satojapng,
    technology: 'React, node, Postgres',
    alt: 'cvimg',
  },
  {
    id: 'cryptoAnalyzer',
    description: 'Bitcoin downward trend, volume and best buy/sell date from historic data. Data from Coingecko.com API.',
    href: '',
    image: cryptopng,
    technology: 'React',
    alt: 'cryptopic',
  },
  {
    id: 'magicTheGathering',
    description: 'Rulebook for cardgame Magic The Gathering. Data from Wizards API.',
    href: 'https://reaktor-next-js-express-js-preassignment.vercel.app',
    image: mtgpng,
    technology: 'React, Next',
    alt: 'mtgpng',
  },
  {
    id: 'myCv',
    description: 'My CV',
    href: '/CV',
    image: cvimage,
    technology: 'React',
    alt: 'cvpic',
  },

];

export default personalProjects;
