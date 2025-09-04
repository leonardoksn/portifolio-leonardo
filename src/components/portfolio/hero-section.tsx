"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="hero"
			className="min-h-screen flex flex-col justify-center items-center relative px-4"
		>
			<div className="text-center max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<motion.h1
						className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Leonardo Koeche da Silva Nunes
					</motion.h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
						Full-Stack Software Developer
					</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="max-w-2xl mx-auto"
				>
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
						Passionate about creating robust, scalable solutions with modern
						technologies. Specialized in React, Node.js, and enterprise systems
						integration with extensive experience in retail and audit systems.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="flex flex-col sm:flex-row gap-4 justify-center items-center"
				>
					<button
						onClick={() => scrollToSection("projects")}
						className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
					>
						View My Work
					</button>
					<button
						onClick={() => scrollToSection("contact")}
						className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors duration-200"
					>
						Get In Touch
					</button>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1.2 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<motion.button
					onClick={() => scrollToSection("skills")}
					className="p-2 rounded-full hover:bg-accent transition-colors duration-200"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
				>
					<ChevronDown className="w-6 h-6 text-muted-foreground" />
				</motion.button>
			</motion.div>
		</section>
	);
}
