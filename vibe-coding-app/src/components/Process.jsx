import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    english: 'Week 0–1',
    title: '진단 & 설계',
    desc: '스타트업 방향성 확정, AI와 대화로 MVP 설계서 3개(PRD·유저플로우·ERD) 완성. 미국 시장 이해와 BM 초안까지.',
  },
  {
    english: 'Week 2–3',
    title: '빌딩 & 런칭',
    desc: 'MVP 빌딩부터 배포까지. 고객 인터뷰로 ICP를 확정하고, KPI 대시보드와 프라이싱 모델을 세팅합니다.',
  },
  {
    english: 'Week 4–5',
    title: '피칭 & 글로벌',
    desc: 'IR Deck 10장 완성, 실리콘밸리 멘토진 앞에서 프레젠테이션. US Track 지원 자격 획득과 알럼나이 네트워크.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Process() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 30%'],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} id="process" className="py-32 md:py-64 px-6 bg-[#FEFAF3] overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column: heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="md:sticky md:top-48 md:self-start"
          >
            <p className="text-xs font-bold tracking-[2.4px] uppercase text-[#0A0A0A]/40 mb-6">
              Process
            </p>
            <h2 className="font-serif text-5xl md:text-7xl font-semibold leading-[1] tracking-[-1.8px]">
              <span className="text-[#0A0A0A]">6주 만에</span>
              <br />
              <span className="text-[#0A0A0A]/25">글로벌 파운더로.</span>
            </h2>
          </motion.div>

          {/* Right column: steps */}
          <div className="relative pl-10 md:pl-12">
            <div className="absolute left-0 top-2 bottom-2 -translate-x-1/2 w-px bg-[#0A0A0A]/12" />
            <motion.div
              style={{ height: progressHeight }}
              className="absolute left-0 top-2 -translate-x-1/2 w-px bg-[#D4A574] origin-top"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-32 md:space-y-48"
            >
              {steps.map((step) => (
                <motion.div key={step.english} variants={itemVariants} className="relative">
                  <motion.span
                    initial={{ scale: 0.65, opacity: 0.5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute -left-10 md:-left-12 top-1.5 -translate-x-1/2 block w-4 h-4 rounded-full border-2 border-[#D4A574] bg-[#FEFAF3]"
                  />

                  <p className="text-sm font-bold tracking-[1.4px] uppercase text-[#0A0A0A]/40 mb-4">
                    {step.english}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-[-1.2px] text-[#0A0A0A] mb-6">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl font-medium leading-[1.625] text-[#0A0A0A]/50 max-w-lg">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 flex justify-center"
        >
          <a
            href="/apply.html"
            className="inline-flex items-center gap-3 bg-[#0A0A0A] text-[#FEFAF3] text-lg font-bold rounded-full px-10 py-5 hover:bg-[#0A0A0A]/85 transition-all shadow-[0_25px_50px_-12px_rgba(10,10,10,0.1)]"
          >
            6주 여정 시작하기
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
