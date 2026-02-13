import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { num: '01', name: 'Fitculator — ICP 확정 후 첫 US 리드 확보', category: 'Health Tech', year: 'FS3' },
  { num: '02', name: 'Serverkit — POSCO 파일럿 계약 성사', category: 'Enterprise AI', year: 'FS1' },
  { num: '03', name: 'MarkAny — HBS 출신 파운더의 엔터프라이즈 진출', category: 'Security', year: 'FS2' },
  { num: '04', name: '4주 만에 $80K ARR 달성한 B2B SaaS', category: 'B2B SaaS', year: 'FS3' },
  { num: '05', name: '21개 스타트업이 선택한 액셀러레이터', category: 'FS1–FS3', year: '2025' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-32 px-6 bg-[#0A0A0A] text-[#FEFAF3] relative min-h-screen flex flex-col"
    >
      <div className="max-w-[90rem] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="relative mb-24 md:mb-32"
        >
          <p className="text-xs font-bold tracking-[2.4px] uppercase text-[#FEFAF3]/50 mb-6">
            Startup Success
          </p>
          <h2 className="font-serif text-6xl md:text-8xl font-bold tracking-[-2.4px] text-[#FEFAF3]">
            성공 사례
          </h2>
          <a
            href="https://outsome.notion.site/foundersprint"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-[1.4px] uppercase text-[#FEFAF3] mt-6 md:absolute md:right-0 md:top-0 hover:opacity-70 transition-opacity"
          >
            Meet Our Startups
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col"
        >
          {projects.map((project) => (
            <motion.div
              key={project.num}
              variants={itemVariants}
              className="group border-t border-[rgba(254,250,243,0.12)] py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:pl-6 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <div className="flex items-center gap-4 md:gap-8">
                <span className="text-base font-bold text-[#FEFAF3]/60 w-8 shrink-0">
                  {project.num}
                </span>
                <a
                  href="#"
                  className="text-2xl md:text-5xl font-medium text-[#FEFAF3]/70 group-hover:text-[#FEFAF3] transition-colors duration-500"
                >
                  {project.name}
                </a>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0 pl-12 md:pl-0">
                <span className="text-xs md:text-sm font-medium tracking-[0.35px] uppercase text-[#FEFAF3]">
                  {project.category}
                </span>
                <span className="text-xs md:text-sm font-medium text-[#FEFAF3]">
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
