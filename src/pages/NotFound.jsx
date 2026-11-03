import { motion } from 'framer-motion'
import { PageTop, useSeo } from '../components/page.jsx'
import { Button, EASE, Reveal, WordsReveal } from '../components/ui.jsx'
import { media } from '../data/site.js'

export default function NotFound() {
  useSeo('Page introuvable | BM Automobile', 'Cette page n’existe pas ou plus. Découvrez plutôt nos véhicules disponibles.')
  return (
    <>
      <PageTop />
      <section className="bg-white px-[30px] pt-5 pb-[60px] md:pt-[90px] md:pb-[90px]">
        <div className="mx-auto flex max-w-[1380px] flex-col items-center gap-10 text-center">
          <motion.img
            src={media.notFound}
            alt="Erreur 404"
            className="w-full max-w-[1380px]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
          />
          <div className="flex flex-col gap-[9px]">
            <WordsReveal text="Cette page a pris une mauvaise route" className="text-[28px] leading-[1.3] font-bold text-navy md:text-[40px]" />
            <Reveal y={20} delay={0.3}>
              <p className="text-[15px] leading-6">La page que vous cherchez n’existe pas, ou le véhicule a déjà été vendu. Le reste de notre stock vous attend.</p>
            </Reveal>
          </div>
          <Reveal y={20} delay={0.4}>
            <Button to="/vehicules">Voir les véhicules</Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
