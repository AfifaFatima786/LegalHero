"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Gavel,
  FileText,
  CheckSquare,
  Receipt,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const springTransition = { type: "spring" as const, stiffness: 120, damping: 24 };
const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export default function Home() {
  return (
    <motion.main
      className="relative min-h-screen bg-[#f3f4f9] dark:bg-[#0e0f14] overflow-hidden flex flex-col transition-colors duration-300"
      initial="initial"
      animate="animate"
      variants={fadeIn}
      transition={{ duration: 0.4 }}
    >
      {/* Background soft bars */}
      <motion.div
        className="absolute left-[-120px] bottom-[280px] rotate-[-10deg] w-[240px] h-[80px] bg-[#d9e1f2] dark:bg-[#1e2132] rounded-full opacity-60 dark:opacity-50 transition-colors duration-300"
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="absolute left-[-120px] bottom-[180px] w-[440px] h-[80px] bg-[#d9e1f2] dark:bg-[#1e2132] rounded-full opacity-60 dark:opacity-50 transition-colors duration-300"
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.25 }}
      />
      <motion.div
        className="absolute left-[-120px] bottom-[75px] w-[620px] h-[80px] bg-[#d9e1f2] dark:bg-[#1e2132] rounded-full opacity-50 dark:opacity-40 transition-colors duration-300"
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.div
        className="absolute right-[-40px] top-[130px] w-[300px] h-[80px] bg-[#d9e1f2] dark:bg-[#1e2132] rounded-full opacity-50 dark:opacity-40 rotate-[4deg] transition-colors duration-300"
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.35 }}
      />
      <motion.div
        className="absolute right-[-40px] top-[240px] w-[420px] h-[80px] bg-[#d9e1f2] dark:bg-[#1e2132] rounded-full opacity-40 dark:opacity-35 transition-colors duration-300"
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.div
        className="absolute right-[-40px] top-[340px] w-[300px] h-[80px] bg-[#d9e1f2] dark:bg-[#1e2132] rounded-full opacity-40 dark:opacity-35 transition-colors duration-300"
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.45 }}
      />

      <motion.div
        className="relative z-10 max-w-[1300px] mx-auto w-full px-12 flex flex-col"
        variants={staggerContainer}
      >
        {/* LEFT SECTION */}
        <motion.div className="max-w-[800px] mt-12" variants={staggerContainer}>
          <motion.h1
            className="text-[72px] leading-[1.05] tracking-[-1px] font-light text-[#7b7fa6] dark:text-[#a8acd4] transition-colors duration-300"
            variants={fadeUp}
            transition={springTransition}
          >
            A single platform to{" "}
            <span className="font-semibold text-[#6e729a] dark:text-[#c4c8e8]">
              manage
            </span>{" "}
            every part of your{" "}
            <span className="font-semibold text-[#6e729a] dark:text-[#c4c8e8]">
              legal work
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-[18px] leading-[1.7] text-[#3d5afe] dark:text-[#7b8fff] max-w-[480px] transition-colors duration-300"
            variants={fadeUp}
            transition={{ type: "spring", stiffness: 120, damping: 24, delay: 0.08 }}
          >
            Track matters, coordinate schedules, manage clients,
            centralize documents, and handle communication – all in one system.
          </motion.p>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div className="relative hidden lg:block" variants={staggerContainer}>
          {/* Billing */}
          <motion.div className="absolute top-[-60px] right-[180px] rotate-[14deg]" variants={fadeUp}>
            <motion.div
              className="flex items-center gap-4 px-12 py-6 rounded-full bg-gradient-to-r from-[#3655ff] to-[#3048e8] dark:from-[#4a6bff] dark:to-[#3d5cf7] text-white text-[24px] w-[360px] font-medium transition-colors duration-300 cursor-default"
              whileHover={{ scale: 1.04, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Receipt size={30} />
              Billing
            </motion.div>
          </motion.div>

          {/* Matters */}
          <motion.div className="absolute top-[60px]   left-[320px] rotate-[-12deg]" variants={fadeUp}>
            <motion.div
              className="flex items-center gap-4   px-12 py-6 rounded-full bg-[#e57c2c] dark:bg-[#f08d3d] text-white text-[24px] w-[300px] font-medium transition-colors duration-300 cursor-default"
              whileHover={{ scale: 1.04, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Gavel size={30} />
              Matters
            </motion.div>
          </motion.div>

          {/* Tasks */}
          <motion.div className="absolute top-[200px] left-[500px] rotate-[0deg]" variants={fadeUp}>
            <motion.div
              className="flex items-center gap-4 px-14 py-6 rounded-full bg-[#2e2446] dark:bg-[#3d3258] text-[#ff9c42] text-[24px] font-medium w-[300px] transition-colors duration-300 cursor-default"
              whileHover={{ scale: 1.04, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <CheckSquare size={30} />
              Tasks
            </motion.div>
          </motion.div>

          {/* Documents */}
          <motion.div className="absolute top-[200px] right-[0px] text-4xl rotate-[-8deg]" variants={fadeUp}>
            <motion.div
              className="flex items-center gap-4 px-14 py-6 rounded-full bg-[#2e2446] dark:bg-[#3d3258] text-[#ff9c42] text-[24px] w-[350px] font-medium transition-colors duration-300 cursor-default"
              whileHover={{ scale: 1.04, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <FileText size={30} />
              Documents
            </motion.div>
          </motion.div>

          {/* Portal pill */}
          <motion.div className="absolute top-[80px] right-[200px] rotate-[5deg]" variants={fadeUp}>
            <motion.div
              className="w-[360px] rounded-full bg-[#8e93d8] dark:bg-[#6b70b8] px-8 py-5 text-white transition-colors duration-300 cursor-default"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/images.jpeg"
                  alt="John Doe"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-[15px] font-semibold">
                    John Doe – Portal
                  </p>
                  <p className="text-[13px] opacity-90">
                    Hey! Could you please review a document for me?
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.main>
  );
}