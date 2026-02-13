import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: '코딩을 전혀 모르는데 참여할 수 있나요?',
    a: '네. Founder Sprint는 비개발자 파운더를 위해 설계되었습니다. AI 도구(Anyon)와 대화하면서 MVP를 만들고, 실리콘밸리 멘토가 비즈니스 전략을 함께 잡아드립니다.',
  },
  {
    q: 'Founder Sprint는 어떤 파운더에게 적합한가요?',
    a: '미국 시장 진출을 준비하는 Pre-seed ~ Series B 스타트업, 1인 파운더, CTO 없이 MVP를 만들고 싶은 예비 창업자에게 적합합니다. 산업은 무관합니다.',
  },
  {
    q: '프로그램 기간과 비용은 어떻게 되나요?',
    a: '6주 프로그램(서울 강남 오프라인 주 2회)이며, 지분이나 수익 배분을 요구하지 않습니다. 상세 비용은 Apply 후 안내드립니다.',
  },
  {
    q: 'US Track은 무엇인가요?',
    a: 'Founder Sprint 수료 후 지원 가능한 2주 샌프란시스코 현지 프로그램입니다. YC 파운더, Pre-seed VC를 직접 만나고, 현장에서 피치와 네트워킹을 진행합니다.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-40 px-6">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="md:col-span-4"
          >
            <p className="text-xs font-bold tracking-[2.4px] uppercase text-[#0A0A0A]/40 mb-6">
              Q&A
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-[1.25] text-[#0A0A0A]">
              Frequently
              <br />
              Asked Questions
            </h2>
          </motion.div>

          <div className="md:col-span-8">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-left py-10 px-6 rounded-lg hover:bg-[#F1EADD] transition-colors flex justify-between items-start gap-4 cursor-pointer"
                  >
                    <span className="text-xl md:text-2xl font-semibold leading-8 text-[#0A0A0A]">
                      {faq.q}
                    </span>
                    <span
                      className="text-[#0A0A0A]/40 shrink-0 mt-1 transition-transform duration-300 ease-out"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      <Plus size={32} strokeWidth={1.5} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-lg md:text-xl font-medium leading-[1.625] text-[#0A0A0A]/50 pb-10 px-6">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
