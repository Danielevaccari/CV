import { useEffect, useRef, type ReactNode } from "react";
import { education, experience, languages, profile, projects, skillIcons, skills } from "./content";
import { Icon } from "./icons";
import { useTheme } from "./useTheme";

const ExternalLink = ({
    href,
    className,
    children,
}: {
    href: string;
    className?: string;
    children: ReactNode;
}) => (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
);

/** GitHub mark (Simple Icons, CC0), drawn in the surrounding text colour. */
const GitHubMark = () => (
    <svg className="link-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

/** Renders copy from content.ts, turning **phrase** into a highlighted <strong>. */
const Rich = ({ text }: { text: string }) => (
    <>{text.split("**").map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}</>
);

const Section = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
        <h2 id={`${id}-title`} className="section__title">
            {title}
        </h2>
        <div className="section__body">{children}</div>
    </section>
);

/** Thin bar at the top of the page showing how far the visitor has scrolled. */
export const ScrollProgress = () => {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let frame = 0;

        const update = () => {
            frame = 0;
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const scrollable = scrollHeight - clientHeight;
            const progress = scrollable > 0 ? scrollTop / scrollable : 0;
            barRef.current?.style.setProperty("--progress", progress.toString());
        };

        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
        };
    }, []);

    return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
};

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const next = theme === "dark" ? "light" : "dark";
    return (
        <button
            type="button"
            className="theme-toggle glass"
            onClick={toggleTheme}
            aria-label={`Switch to ${next} theme`}
            title={`Switch to ${next} theme`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
                {theme === "dark" ? (
                    <>
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                    </>
                ) : (
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                )}
            </svg>
        </button>
    );
};

export const Intro = () => (
    <header className="intro">
        <h1 className="intro__name">{profile.name}</h1>
        <p className="intro__role">
            {profile.role}
            <span className="intro__focus">{profile.focus}</span>
        </p>
        <p className="intro__summary">
            <Rich text={profile.summary} />
        </p>
        {profile.links.length > 0 && (
            <ul className="inline-list intro__links">
                {profile.links.map(link => (
                    <li key={link.href}>
                        <ExternalLink href={link.href} className="icon-link">
                            {link.label === "GitHub" && <GitHubMark />}
                            {link.label} ↗
                        </ExternalLink>
                    </li>
                ))}
            </ul>
        )}
    </header>
);

export const Experience = () => (
    <Section id="experience" title="Experience">
        {experience.map(job => (
            <article key={job.role + job.company} className="entry">
                <div className="entry__head">
                    <h3 className="entry__title">
                        {job.role}
                        <span className="entry__org"> · {job.company}</span>
                    </h3>
                    <p className="entry__meta">{job.period}</p>
                </div>
                {job.highlights.map(group => (
                    <div key={group.label} className="highlight-group">
                        <h4 className="highlight-group__label">{group.label}</h4>
                        <dl className="points">
                            {group.items.map(item => (
                                <div key={item.title} className="point">
                                    <dt>{item.title}</dt>
                                    <dd>{item.detail}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                ))}
            </article>
        ))}
    </Section>
);

export const Skills = () => (
    <Section id="skills" title="Skills">
        <dl className="skills">
            {skills.map(group => (
                <div key={group.label} className="skills__row">
                    <dt>{group.label}</dt>
                    <dd>
                        <ul className="tags">
                            {group.items.map(item => {
                                const icon = skillIcons[item];
                                return (
                                    <li key={item} className="tag glass">
                                        {icon && (
                                            <img
                                                className={`tag__icon${icon.mono ? " tag__icon--mono" : ""}`}
                                                src={icon.src}
                                                alt=""
                                                width={14}
                                                height={14}
                                            />
                                        )}
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </dd>
                </div>
            ))}
        </dl>
    </Section>
);

export const Projects = () => (
    <Section id="projects" title="Personal projects">
        {projects.map(project => (
            <article key={project.title} className="entry project">
                <Icon name={project.icon} />
                <div>
                    <h3 className="entry__title">{project.title}</h3>
                    <p className="entry__text">{project.description}</p>
                    {(project.link || project.stack) && (
                        <div className="project__footer">
                            {project.link && (
                                <ExternalLink href={project.link.href} className="link-button">
                                    {project.link.label}
                                    <span aria-hidden="true">↗</span>
                                </ExternalLink>
                            )}
                            {project.stack && (
                                <span className="entry__meta">{project.stack.join(" · ")}</span>
                            )}
                        </div>
                    )}
                </div>
            </article>
        ))}
    </Section>
);

export const EducationAndLanguages = () => (
    <>
        <Section id="education" title="Education">
            {education.map(item => (
                <article key={item.degree} className="entry">
                    <div className="entry__head">
                        <h3 className="entry__title">{item.degree}</h3>
                        <p className="entry__meta">{item.period}</p>
                    </div>
                    <p className="entry__text">{item.school}</p>
                    {item.thesis && (
                        <p className="entry__meta">
                            <ExternalLink href={item.thesis.href}>
                                {item.thesis.label} ↗
                            </ExternalLink>
                        </p>
                    )}
                </article>
            ))}
        </Section>
        <Section id="languages" title="Languages">
            <ul className="inline-list">
                {languages.map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
        </Section>
    </>
);

export const Footer = () => (
    <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
    </footer>
);
