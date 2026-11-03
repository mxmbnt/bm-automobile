import { useEffect, useState } from 'react'
import { PageIntro, PageTop, useSeo } from '../components/page.jsx'
import { Accordion, Reveal, WordsReveal } from '../components/ui.jsx'
import { contact, faqGroups } from '../data/site.js'

// Met en avant, dans le sommaire, le groupe affiché à l’écran
function useActiveGroup(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [ids])
  return active
}

const ids = faqGroups.map((g) => g.id)

export default function Faq() {
  useSeo('Questions fréquentes | BM Automobile', 'Véhicules 0 km, garantie, contrôle technique, reprise : les réponses aux questions les plus fréquentes avant d’acheter un véhicule.')
  const active = useActiveGroup(ids)
  const count = faqGroups.reduce((n, g) => n + g.items.length, 0)

  return (
    <>
      <PageTop />
      <section className="bg-white pt-5 pb-[30px] md:pb-[90px]">
        <div className="container-x">
          <PageIntro
            badge={`${count} questions et réponses`}
            title={<>Tout ce que vous <br className="hidden md:block" />demanderiez au garage, <br className="hidden md:block" />avec les réponses</>}
            lead="Nous les avons rassemblées parce que ce sont les questions qui reviennent chaque semaine, souvent celles que l’on n’ose pas poser en face."
            text={`Vous ne trouvez pas la réponse ? Appelez le garage au ${contact.phone} ou envoyez-nous un message. Vous aurez une réponse claire de quelqu’un qui connaît le véhicule.`}
          />
        </div>
      </section>

      <section className="bg-white pb-[30px] md:pb-[90px]">
        <div className="container-x flex flex-col gap-10 md:flex-row">
          <aside className="md:w-[281px] md:shrink-0">
            <div className="flex flex-col gap-5 md:sticky md:top-[30px]">
              <h5 className="text-xl leading-[1.3] font-medium text-navy">Sommaire</h5>
              <nav className="flex flex-wrap gap-x-5 gap-y-[9px] md:flex-col">
                {faqGroups.map((g) => (
                  <a
                    key={g.id}
                    href={`#${g.id}`}
                    aria-current={active === g.id ? 'page' : undefined}
                    className={`hover-line w-fit text-sm leading-[1.6] font-medium transition-colors ${active === g.id ? 'text-accent' : 'text-navy'}`}
                  >
                    {g.nav}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-[60px] md:pl-10">
            {faqGroups.map((g) => (
              <div key={g.id} id={g.id} className="flex scroll-mt-[30px] flex-col gap-[30px]">
                <WordsReveal as="h4" text={g.title} className="text-[22px] leading-[1.3] font-bold text-navy md:text-[30px]" />
                <Reveal x={20} y={0} delay={0.1}>
                  <Accordion items={g.items} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
