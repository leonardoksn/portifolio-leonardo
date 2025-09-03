import { motion } from "framer-motion";
import SkillBadge from "./skill-badge";

export default function SkillsSection() {
	const skillCategories = [
		{
			title: "Frontend",
			skills: [
				"React",
				"Next.js",
				"Vue",
				"TypeScript",
				"JavaScript",
				"shadcn/ui",
				"TailwindCSS",
			],
		},
		{
			title: "Backend",
			skills: ["Node.js", "Express", "TRPC"],
		},
		{
			title: "Database",
			skills: ["Oracle DB", "SQL Server", "MySQL", "PL/SQL"],
		},
		{
			title: "DevOps",
			skills: ["Docker", "Docker Swarm", "GitHub Actions", "CI/CD"],
		},
		{
			title: "Other",
			skills: ["REST APIs", "Microservices Architecture", "System Integration"],
		},
	];

	return (
		<section id="skills" className="py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Technical Skills
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						A comprehensive toolkit of modern technologies and frameworks I use to
						build scalable, efficient solutions.
					</p>
				</motion.div>

				<div className="grid gap-8 md:gap-12">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
							className="space-y-4"
						>
							<h3 className="text-xl md:text-2xl font-semibold text-primary">
								{category.title}
							</h3>
							<div className="flex flex-wrap gap-3">
								{category.skills.map((skill, skillIndex) => (
									<SkillBadge
										key={skill}
										skill={skill}
										index={skillIndex}
									/>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
