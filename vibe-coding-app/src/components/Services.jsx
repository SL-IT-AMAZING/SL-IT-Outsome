import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Founder Sprint',
    desc: '6주 집중 액셀러레이션. 바이브코딩으로 MVP를 만들고, 실리콘밸리 멘토와 GTM·ICP·IR Deck까지 완성합니다. 무지분, 무수익배분.',
    link: '/apply.html',
    linkText: '지원하기',
  },
  {
    title: 'US Track',
    desc: '2주 샌프란시스코 현지 프로그램. 실리콘밸리 VC, YC 파운더, FAANG 오퍼레이터를 직접 만나고, 현장에서 검증합니다.',
    link: '/us-track.html',
    linkText: '자세히 보기',
  },
  {
    title: 'Alumni Club',
    desc: '수료 후에도 계속. AMA, VC 소개, GTM 클리닉, Outsome 알럼나이 네트워크로 지속 성장을 지원합니다.',
    link: null,
    linkText: 'Coming Soon',
  },
];

export default function Services() {
  return (
    <section id="features" className="py-40 px-6 bg-[#FEFAF3]">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-[64px] md:text-[128px] font-extrabold leading-[0.9] tracking-[-3.2px] md:tracking-[-6.4px] text-[#0A0A0A]"
          >
            Programs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl font-bold text-[#0A0A0A]/40 max-w-sm md:pb-4 shrink-0"
          >
            검증 단계든 확장 단계든, 파운더에게 필요한 것만 제공합니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-[#F1EADD] hover:bg-[#0A0A0A] rounded-[32px] p-10 h-[500px] flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0,0,0.2,1)] hover:shadow-2xl hover:shadow-[#0A0A0A]/20 cursor-default"
            >
              <div>
                <h3 className="text-4xl font-extrabold tracking-[-0.9px] text-[#0A0A0A] group-hover:text-[#FEFAF3] transition-colors duration-500">
                  {card.title}
                </h3>
                <p className="text-xl font-semibold leading-[1.625] text-[#0A0A0A]/50 group-hover:text-[#FEFAF3]/70 mt-6 transition-colors duration-500">
                  {card.desc}
                </p>
              </div>
              {card.link ? (
                <a
                  href={card.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0A0A0A] group-hover:text-[#FEFAF3] transition-colors duration-500"
                >
                  {card.linkText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              ) : (
                <span className="text-sm font-medium text-[#0A0A0A]/30 group-hover:text-[#FEFAF3]/30 transition-colors duration-500">
                  {card.linkText}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
