"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  color: string;
  rotation?: string;
  icon?: ReactNode;
  label?: string;
  variant?: "default" | "portal";
  className?: string;
}

export default function FloatingCard({
  color,
  rotation = "",
  icon,
  label,
  variant = "default",
  className = "",
}: FloatingCardProps) {
  if (variant === "portal") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`absolute ${rotation} ${className}`}
      >
        <motion.div
          className="w-[320px] rounded-3xl bg-white dark:bg-[#1a1c23] shadow-2xl dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] p-5 transition-colors duration-300 cursor-default"
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                John Doe – Portal
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                MAT-2233 · 2h ago
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="h-2 rounded bg-gray-200 dark:bg-gray-700 w-3/4" />
            <div className="h-2 rounded bg-gray-200 dark:bg-gray-700 w-2/3" />
            <div className="h-2 rounded bg-gray-200 dark:bg-gray-700 w-1/2" />
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`absolute ${rotation} ${className}`}
    >
      <motion.div
        className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl text-white font-medium ${color} cursor-default`}
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {icon}
        <span>{label}</span>
      </motion.div>
    </motion.div>
  );
}