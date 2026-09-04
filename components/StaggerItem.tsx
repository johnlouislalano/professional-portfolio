"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function StaggerItem({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: Math.min(index, 6) * 0.08 }}
    >
      {children}
    </motion.div>
  );
}
