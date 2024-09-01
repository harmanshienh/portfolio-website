import { StaticImageData } from "next/image";
import occLogo from "../public/logos/occ-logo.jpg"


export interface ExperienceDataProps {
    company: string;
    jobTitle: string;
    summary: string;
    startDate: string;
    endDate: string;
    logo: StaticImageData;
};

export const experience: ExperienceDataProps[] = [
    {
    company: "Ontario Chamber of Commerce",
    jobTitle: "E-Commerce Advisor",
    summary: "I worked with the LMS team, responsible for reaching out to over 1000 SMEs throughout Ontario, onboarding them to the platform. I also conducted end-to-end tests on over 50 courses found within the platform.",
    startDate: "May 2024",
    endDate: "August 2024",
    logo: occLogo
    }
]