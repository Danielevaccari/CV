import type { ReactElement } from "react";
import type { ProjectIcon } from "./content";

// Simple 24×24 icons drawn with currentColor, so they follow the theme.
const paths: Record<ProjectIcon, ReactElement> = {
    // Hedera Hashgraph logo: a solid circle with a double-crossbar "H" cut out.
    hedera: (
        <path
            fill="currentColor"
            stroke="none"
            fillRule="evenodd"
            d="M12 1a11 11 0 1 0 0 22a11 11 0 1 0 0-22zM8.4 7h1.7v10H8.4zM13.9 7h1.7v10h-1.7zM10.1 9.4h3.8v1.3h-3.8zM10.1 13.3h3.8v1.3h-3.8z"
        />
    ),
    cards: (
        <>
            <rect x="8" y="3" width="12" height="16" rx="2" />
            <path d="M8 6.5 5.3 7.2a2 2 0 0 0-1.4 2.4l2.8 10.6a2 2 0 0 0 2.4 1.4L14 20.5" />
            <path d="m14 8 1.5 3L14 14l-1.5-3z" />
        </>
    ),
    chart: (
        <>
            <path d="M3 3v18h18" />
            <path d="m7 9 4 4 3-3 5 6" />
            <path d="M19 12v4h-4" />
        </>
    ),
};

export const Icon = ({ name }: { name: ProjectIcon }) => (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
        {paths[name]}
    </svg>
);
