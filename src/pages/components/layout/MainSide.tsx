import React from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
type mainSideType = {
  children: React.ReactNode;
};

const MainSide = ({ children }: mainSideType) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <m.div
        className=""
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};

export default MainSide;
