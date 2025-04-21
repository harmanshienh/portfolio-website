import { StaticImageData } from "next/image";
import occLogo from "../public/logos/occ-logo.jpg"
import electriumLogo from "../public/logos/electrium-logo.jpg"
import midSunLogo from "../public/logos/midsun-logo.jpg"
import wargLogo from "../public/logos/warg-logo.jpg"


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
        company: "Electrium Mobility",
        jobTitle: "Project Lead",
        summary: "Leading over 25 members to build a fully functioning E-bike conversion kit and a universal remote control. Check them out in the projects section!",
        startDate: "January 2025",
        endDate: "Present",
        logo: electriumLogo
    },
    {
        company: "Waterloo Aerial Robotics Group",
        jobTitle: "Embedded Flight Software Developer",
        summary: "Working with Mavlink to process telemetry data for the Zeropilot 3.5 architecture on an STM32 microcontroller.",
        startDate: "January 2025",
        endDate: "Present",
        logo: wargLogo
    },
    {
        company: "Waterloo Midnight Sun",
        jobTitle: "Firmware Developer",
        summary: "Developed a CLI to interface with peripherals on an STM32 microcontroller through the use of ADC and GPIO pins.",
        startDate: "September 2024",
        endDate: "December 2024",
        logo: midSunLogo
    },
    {
        company: "Ontario Chamber of Commerce",
        jobTitle: "E-Commerce Advisor",
        summary: "I worked with the LMS team, responsible for reaching out to over 1000 SMEs throughout Ontario, onboarding them to the platform. I also conducted end-to-end tests on over 50 courses found within the platform.",
        startDate: "May 2024",
        endDate: "August 2024",
        logo: occLogo
    }
]