// All site copy lives here, so updating the CV never means touching components.
// Wrap a phrase in **double asterisks** to highlight it.
// Keep it public-safe: no phone number, email or home address.
import azureDevopsIcon from "./assets/skills/azure-devops.svg";
import ciCdIcon from "./assets/skills/ci-cd.svg";
import claudeCodeIcon from "./assets/skills/claude-code.svg";
import csharpIcon from "./assets/skills/csharp.svg";
import cypressIcon from "./assets/skills/cypress.svg";
import dockerIcon from "./assets/skills/docker.svg";
import dotnetIcon from "./assets/skills/dotnet.svg";
import entityFrameworkIcon from "./assets/skills/entity-framework.svg";
import gitIcon from "./assets/skills/git.svg";
import jestIcon from "./assets/skills/jest.svg";
import mcpIcon from "./assets/skills/mcp.svg";
import octopusDeployIcon from "./assets/skills/octopus-deploy.svg";
import playwrightIcon from "./assets/skills/playwright.svg";
import reactIcon from "./assets/skills/react.svg";
import sqlIcon from "./assets/skills/sql.svg";
import sqlServerIcon from "./assets/skills/sql-server.svg";
import typescriptIcon from "./assets/skills/typescript.svg";

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

export type SkillIcon = {
    readonly src: string;
    /** Single-colour (black) icon: inverted in dark mode so it stays visible. */
    readonly mono?: boolean;
};

/**
 * Brand icons for skill tags, keyed by the exact skill name. Skills without an entry
 * (concepts like "Agentic coding" or domain knowledge) render as plain text.
 * Sources: devicon (MIT) and Simple Icons (CC0), in their official colours.
 */
export const skillIcons: Readonly<Record<string, SkillIcon>> = {
    React: { src: reactIcon },
    TypeScript: { src: typescriptIcon },
    ".NET": { src: dotnetIcon },
    "C#": { src: csharpIcon },
    "ASP.NET Core": { src: dotnetIcon },
    "Entity Framework": { src: entityFrameworkIcon },
    SQL: { src: sqlIcon, mono: true },
    "SQL Server": { src: sqlServerIcon },
    Cypress: { src: cypressIcon },
    Playwright: { src: playwrightIcon },
    Jest: { src: jestIcon },
    Git: { src: gitIcon },
    "Azure DevOps": { src: azureDevopsIcon },
    "CI/CD": { src: ciCdIcon, mono: true },
    "Octopus Deploy": { src: octopusDeployIcon },
    Docker: { src: dockerIcon },
    "Claude Code": { src: claudeCodeIcon },
    "MCP servers": { src: mcpIcon, mono: true },
};

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
        description: "A React web app built on the Hedera Consensus Service.",
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
