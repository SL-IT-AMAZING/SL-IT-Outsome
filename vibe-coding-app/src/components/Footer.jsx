import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/school/107497789' },
  { label: 'Instagram', href: 'https://www.instagram.com/outsome.co/' },
  { label: 'X (Twitter)', href: 'https://x.com/_seoulrider' },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[rgba(47,44,37,0.08)] pt-32">
      <div className="pb-32 md:pb-48 px-6">
        <div className="max-w-[90rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="font-serif text-6xl md:text-[144px] font-extrabold leading-[0.85] tracking-[-3px] md:tracking-[-7.2px]">
              <span className="text-[#0A0A0A]">LET'S BUILD</span>
              <br />
              <span className="text-[#0A0A0A]/15">TOGETHER.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="grid lg:grid-cols-2 gap-20 mb-32 mt-24"
          >
            <div>
              <p className="text-xs font-bold tracking-[2.4px] uppercase text-[#0A0A0A]/40 mb-8">
                연락처
              </p>
              <a
                href="mailto:hello@outsome.co"
                className="block text-3xl md:text-4xl font-semibold text-[#0A0A0A] hover:text-[#0A0A0A]/70 transition-colors"
              >
                hello@outsome.co
              </a>
              <div className="mt-12">
                <p className="text-xs font-bold tracking-[2.4px] uppercase text-[#0A0A0A]/40 mb-8">
                  오피스
                </p>
                <p className="text-xl font-medium text-[#0A0A0A]/60 max-w-sm">
                  서울특별시 강남구 (오프라인 세션)
                  <br />
                  San Francisco, CA (US Track)
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-0" onSubmit={(e) => { e.preventDefault(); window.location.href = '/apply.html'; }}>
                <input
                  type="text"
                  placeholder="이름 / 스타트업명"
                  className="w-full border-b-2 border-[rgba(47,44,37,0.08)] py-6 text-2xl font-bold text-[#0A0A0A] placeholder:text-[#0A0A0A]/25 outline-none focus:border-[#0A0A0A]/40 transition-colors bg-transparent"
                />
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="w-full border-b-2 border-[rgba(47,44,37,0.08)] py-6 text-2xl font-bold text-[#0A0A0A] placeholder:text-[#0A0A0A]/25 outline-none focus:border-[#0A0A0A]/40 transition-colors bg-transparent"
                />
                <textarea
                  placeholder="어떤 스타트업을 만들고 계신가요?"
                  rows={4}
                  className="w-full border-b-2 border-[rgba(47,44,37,0.08)] py-6 text-2xl font-bold text-[#0A0A0A] placeholder:text-[#0A0A0A]/25 outline-none focus:border-[#0A0A0A]/40 transition-colors bg-transparent resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 text-xl font-extrabold tracking-[2px] uppercase text-[#0A0A0A] mt-4 hover:text-[#0A0A0A]/70 transition-colors group cursor-pointer"
                >
                  Apply Now
                  <ArrowRight
                    size={20}
                    strokeWidth={2.5}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-12 border-t border-[rgba(47,44,37,0.08)] mt-24">
            <div className="flex gap-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs font-bold tracking-[1.2px] uppercase text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="text-xs font-bold tracking-[1.2px] text-[#0A0A0A]/40">
              © 2026 SL:IT × Outsome. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
