import { useEffect, useRef, useState, type CSSProperties } from "react";

type Slot = 0 | 1;

type Orb = {
    id: number;
    slot: Slot;
    popping: boolean;
    style: CSSProperties;
    /** Droplets thrown out when the ball pops. */
    drops: CSSProperties[];
};

// Each ball keeps to its own side margin, away from the text (see .orb in styles.css).
const side: Record<Slot, string> = { 0: "-1", 1: "1" };

const random = (min: number, max: number) => min + Math.random() * (max - min);

const DROPS = 10;

const makeDrops = (): CSSProperties[] =>
    Array.from({ length: DROPS }, (_, i) => {
        const angle = (i / DROPS) * Math.PI * 2 + random(-0.25, 0.25);
        const distance = random(0.7, 1.1);
        return {
            "--dx": (Math.cos(angle) * distance).toFixed(3),
            "--dy": (Math.sin(angle) * distance).toFixed(3),
            "--s": random(0.12, 0.26).toFixed(3),
        } as CSSProperties;
    });

let nextId = 0;

const makeOrb = (slot: Slot): Orb => {
    const vars: Record<string, string> = {
        "--side": side[slot],
        "--dur": `${random(40, 60).toFixed(1)}s`,
        "--morph": `${random(10, 16).toFixed(1)}s`,
    };
    for (let i = 0; i < 3; i++) {
        vars[`--x${i}`] = `${random(-18, 18).toFixed(1)}px`;
        vars[`--y${i}`] = `${random(-34, 34).toFixed(1)}vh`;
    }
    return { id: nextId++, slot, popping: false, style: vars as CSSProperties, drops: makeDrops() };
};

// Balls slip away from a nearby mouse cursor, but slowly enough that a quick lunge can
// still catch one. Touch screens have no cursor, so they skip this. It only reacts to the
// visitor's own mouse movement, so it also runs with reduced motion on.
const DODGE_REACH = 3.5; // in ball radii
const DODGE_PUSH = 0.28;
const DODGE_EASE = 0.1;

// A popped ball stays gone for a while before a new one drifts in.
const RESPAWN_MIN_MS = 6000;
const RESPAWN_MAX_MS = 12000;

/** Decorative drifting balls. Tapping one pops it; a new one drifts in after a pause. */
export const Orbs = () => {
    const [orbs, setOrbs] = useState<Orb[]>(() => [makeOrb(0), makeOrb(1)]);

    const pop = (id: number) =>
        setOrbs(list => list.map(orb => (orb.id === id ? { ...orb, popping: true } : orb)));

    const timers = useRef<number[]>([]);
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const offsets = new Map<HTMLElement, { x: number; y: number }>();
        let px = -1e4;
        let py = -1e4;
        let frame = 0;

        const tick = () => {
            frame = 0;
            let moving = false;
            container.current
                ?.querySelectorAll<HTMLElement>(".orb:not(.orb--popping)")
                .forEach(el => {
                    const offset = offsets.get(el) ?? { x: 0, y: 0 };
                    const rect = el.getBoundingClientRect();
                    const radius = rect.width / 2;
                    // Where the ball would be without the dodge offset.
                    const dx = rect.left + radius - offset.x - px;
                    const dy = rect.top + radius - offset.y - py;
                    const distance = Math.hypot(dx, dy) || 1;
                    const reach = radius * DODGE_REACH;
                    const push = distance < reach ? (reach - distance) * DODGE_PUSH : 0;
                    const targetX = (dx / distance) * push;
                    const targetY = (dy / distance) * push;
                    offset.x += (targetX - offset.x) * DODGE_EASE;
                    offset.y += (targetY - offset.y) * DODGE_EASE;
                    offsets.set(el, offset);
                    el.style.translate = `${offset.x.toFixed(1)}px ${offset.y.toFixed(1)}px`;
                    if (push > 0 || Math.hypot(targetX - offset.x, targetY - offset.y) > 0.3) {
                        moving = true;
                    }
                });
            if (moving) frame = requestAnimationFrame(tick);
        };

        const onMove = (event: PointerEvent) => {
            if (event.pointerType !== "mouse") return;
            px = event.clientX;
            py = event.clientY;
            if (!frame) frame = requestAnimationFrame(tick);
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => {
            window.removeEventListener("pointermove", onMove);
            cancelAnimationFrame(frame);
        };
    }, []);

    useEffect(() => {
        const pending = timers.current;
        return () => pending.forEach(window.clearTimeout);
    }, []);

    const remove = (id: number, slot: Slot) => {
        setOrbs(list => list.filter(orb => orb.id !== id));
        timers.current.push(
            window.setTimeout(
                () => setOrbs(list => [...list, makeOrb(slot)]),
                random(RESPAWN_MIN_MS, RESPAWN_MAX_MS)
            )
        );
    };

    return (
        <div ref={container} aria-hidden="true">
            {orbs.map(orb => (
                <div
                    key={orb.id}
                    className={`orb orb--${orb.slot}${orb.popping ? " orb--popping" : ""}`}
                    style={orb.style}
                    onPointerDown={() => pop(orb.id)}>
                    <span
                        className="orb__body"
                        onAnimationEnd={event => {
                            if (event.animationName === "orb-pop") remove(orb.id, orb.slot);
                        }}
                    />
                    {orb.popping &&
                        orb.drops.map((style, i) => (
                            <span key={i} className="orb__drop" style={style} />
                        ))}
                </div>
            ))}
        </div>
    );
};
