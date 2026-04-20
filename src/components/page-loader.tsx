'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const hellos = [
  'Hello', 'Hola', 'Bonjour', 'Ciao', 'こんにちは',
  '你好', 'مرحبا', 'Olá', 'Hallo', '안녕하세요', 'Merhaba', 'नमस्ते',
];

export default function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('ar_loaded')) return;
    setVisible(true);

    let i = 0;
    const cycle = setInterval(() => {
      i++;
      if (i < hellos.length) {
        setIdx(i);
      } else {
        clearInterval(cycle);
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem('ar_loaded', '1');
          }, 700);
        }, 350);
      }
    }, 280);

    return () => clearInterval(cycle);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#111111] flex flex-col items-center justify-center gap-6"
      animate={exiting ? { clipPath: 'inset(0% 0% 100% 0%)' } : { clipPath: 'inset(0% 0% 0% 0%)' }}
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.15 }}
          className="font-display text-white text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-medium tracking-tight select-none"
        >
          {hellos[idx]}
        </motion.p>
      </AnimatePresence>

      <motion.div
        className="flex gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.4 }}
      >
        {hellos.map((_, i) => (
          <motion.span
            key={i}
            className="w-1 h-1 rounded-full bg-white block"
            animate={{ opacity: i === idx ? 1 : 0.25 }}
            transition={{ duration: 0.1 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
