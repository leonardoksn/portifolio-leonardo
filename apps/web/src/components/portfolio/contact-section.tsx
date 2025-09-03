import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
	const contactLinks = [
		{
			label: "Email",
			value: "leodev@gmail.com",
			href: "mailto:leodev@gmail.com",
			icon: Mail,
			description: "Send me a message"
		},
		{
			label: "GitHub",
			value: "github.com/leonardoksn",
			href: "https://github.com/leonardoksn",
			icon: Github,
			description: "Check out my repositories"
		},
		{
			label: "LinkedIn",
			value: "leonardo-k-nunes",
			href: "https://linkedin.com/in/leonardo-k-nunes",
			icon: Linkedin,
			description: "Connect with me professionally"
		},
	];

	return (
		<section id="contact" className="py-20 px-4">
			<div className="container mx-auto max-w-4xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						I'm always interested in discussing new opportunities, collaborating on projects, or just having a conversation about technology.
					</p>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-2">
					{contactLinks.map((link, index) => {
						const IconComponent = link.icon;
						return (
							<motion.a
								key={link.label}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ scale: 1.02 }}
								className="group p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card"
							>
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
										<IconComponent className="w-6 h-6" />
									</div>
									<div className="flex-1 min-w-0">
										<h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
											{link.label}
										</h3>
										<p className="text-sm text-muted-foreground mb-2">
											{link.description}
										</p>
										<p className="text-sm font-mono text-foreground/80 truncate">
											{link.value}
										</p>
									</div>
									<ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
								</div>
							</motion.a>
						);
					})}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="text-center mt-16 pt-8 border-t border-border"
				>
					<p className="text-muted-foreground">
						Built with React, TypeScript, TailwindCSS, and Framer Motion
					</p>
					<p className="text-sm text-muted-foreground/70 mt-2">
						© 2025 Leonardo Koeche da Silva Nunes. All rights reserved.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
