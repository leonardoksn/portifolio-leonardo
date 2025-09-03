import { motion } from "framer-motion";

interface SkillBadgeProps {
	skill: string;
	index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3, delay: index * 0.1 }}
			whileHover={{ scale: 1.05 }}
			className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors duration-200 cursor-default"
		>
			{skill}
		</motion.div>
	);
}
