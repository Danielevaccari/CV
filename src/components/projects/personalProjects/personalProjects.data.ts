import nodesvg from "../../../images/node.svg";
import reactsvg from "../../../images/reactSvg.svg";
import nextsvg from "../../../images/next.svg";
import postgressvg from "../../../images/postgresql.svg";
import cards from "../../../images/cards.svg";
import hedera from "../../../images/hedera.svg";
import hederasmalllogo from "../../../images/hederaSmallLogo.svg";
import { IProject } from "../../../interfaces";

export const personalProjects: ReadonlyArray<IProject> = [
    {
        id: 1,
        description: "Hedera Hashgragh consensus service application",
        href: "https://paradoxhedera.netlify.app/",
        image: hedera,
        icons: [reactsvg, hederasmalllogo],
    },
    {
        id: 2,
        description: "Rulebook for cardgame Magic The Gathering. Data from Wizards API.",
        href: "https://reaktor-next-js-express-js-preassignment.vercel.app",
        image: cards,
        icons: [reactsvg, nextsvg],
    },
    {
        id: 3,
        description:
            "Bitcoin downward trend, volume and best buy/sell date from historic data. Data from Coingecko.com API.",
        href: "https://tender-aryabhata-fa5705.netlify.app",
        image: cards,
        icons: [reactsvg],
    },
    {
        id: 4,
        description:
            "Software project course in University of Tampere. Application that allows easier selling and buying of locally produced food. Customer: Satoja oy",
        href: "https://satoja2.herokuapp.com",
        image: cards,
        icons: [reactsvg, nodesvg, postgressvg],
    },
];
