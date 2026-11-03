import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { brands, media, vehicleTypes } from '../data/site.js'
import { vehicles } from '../data/vehicles.js'
import { VehicleCard } from '../components/cards.jsx'
import { Badge, Button, EASE, Reveal, SectionHead, TextLink } from '../components/ui.jsx'

const fadeDown = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }

// Each letter fades in from a 10px blur, one after the other
function LetterTitle({ text, delay = 0.25 }) {
  let n = 0
  return (
    <h1 className="text-[42px] leading-none font-bold text-white md:text-[70px]" aria-label={text}>
      {text.split(' ').map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap" aria-hidden="true">
          {[...word].map((ch) => (
            <motion.span
              key={n}
              className="inline-block"
              initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: delay + n++ * 0.035, duration: 0.6, ease: EASE }}
            >
              {ch}
            </motion.span>
          ))}
          {w < text.split(' ').length - 1 && <span className="inline-block w-[0.28em]" />}
        </span>
      ))}
    </h1>
  )
}

export function Hero({ count }) {
  return (
    <section className="relative flex h-[900px] flex-col overflow-hidden">
      <motion.img
        src={media.hero}
        alt=""
        className="absolute inset-0 size-full object-cover object-[50%_35%]"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      />
      <div className="absolute inset-0 bg-navy/50" />

      {/* pas de grand logotype ici : la vraie enseigne est sur la photo */}

      <div className="relative flex flex-col items-center gap-[30px] px-[30px] pt-[240px] text-center md:pt-[345px]">
        <div className="flex flex-col items-center gap-2.5">
          <motion.div {...fadeDown} transition={{ delay: 0.1, duration: 0.55, ease: EASE }}>
            <Badge light>{count} véhicules disponibles</Badge>
          </motion.div>
          <LetterTitle text="Trouvez votre prochaine voiture" />
          <motion.p {...fadeDown} transition={{ delay: 0.3, duration: 0.55, ease: EASE }} className="max-w-[640px] font-figtree text-[15px] leading-[1.73] text-white">
            Véhicules neufs 0 km et d’occasion, toutes marques, à Roche-la-Molière près de Saint-Étienne. Garantie sur chaque véhicule et prix TTC affichés.
          </motion.p>
        </div>
        <motion.div {...fadeDown} transition={{ delay: 0.2, duration: 0.6, ease: EASE }} className="flex flex-wrap justify-center gap-2.5">
          <Button to="/vehicules">Voir les véhicules</Button>
          <Button href="#comment-ca-marche" variant="white">Comment ça marche</Button>
        </motion.div>
      </div>

      <div className="relative mt-auto flex flex-col items-center gap-5 px-[30px] pb-[110px]">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5, ease: EASE }} className="font-figtree text-[15px] leading-[1.73] text-white">
          Ou choisissez par type
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.55, ease: EASE }} className="flex flex-wrap justify-center gap-2.5">
          {vehicleTypes.map((t) => (
            <Link key={t.to} to={t.to} className="flex h-10 items-center gap-[7px] rounded-full bg-white/20 px-5 text-[15px] leading-6 text-white backdrop-blur-[6px] transition-colors hover:bg-white/30">
              <img src={t.icon} alt="" className="size-6" />
              {t.label}
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[50px] rounded-t-[50px] bg-snow md:h-[70px] md:rounded-t-[70px]" />
    </section>
  )
}

// Marques du stock : nom + nombre de véhicules, chaque tuile ouvre l'inventaire filtré
export function Brands() {
  return (
    <section className="bg-snow pt-[30px] pb-[30px] md:pb-[90px]">
      <div className="container-x flex flex-col gap-[30px] md:gap-10">
        <SectionHead badge="Toutes marques" title="Les marques de notre stock" aside={<TextLink to="/vehicules">Voir tous les véhicules</TextLink>} />
        <Reveal className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">
          {brands.map((b) => (
            <Link
              key={b.name}
              to={`/vehicules?make=${encodeURIComponent(b.name)}`}
              className="group flex flex-col items-center gap-1 rounded-2xl border border-line/70 bg-white px-5 py-[30px] transition-shadow duration-300 hover:shadow-[0_2px_8px_rgba(20,22,27,0.08)]"
            >
              <span className="font-brand text-[26px] leading-none font-semibold whitespace-nowrap text-navy uppercase transition-colors group-hover:text-accent">{b.name}</span>
              <span className="text-sm leading-5 text-ink">{b.count} véhicule{b.count > 1 ? 's' : ''}</span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function FeaturedVehicles({ slugs }) {
  const list = slugs.map((s) => vehicles.find((v) => v.slug === s))
  return (
    <section className="py-[30px] md:py-[90px]">
      <div className="container-x flex flex-col gap-[30px] md:gap-10">
        <SectionHead badge="Notre stock" title="Véhicules à la une" aside={<TextLink to="/vehicules">Voir tous les véhicules</TextLink>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((v, i) => (
            <Reveal key={v.slug} delay={i * 0.06}>
              <VehicleCard v={v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Banner({ image, title, text, cta, to }) {
  return (
    <div className="relative flex h-[350px] items-center justify-center overflow-hidden rounded-2xl px-5 text-center md:h-[400px]">
      <img src={image} alt="" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-navy/50" />
      <div className="relative flex flex-col items-center gap-[30px]">
        <Reveal className="flex flex-col gap-2.5">
          <h4 className="text-[22px] leading-[1.3] font-bold text-white md:text-[30px]">{title}</h4>
          <p className="text-sm leading-5 text-white">{text}</p>
        </Reveal>
        <Reveal y={20} delay={0.1}>
          <Button to={to} variant="white">{cta}</Button>
        </Reveal>
      </div>
    </div>
  )
}

export function BuySell() {
  return (
    <section className="pb-[30px] md:pb-[90px]">
      <div className="container-x grid gap-5 md:grid-cols-2">
        <Banner image={media.buyBanner} title="Vous cherchez un véhicule ?" text="Occasions et 0 km toutes marques, garantis et prêts à rouler." cta="Voir le stock" to="/vehicules" />
        <Banner image={media.sellBanner} title="Vous vendez votre voiture ?" text="Parlez-nous de votre véhicule actuel : nous vous dirons si une reprise est possible." cta="Nous contacter" to="/contact" />
      </div>
    </section>
  )
}
