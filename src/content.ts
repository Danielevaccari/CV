// All site copy lives here, so updating the CV never means touching components.
// Wrap a phrase in **double asterisks** to highlight it.
// Keep it public-safe: no phone number, email or home address.

export type Link = {
    readonly label: string;
    readonly href: string;
};

/** One achievement: a short bold label plus a one-line detail (keep it under ~50 characters). */
export type Highlight = {
    readonly title: string;
    readonly detail: string;
};

export type HighlightGroup = {
    readonly label: string;
    readonly items: ReadonlyArray<Highlight>;
};

export type Job = {
    readonly role: string;
    readonly company: string;
    readonly period: string;
    readonly highlights: ReadonlyArray<HighlightGroup>;
};

export type SkillGroup = {
    readonly label: string;
    readonly items: ReadonlyArray<string>;
    /** Accent this group's tags. */
    readonly featured?: boolean;
};

export type ProjectIcon = "hedera" | "cards" | "chart";

export type Project = {
    readonly title: string;
    readonly icon: ProjectIcon;
    readonly description: string;
    readonly link?: Link;
    readonly stack?: ReadonlyArray<string>;
};

export type Education = {
    readonly degree: string;
    readonly school: string;
    readonly period: string;
    readonly thesis?: Link;
};

export const profile = {
    name: "Daniele Johannes Vaccari",
    role: "Full-Stack Developer",
    focus: "Agentic AI Development · Production Planning Systems (APS)",
    summary:
        "Full-stack developer (**.NET / React**) with **4.5+ years** building production planning (APS) applications for large wood and food industry manufacturers, owning features from design through go-live and production support. Using AI in development daily since 2022, now focused on **agentic coding**: a **Claude Code harness** and **MCP endpoints** that let AI agents work directly with the application.",
    links: [{ label: "GitHub", href: "https://github.com/Danielevaccari" }] as ReadonlyArray<Link>,
};

export const experience: ReadonlyArray<Job> = [
    {
        role: "Web Application Developer (Full-Stack), APS",
        company: "Pinja Oy",
        period: "Mar 2022 – Present",
        highlights: [
            {
                label: "Agentic AI",
                items: [
                    { title: "Agent harness", detail: "Claude Code harness for APS development" },
                    {
                        title: "MCP endpoints",
                        detail: "Expose the app's internal endpoints to AI agents",
                    },
                ],
            },
            {
                label: "Production planning",
                items: [
                    {
                        title: "Volume planning",
                        detail: "Long-horizon capacity and output planning",
                    },
                    {
                        title: "Billet planning",
                        detail: "2-click process that reduces material waste",
                    },
                    {
                        title: "Routing logic",
                        detail: "Dynamic order-specific work stages and routing",
                    },
                    { title: "Integrations", detail: "Incl. a standardized calendar integration" },
                ],
            },
            {
                label: "Delivery",
                items: [
                    { title: "Ownership & QA", detail: "Requirements to go-live, in teams of 4–8" },
                    {
                        title: "Production support",
                        detail: "Technical support for live production systems",
                    },
                    {
                        title: "Releases",
                        detail: "Octopus Deploy, Docker, Azure DevOps CI/CD",
                    },
                ],
            },
        ],
    },
];

export const skills: ReadonlyArray<SkillGroup> = [
    { label: "Frontend", items: ["React", "TypeScript"] },
    { label: "Backend", items: [".NET", "C#", "ASP.NET Core", "Entity Framework"] },
    { label: "Database", items: ["SQL", "SQL Server"] },
    { label: "Testing", items: ["Cypress", "Playwright", "Jest"] },
    { label: "DevOps", items: ["Git", "Azure DevOps", "CI/CD", "Octopus Deploy", "Docker"] },
    {
        label: "AI",
        featured: true,
        items: [
            "Claude Code",
            "Agentic coding",
            "Agent harnesses",
            "MCP servers",
            "AI-assisted dev since 2022",
        ],
    },
    {
        label: "Domain",
        items: [
            "APS",
            "Manufacturing (wood, food)",
            "Volume & billet planning",
            "System integrations",
        ],
    },
];

export const projects: ReadonlyArray<Project> = [
    {
        title: "Paradox Hedera",
        icon: "hedera",
        description: "Personal project: a React web app built on the Hedera Consensus Service.",
        link: { label: "Live site", href: "https://paradoxhedera.netlify.app/" },
        stack: ["React", "Hedera"],
    },
    {
        title: "Magic: The Gathering Rulebook",
        icon: "cards",
        description:
            "A searchable rulebook for the Magic: The Gathering card game, using data from the Wizards of the Coast API.",
        link: {
            label: "Live site",
            href: "https://reaktor-next-js-express-js-preassignment.vercel.app",
        },
        stack: ["React", "Next.js"],
    },
    {
        title: "Bitcoin Trend Analyzer",
        icon: "chart",
        description:
            "Finds the longest downward trend, the highest trading volume and the best buy/sell dates from historical Bitcoin data (CoinGecko API).",
        link: { label: "Live site", href: "https://tender-aryabhata-fa5705.netlify.app" },
        stack: ["React"],
    },
];

export const education: ReadonlyArray<Education> = [
    {
        degree: "M.Sc. (Diplomi-insinööri), Information Technology",
        school: "Tampere University",
        period: "Sep 2019 – Jan 2025",
        thesis: {
            label: "Thesis: Supply chain traceability using distributed ledger technology",
            href: "https://urn.fi/URN:NBN:fi:tuni-202405155908",
        },
    },
];

export const languages: ReadonlyArray<string> = [
    "Finnish — native",
    "English — fluent",
    "Italian — B1",
];
