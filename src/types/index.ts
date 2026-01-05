export type Language = "pt" | "en";

export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string;
    technologies?: string[];
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    link?: string;
    github?: string;
}

export interface Skill {
    name: string;
    category: string;
    level?: number;
}

export interface Recommendation {
    name: string;
    position: string;
    company: string;
    text: string;
    image?: string;
}

export interface PortfolioData {
    hero: {
        name: string;
        title: string;
        description: string;
    };
    about: {
        title: string;
        description: string;
    };
    experience: Experience[];
    skills: Skill[];
    projects: Project[];
    recommendations: Recommendation[];
    contact: {
        email: string;
        phone: string;
        linkedin: string;
        github: string;
    };
}
