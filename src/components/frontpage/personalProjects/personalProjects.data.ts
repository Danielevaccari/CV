import nodesvg from "../../../images/node.svg";
import reactsvg from "../../../images/reactSvg.svg";
import nextsvg from "../../../images/next.svg";
import postgressvg from "../../../images/postgresql.svg";
import womanSvg from "../../../images/woman.svg";
import { IProject } from "../../../interfaces";

const personalProjects: ReadonlyArray<IProject> = [
    {
        id: "mtg",
        description: "Rulebook for cardgame Magic The Gathering. Data from Wizards API.",
        href: "https://reaktor-next-js-express-js-preassignment.vercel.app",
        image: womanSvg,
        icons: [reactsvg, nextsvg],
    },
    {
        id: "bitcoinTracker",
        description:
            "Bitcoin downward trend, volume and best buy/sell date from historic data. Data from Coingecko.com API.",
        href: "https://tender-aryabhata-fa5705.netlify.app",
        image: "",
        icons: [reactsvg],
    },
    {
        id: "satoja",
        description:
            "Software project course in University of Tampere. Application that allows easier selling and buying of locally produced food. Customer: Satoja oy",
        href: "https://satoja2.herokuapp.com",
        image: "",
        icons: [reactsvg, nodesvg, postgressvg],
    },
];

export default personalProjects;
