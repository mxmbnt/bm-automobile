import { PageIntro, PageTop, useSeo } from '../components/page.jsx'
import { VehicleCard } from '../components/cards.jsx'
import { Reveal } from '../components/ui.jsx'
import { categories } from '../data/site.js'
import { vehicles } from '../data/vehicles.js'

// /occasions, /zero-km, /suv… : le stock pré-filtré
export default function Category({ slug }) {
  const c = categories[slug]
  useSeo(c.seoTitle, c.seoDescription)
  const list = vehicles.filter(c.filter)

  return (
    <>
      <PageTop />
      <section className="bg-white pt-5 pb-[30px] md:pb-[90px]">
        <div className="container-x flex flex-col gap-10">
          <PageIntro badge={`${list.length} ${c.badge}`} title={c.title} aside={<p className="text-[15px] leading-6 md:max-w-[520px] md:text-right">{c.text}</p>} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((v, i) => (
              <Reveal key={v.slug} delay={(i % 4) * 0.06}>
                <VehicleCard v={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
