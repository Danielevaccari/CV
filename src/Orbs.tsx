import { useState, type CSSProperties } from "react";

type Slot = 0 | 1;

type Orb = {
    id: number;
    slot: Slot;
    popping: boolean;
    style: CSSProperties;
};

// Each ball keeps to its own side of the page so the two never overlap.
const xRange: Record<Slot, [number, number]> = { 0: [-34, -14], 1: [14, 34] };

const random = (min: number, max: number) => min + Math.random() * (max - min);

let nextId = 0;

const makeOrb = (slot: Slot): Orb => {
    const [x0, x1] = xRange[slot];
    const vars: Record<string, string> = {
        "--dur": `${random(22, 34).toFixed(1)}s`,
        "--morph": `${random(8, 13).toFixed(1)}s`,
    };
    for (let i = 0; i < 3; i++) {
        vars[`--x${i}`] = `${random(x0, x1).toFixed(1)}vw`;
        vars[`--y${i}`] = `${random(-30, 34).toFixed(1)}vh`;
    }
    return { id: nextId++, slot, popping: false, style: vars as CSSProperties };
};

/** Decorative drifting balls. Tapping one pops it and a new one drifts in. */
export const Orbs = () => {
    const [orbs, setOrbs] = useState<Orb[]>(() => [makeOrb(0), makeOrb(1)]);

    const pop = (id: number) =>
        setOrbs(list => list.map(orb => (orb.id === id ? { ...orb, popping: true } : orb)));

    const replace = (id: number) =>
        setOrbs(list => list.map(orb => (orb.id === id ? makeOrb(orb.slot) : orb)));

    return (
        <div aria-hidden="true">
            {orbs.map(orb => (
                <div
                    key={orb.id}
                    className={`orb orb--${orb.slot}${orb.popping ? " orb--popping" : ""}`}
                    style={orb.style}
                    onPointerDown={() => pop(orb.id)}>
                    <span
                        className="orb__body"
                        onAnimationEnd={event => {
                            if (event.animationName === "orb-pop") replace(orb.id);
                        }}
                    />
                </div>
            ))}
        </div>
    );
};
