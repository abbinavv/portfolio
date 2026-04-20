'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const pageNames: Record<string, string> = {
  '/': 'Home',
  '/about-me': 'About',
  '/works': 'Works',
};

const ease = [0.76, 0, 0.24, 1] as const;

export default function PageTransition() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [label, setLabel] = useState('');
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const name = pageNames[pathname] ?? '';
    setLabel(name.toUpperCase());
    setShow(true);
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={pathname + '-transition'}
          className="fixed inset-0 z-[9998] bg-[#111111] flex items-center justify-center pointer-events-none overflow-hidden"
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.55, ease }}
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-110%' }}
              transition={{ duration: 0.4, delay: 0.15, ease }}
              className="font-display text-white text-[3.5rem] sm:text-[5rem] lg:text-[7rem] font-medium tracking-[-0.03em] select-none"
            >
              {label}
            </motion.p>
          </div>

          {/* Progress line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-white/30"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.9, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
