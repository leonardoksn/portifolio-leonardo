import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	const navLinks = [
		{ label: "Home", action: () => scrollToSection("hero") },
		{ label: "Skills", action: () => scrollToSection("skills") },
		{ label: "Projects", action: () => scrollToSection("projects") },
		{ label: "Contact", action: () => scrollToSection("contact") },
	];

	return (
		<div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
			<div className="flex flex-row items-center justify-between px-4 py-3">
				<div className="flex items-center gap-6">
					<Link to="/" className="font-semibold text-lg">
						Leonardo K. Nunes
					</Link>
					<nav className="hidden md:flex gap-6">
						{navLinks.map(({ label, action }) => (
							<button
								key={label}
								onClick={action}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
							>
								{label}
							</button>
						))}
					</nav>
				</div>
				<div className="flex items-center gap-2">
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}
