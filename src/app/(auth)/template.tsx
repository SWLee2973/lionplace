'use client';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      className="flex h-fit w-full items-center bg-white mobile:w-[430px]"
    >
      {children}
    </motion.div>
  );
}
