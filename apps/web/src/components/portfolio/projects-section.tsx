import { motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsSection() {
	const projects = [
		{
			title: "Retail Task Manager",
			description: "Web application for task management and order separation in retail stores. Features real-time task tracking, order processing workflows, and team collaboration tools.",
			techStack: ["Node.js", "TypeScript", "React", "Oracle DB"],
			isPrivate: true,
			category: "Enterprise System"
		},
		{
			title: "Audit Dashboard",
			description: "Real-time dashboard for monitoring inventory, price, and shelf audits. Provides comprehensive analytics and reporting capabilities for retail operations.",
			techStack: ["Next.js", "React", "TRPC", "Oracle DB", "TailwindCSS"],
			isPrivate: true,
			category: "Analytics Platform"
		},
		{
			title: "Price Label Generator",
			description: "Automated system for generating and printing product price labels with consolidated reports. Streamlines retail pricing operations and reduces manual errors.",
			techStack: ["Node.js", "TypeScript", "Oracle DB"],
			isPrivate: true,
			category: "Automation Tool"
		}
	];

	return (
		<section id="projects" className="py-20 px-4 bg-muted/30">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						A selection of enterprise applications I've built, focusing on retail systems, automation, and data analytics.
					</p>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
						>
							<Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
								<CardHeader>
									<div className="flex items-start justify-between">
										<div className="space-y-2">
											<CardTitle className="text-xl group-hover:text-primary transition-colors">
												{project.title}
											</CardTitle>
											<div className="text-xs text-muted-foreground bg-accent px-2 py-1 rounded-md w-fit">
												{project.category}
											</div>
										</div>
										<div className="flex gap-2">
											<div className="p-2 rounded-lg bg-muted/50 text-muted-foreground">
												<Lock className="w-4 h-4" />
											</div>
										</div>
									</div>
								</CardHeader>
								<CardContent className="space-y-4">
									<CardDescription className="text-sm leading-relaxed">
										{project.description}
									</CardDescription>
									
									<div className="space-y-3">
										<div>
											<h4 className="text-sm font-medium mb-2">Tech Stack</h4>
											<div className="flex flex-wrap gap-2">
												{project.techStack.map((tech) => (
													<span
														key={tech}
														className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
										
										{project.isPrivate && (
											<div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-2 rounded-md">
												<Lock className="w-3 h-3" />
												<span>Private enterprise system</span>
											</div>
										)}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="text-center mt-12"
				>
					<p className="text-muted-foreground mb-4">
						Interested in seeing more of my work or discussing a project?
					</p>
					<button
						onClick={() => {
							const element = document.getElementById("contact");
							element?.scrollIntoView({ behavior: "smooth" });
						}}
						className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
					>
						Get In Touch
					</button>
				</motion.div>
			</div>
		</section>
	);
}
