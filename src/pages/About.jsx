import { PageIntro, PageTop, useSeo } from '../components/page.jsx'
import { Reveal } from '../components/ui.jsx'
import { aboutFaqs, aboutImages as img, company, media } from '../data/site.js'
import { FaqSplit, HowItWorks, Stats, Team, Testimonials, TrustStory } from '../sections/shared.jsx'

const Photo = ({ src, alt, className = '' }) => (
  <div className={`overflow-hidden rounded-2xl ${className}`}>
    <img src={src} alt={alt} loading="lazy" decoding="async" className="size-full object-cover" />
  </div>
)

export default function About() {
  useSeo('Le garage BM Automobile | Roche-la-Molière depuis 2006', 'BM Automobile, garage et vente de véhicules neufs et d’occasion toutes marques à Roche-la-Molière depuis 2006.')
  return (
    <>
      <PageTop />
      <section className="bg-white pt-5 pb-[30px] md:pb-[90px]">
        <div className="container-x flex flex-col gap-10">
          <PageIntro
            badge="Depuis 2006"
            title={<>Un garage local, <br className="hidden md:block" />des réponses franches, <br className="hidden md:block" />pas de discours commercial</>}
            lead="BM Automobile accompagne les automobilistes de Roche-la-Molière et du bassin stéphanois depuis 2006. Ce que nous avons appris : nos clients ne veulent pas qu’on leur vende une voiture, ils veulent savoir la vérité sur celle qu’ils ont devant eux."
            text="C’est notre façon de travailler. Neuf ou occasion, toutes marques, chaque véhicule est présenté avec son kilométrage, son année, son prix TTC et la durée de sa garantie. Et si un véhicule ne vous convient pas, nous vous le dirons."
          />
          <Reveal y={24} delay={0.1} className="grid gap-2.5 md:h-[510px] md:grid-cols-[1fr_2fr_2fr]">
            <div className="grid grid-cols-2 gap-2.5 md:grid-cols-1 md:grid-rows-[300px_200px]">
              <div className="flex h-[200px] flex-col items-center justify-center rounded-2xl bg-accent text-center text-white md:h-auto">
                <p className="text-[70px] leading-none font-bold">{new Date().getFullYear() - company.since}</p>
                <h5 className="mt-2.5 text-xl leading-[1.3] font-medium">Ans <br />d’expérience</h5>
              </div>
              <Photo {...img.keys} className="h-[200px] md:h-auto" />
            </div>
            <Photo {...img.showroom} className="h-[260px] md:h-auto" />
            <div className="grid grid-rows-[200px_200px] gap-2.5 md:grid-rows-[300px_200px]">
              <Photo {...img.reception} />
              <div className="grid grid-cols-2 gap-2.5">
                <Photo {...img.inspection} />
                <Photo {...img.couple} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <HowItWorks />
      <TrustStory
        badge="Notre exigence"
        title="Neuf & occasion, toutes marques"
        text="Occasions récentes, véhicules 0 km disponibles tout de suite, utilitaires pour les professionnels : notre stock évolue chaque semaine. Si vous ne trouvez pas le modèle que vous cherchez, appelez-nous."
        cta={{ label: 'Voir le stock', to: '/vehicules' }}
        image={media.aboutStory}
      />
      <Stats />
      <Testimonials />
      <Team link={{ label: 'Contacter l’équipe', to: '/contact' }} />
      <FaqSplit
        badge="Le garage"
        title="Comment nous travaillons"
        text="Les questions pratiques que l’on nous pose avant une visite. Pour tout le reste, appelez-nous ou laissez-nous un message."
        items={aboutFaqs}
      />
      <div className="h-[30px] md:h-[90px]" />
    </>
  )
}
