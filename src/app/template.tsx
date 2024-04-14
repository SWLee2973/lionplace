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
      className="h-fit w-full bg-primary mobile:w-[430px]"
    >
      {children}
    </motion.div>
  );
}
