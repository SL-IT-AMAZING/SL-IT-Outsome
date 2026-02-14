import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

function AnimatedLine({ text, className }) {
  return (
    <motion.span className={`block ${className}`} variants={containerVariants}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="inline-block"
          style={char === ' ' ? { width: '0.3em' } : undefined}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[#FEFAF3] overflow-hidden pt-24 md:pt-32">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.6 } },
        }}
        className="flex flex-col items-center"
      >
        <motion.span
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-bold tracking-[2.2px] uppercase text-[#0A0A0A] mb-12"
        >
          Welcome to SL:IT × Outsome
        </motion.span>

        <motion.h1
          variants={containerVariants}
          className="font-serif text-[45px] md:text-[160px] font-extrabold leading-[0.9] tracking-[-2.25px] md:tracking-[-8px] text-[#0A0A0A]"
        >
          <AnimatedLine text="Silicon Valley" className="" />
          <AnimatedLine text="Accelerating" className="" />
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl font-semibold leading-7 md:leading-8 text-[#0A0A0A]/60 max-w-2xl mx-auto mt-12"
        >
          아이디어 하나로 시작해서, AI로 만들고,
          <br />
          실리콘밸리 멘토와 글로벌 시장을 공략합니다.
        </motion.p>

        <motion.a
          href="/apply.html"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-16 bg-[#141414] text-[#FEFAF3] text-xl font-bold rounded-full pl-10 pr-3 py-3 w-60 h-20 flex items-center justify-center gap-6 hover:bg-[#0A0A0A] transition shadow-[0_25px_50px_-12px_rgba(10,10,10,0.1)]"
        >
          Apply Now
          <span className="w-12 h-12 rounded-full bg-[#FEFAF3]/10 flex items-center justify-center shrink-0">
            <ArrowRight size={20} strokeWidth={2.5} />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
