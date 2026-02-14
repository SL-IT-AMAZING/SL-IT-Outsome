import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollBlock({ children, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.35'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div ref={ref} style={{ opacity, y, scale }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Philosophy() {
  return (
    <section id="intro" className="bg-[#FEFAF3] py-32 md:py-72 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollBlock className="mb-40 md:mb-56">
          <h2 className="font-serif text-[32px] md:text-[60px] font-bold leading-[1] tracking-[-0.75px] md:tracking-[-1.5px]">
            <span className="text-[#0A0A0A]">많은 파운더들이 글로벌 시장에 진출하고 싶지만,</span>
            <br />
            <span className="text-[#0A0A0A]/25 mt-4 block">어디서부터 시작해야 할지 모릅니다.</span>
          </h2>
        </ScrollBlock>

        <div className="space-y-32 md:space-y-48">
          <ScrollBlock>
            <p className="text-2xl md:text-5xl font-semibold leading-[1.1] md:leading-[1] text-[#0A0A0A]">
              MVP를 만들었지만 다음이 뭔지 모르겠고,
              미국 시장 진출은 꿈만 꾸는 단계에서 멈춰 있습니다.
            </p>
          </ScrollBlock>

          <ScrollBlock>
            <p className="text-2xl md:text-5xl font-semibold leading-[1.1] md:leading-[1] text-[#0A0A0A]">
              혼자서 GTM 전략을 세우고, ICP를 정의하고, IR Deck을 쓰고, VC 앞에 서는 건 너무 막막합니다.
            </p>
          </ScrollBlock>

          <ScrollBlock>
            <blockquote className="text-5xl md:text-[72px] font-medium leading-[1] italic font-serif text-[#0A0A0A] mb-8">
              &ldquo;해본 사람이 답입니다.&rdquo;
            </blockquote>
            <p className="text-lg md:text-2xl font-medium leading-7 md:leading-8 text-[#0A0A0A]/40">
              실리콘밸리 알럼나이가 직접 이끄는, 실전 중심 액셀러레이터.
            </p>
          </ScrollBlock>

          <ScrollBlock>
            <p className="text-2xl md:text-5xl font-semibold leading-[1.1] md:leading-[1] text-[#0A0A0A]">
              6주 만에{' '}
              <span className="text-[#D4A574]">배포된 MVP</span>부터 US 시장 전략, IR Deck까지 완성합니다.
            </p>
          </ScrollBlock>

          <ScrollBlock>
            <p className="text-2xl md:text-5xl font-semibold leading-[1.1] md:leading-[1] text-[#0A0A0A]">
              일회성이 아닙니다. 비즈니스를 연쇄적으로 만들고 운영할 수 있는 파운더가 됩니다.
            </p>
          </ScrollBlock>

          <ScrollBlock>
            <a
              href="#features"
              className="inline-flex items-center gap-3 text-2xl md:text-4xl font-semibold text-[#D4A574] hover:text-[#0A0A0A] transition-colors"
            >
              어떻게 가능한지 알아보기
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </ScrollBlock>
        </div>
      </div>
    </section>
  );
}
