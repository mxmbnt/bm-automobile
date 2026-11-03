import { PageTop, useSeo } from '../components/page.jsx'
import { Badge, Reveal } from '../components/ui.jsx'
import { legalPages } from '../data/site.js'

// Mentions légales / Confidentialité / Cookies : une colonne de 900 px, sections numérotées
export default function Legal({ kind }) {
  const page = legalPages[kind]
  useSeo(page.seoTitle, page.seoDescription)
  return (
    <>
      <PageTop />
      <section className="bg-white pt-5 pb-[30px] md:pb-[90px]">
        <div className="container-x max-w-[900px]">
          <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2.5">
              <Badge>{page.badge}</Badge>
              <h1 className="text-[28px] leading-[1.3] font-bold text-navy md:text-[40px]">{page.title}</h1>
            </div>
            <p className="text-[15px] leading-6">{page.updated}</p>
          </Reveal>
          <div className="mt-[60px] flex flex-col gap-10 md:mt-[110px]">
            {page.sections.map(([title, text]) => (
              <Reveal key={title} className="flex flex-col gap-5">
                <h5 className="text-[22px] leading-[1.3] font-medium text-navy md:text-[26px]">{title}</h5>
                <p className="text-[15px] leading-6">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
