import { PageIntro, PageTop, useSeo } from '../components/page.jsx'
import { Badge, Button, Reveal } from '../components/ui.jsx'
import { services, servicesFaqs } from '../data/site.js'
import { FaqSplit } from '../sections/shared.jsx'

export default function Services() {
  useSeo('Occasions, véhicules 0 km, garantie et atelier | BM Automobile', 'Occasions et véhicules 0 km toutes marques, garantie sur chaque véhicule, entretien et réparation à Roche-la-Molière.')
  return (
    <>
      <PageTop />
      <section className="bg-white pt-5 pb-[30px] md:pb-[90px]">
        <div className="container-x">
          <PageIntro
            badge="Tout au même endroit"
            title={<>Occasions, 0 km, <br className="hidden md:block" />garantie et atelier <br className="hidden md:block" />au même endroit</>}
            lead="BM Automobile vend des véhicules neufs et d’occasion de toutes marques, et reste un garage à part entière."
            text="Vous trouvez votre véhicule, vous l’essayez au garage, vous repartez avec une garantie. Et pour l’entretien comme pour une question après l’achat, vous gardez le même interlocuteur."
          />
        </div>
      </section>

      {/* chaque service se fige sous le précédent au défilement */}
      <section className="flex flex-col gap-[30px] bg-white md:gap-[60px]">
        {services.map((s) => (
          <div key={s.badge} className="md:sticky md:top-[60px]">
            <div className="container-x flex flex-col md:h-[650px] md:flex-row">
              <div className="h-[300px] overflow-hidden rounded-t-2xl md:h-auto md:w-1/2 md:rounded-l-2xl md:rounded-tr-none">
                <img src={s.image.src} alt={s.image.alt} loading="lazy" decoding="async" className="size-full object-cover" />
              </div>
              <div className="flex items-center rounded-b-2xl bg-lavender p-[30px] md:w-1/2 md:rounded-r-2xl md:rounded-bl-none md:p-[60px]">
                <Reveal className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[15px]">
                    <Badge>{s.badge}</Badge>
                    <h3 className="title-lg">{s.title}</h3>
                    <p className="text-[15px] leading-6">{s.text}</p>
                  </div>
                  <Button to={s.to} className="self-start">{s.cta}</Button>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      <FaqSplit
        badge="Vos questions"
        title="Garantie, 0 km et atelier"
        text="Les questions que l’on nous pose avant de signer. Pour tout le reste, appelez l’équipe, nous en parlerons ensemble."
        items={servicesFaqs}
      />
      <div className="h-[30px] md:h-[90px]" />
    </>
  )
}
