import { useState } from 'react'
import '../App.css'

type Lang = 'zh' | 'en'

const t = {
  zh: {
    nav: { products: '产品', company: '公司', sustainability: '可持续性', contact: '联系我们' },
    hero: {
      kicker: '125 年传动技术',
      titleA: '驱动世界',
      titleB: '传动未来',
      desc: 'FLENDER ONE 现已全面覆盖所有核心工业应用场景——无论垂直安装、水平安装，还是其他任意安装位置，均能游刃有余。仅需三次点击，从概念构思直达 CAD 模型。',
      ctaProducts: '探索产品',
      ctaCompany: '了解公司',
      imgAlt: 'FLENDER ONE 工业齿轮箱',
    },
    products: {
      kicker: '产品',
      heading: '四大核心产品线',
      more: '了解更多 →',
      items: [
        { title: 'FLENDER ONE 减速机', desc: '工业驱动技术的新纪元：个性化、高效、智能。单级与多级规格，适用超过一百种应用场景。' },
        { title: '联轴器', desc: '全球种类最齐全的工业联轴器组合：弹性、高弹性、刚性、液力耦合与无间隙联轴器。' },
        { title: 'Winergy 风电传动', desc: '四十余年来为国际风电行业提供可靠、高效、低生命周期成本的齿轮箱与联轴器。' },
        { title: '涡轮传动', desc: '以钟表的精度传递远洋巨轮的动力，满足客户的特殊齿轮模块要求。' },
      ],
    },
    company: {
      kicker: '公司',
      heading: 'FLENDER 125 周年：愿景承诺',
      desc: '世界正处在变革之中。但许多事情已然明确：一个世纪以后，人类仍然需要能源，需要旅行，仍然会对原材料进行开采。所有这一切，在未来依然需要最好的传动技术产品。我们的愿景是与所有利益相关者紧密合作，共同创造一个可持续发展的未来，成为可持续未来的首选合作伙伴。',
    },
    sustainability: {
      kicker: '可持续性',
      heading: '我们的可持续发展方法',
      desc: '可持续发展是我们行动的指导原则。我们将环境和社会因素纳入业务决策，在产品中考虑能源效率和使用寿命，并要求供应商遵守既定标准、根据风险开展核查。',
    },
    footer: {
      company: '弗兰德传动系统有限公司',
      slogan: '工业驱动技术的首选合作伙伴',
      address: '天津市北辰区高科技产业园区',
      phone: '服务热线：400-820-0000（示例）',
      note: '© 2026 Flender GmbH · 本页面为风格演示',
    },
  },
  en: {
    nav: { products: 'Products', company: 'Company', sustainability: 'Sustainability', contact: 'Contact' },
    hero: {
      kicker: '125 YEARS OF DRIVE TECHNOLOGY',
      titleA: 'Driving the world',
      titleB: 'Transmitting the future',
      desc: 'FLENDER ONE now covers 100% of all major industrial applications – vertical, horizontal, any mounting position. From concept to CAD in three clicks.',
      ctaProducts: 'Explore Products',
      ctaCompany: 'About Us',
      imgAlt: 'FLENDER ONE industrial gear units',
    },
    products: {
      kicker: 'PRODUCTS',
      heading: 'Four Core Product Lines',
      more: 'Learn more →',
      items: [
        { title: 'FLENDER ONE Gear Units', desc: 'A new era of industrial drive technology: individual, efficient, smart. Single-stage and multi-stage solutions for over 100 applications.' },
        { title: 'Couplings', desc: 'The world’s largest portfolio of industrial couplings: elastic, highly elastic, torsionally rigid, hydrodynamic and backlash-free.' },
        { title: 'Winergy Wind Drives', desc: 'For over 40 years, reliable and efficient gearboxes for the international wind industry, at low lifecycle costs.' },
        { title: 'Turbo Gear Units', desc: 'Transmitting the power of an ocean liner with the precision of clockwork, with tooth modules built to specific requirements.' },
      ],
    },
    company: {
      kicker: 'COMPANY',
      heading: '125 YEARS OF FLENDER: COMMITTED TO A VISION',
      desc: 'The world is changing. Yet much is already known: in one hundred years’ time man will still need energy, will still be travelling and will still be extracting raw materials. And all of that will still need the best drive technology. Our vision is to work together closely with all our stakeholders, jointly shaping a sustainable future — the Partner of Choice for a Sustainable Future.',
    },
    sustainability: {
      kicker: 'SUSTAINABILITY',
      heading: 'Our Approach to Sustainability',
      desc: 'Sustainability is a guiding principle of our actions. We incorporate environmental and social considerations into our business decisions, consider energy efficiency and service life in our products, and expect our suppliers to comply with defined standards.',
    },
    footer: {
      company: 'Flender Drives (Tianjin) Co., Ltd.',
      slogan: 'Partner of Choice for Drive Technology',
      address: 'High-Tech Industrial Park, Beichen District, Tianjin',
      phone: 'Hotline: 400-820-0000 (demo)',
      note: '© 2026 Flender GmbH · Style demo page',
    },
  },
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('zh')
  const s = t[lang]

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* 顶部导航 */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-xl font-bold tracking-[0.2em] text-[#0098DB]">
            FLENDER
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#products" className="transition hover:text-white">{s.nav.products}</a>
            <a href="#company" className="transition hover:text-white">{s.nav.company}</a>
            <a href="#sustainability" className="transition hover:text-white">{s.nav.sustainability}</a>
            <a
              href="#contact"
              className="border border-[#0098DB] px-4 py-1.5 text-[#0098DB] transition hover:bg-[#0098DB] hover:text-white"
            >
              {s.nav.contact}
            </a>
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="border border-white/30 px-3 py-1.5 text-white/80 transition hover:border-white hover:text-white"
            >
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
          </nav>
          {/* 移动端：语言切换 */}
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="border border-white/30 px-3 py-1.5 text-sm text-white/80 md:hidden"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </header>

      {/* 主视觉 */}
      <section className="relative overflow-hidden pt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-16 pb-8 text-center md:pt-24">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-[#0098DB]">
            {s.hero.kicker}
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            {s.hero.titleA}
            <span className="text-[#0098DB]">.</span>
            <br className="md:hidden" />
            {s.hero.titleB}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {s.hero.desc}
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="#products"
              className="bg-[#0098DB] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#007fb8]"
            >
              {s.hero.ctaProducts}
            </a>
            <a
              href="#company"
              className="border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:border-white"
            >
              {s.hero.ctaCompany}
            </a>
          </div>
          <img
            src="/gearbox.png"
            alt={s.hero.imgAlt}
            className="mt-12 w-full max-w-3xl"
          />
        </div>
      </section>

      {/* 产品 */}
      <section id="products" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium tracking-[0.3em] text-[#0098DB]">{s.products.kicker}</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{s.products.heading}</h2>
          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2">
            {s.products.items.map((p) => (
              <div
                key={p.title}
                className="group bg-black p-8 transition hover:bg-[#0098DB]"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 transition group-hover:text-white/90">
                  {p.desc}
                </p>
                <span className="mt-6 inline-block text-sm text-[#0098DB] transition group-hover:text-white">
                  {s.products.more}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 公司 */}
      <section id="company" className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium tracking-[0.3em] text-[#0098DB]">{s.company.kicker}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-snug md:text-4xl">
            {s.company.heading}
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-white/70">
            {s.company.desc}
          </p>
        </div>
      </section>

      {/* 可持续性 */}
      <section id="sustainability" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium tracking-[0.3em] text-[#0098DB]">{s.sustainability.kicker}</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{s.sustainability.heading}</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-white/70">
            {s.sustainability.desc}
          </p>
        </div>
      </section>

      {/* 页脚 */}
      <footer id="contact" className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-bold tracking-[0.2em] text-[#0098DB]">FLENDER</p>
            <p className="mt-2 text-sm text-white/50">{s.footer.company}</p>
            <p className="mt-1 text-sm text-white/50">{s.footer.slogan}</p>
          </div>
          <div className="text-sm text-white/50">
            <p>{s.footer.address}</p>
            <p className="mt-1">{s.footer.phone}</p>
          </div>
          <p className="text-xs text-white/30">{s.footer.note}</p>
        </div>
      </footer>
    </div>
  )
}
