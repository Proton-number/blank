"use client";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
function FloatingButton() {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="fixed bottom-6 right-6 rounded-full bg-black hover:bg-[hsl(219,20%,20%)] text-white"
          onClick={scrollToTop}
        >
          <Button
            size={"icon"}
            aria-label="Scroll to top"
            className="rounded-full"
          >
            <ArrowUp />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatingButton;
