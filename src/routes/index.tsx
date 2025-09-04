import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/portfolio/hero-section";
import SkillsSection from "@/components/portfolio/skills-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import ContactSection from "@/components/portfolio/contact-section";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div className="min-h-screen">
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}
