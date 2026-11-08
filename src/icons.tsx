import type { CSSProperties, ReactElement } from "react";
import type { ProjectIcon } from "./content";

// 24×24 icons drawn with currentColor. Each project has its own colour ("tone"),
// shown on a soft tile of the same colour.
const icons: Record<ProjectIcon, { tone: string; glyph: ReactElement }> = {
    // Isometric 3D cube.
    cube: {
        tone: "#0ea5a4",
        glyph: (
            <>
                <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
                <path d="M3.5 7 12 11.5 20.5 7M12 11.5v10" />
            </>
        ),
    },
    // Hedera Hashgraph logo: a solid circle with a double-crossbar "H" cut out.
    hedera: {
        tone: "var(--text)",
        glyph: (
            <path
                fill="currentColor"
                stroke="none"
                fillRule="evenodd"
                d="M12 1a11 11 0 1 0 0 22a11 11 0 1 0 0-22zM8.4 7h1.7v10H8.4zM13.9 7h1.7v10h-1.7zM10.1 9.4h3.8v1.3h-3.8zM10.1 13.3h3.8v1.3h-3.8z"
            />
        ),
    },
    // Two playing cards: one in front, one peeking out behind it.
    cards: {
        tone: "#8b5cf6",
        glyph: (
            <>
                <path d="M9 6V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-2" />
                <rect x="4" y="6" width="12" height="15" rx="2" />
                <path d="m10 10.5 2 3-2 3-2-3z" fill="currentColor" />
            </>
        ),
    },
    // Price chart trending down.
    chart: {
        tone: "#f7931a",
        glyph: (
            <>
                <path d="M4 4v16h16" />
                <path d="m7.5 8 4 4.5 3-2.5 4.5 5" />
                <path d="M19 11.5V15h-3.5" />
            </>
        ),
    },
};

export const Icon = ({ name }: { name: ProjectIcon }) => {
    const { tone, glyph } = icons[name];
    return (
        <span className="project__icon" style={{ "--tone": tone } as CSSProperties}>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                {glyph}
            </svg>
        </span>
    );
};
