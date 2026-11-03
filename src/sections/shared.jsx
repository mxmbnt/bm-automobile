// Sections used on several pages (home, about, services, vehicle pages)
import { benefits, media, stats, steps, team, teamAvatars, testimonials } from '../data/site.js'
import { PostCard } from '../components/cards.jsx'
import { CheckCircle, Star } from '../components/icons.jsx'
import { SlideTrack, useLoop, useMedia } from '../components/Slider.jsx'
import { Accordion, Badge, Button, Counter, Reveal, SectionHead, TextLink } from '../components/ui.jsx'

// Sticky intro on the left, step cards stacking on the right
export function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="bg-linear-to-b from-lavender to-white py-[30px] md:py-[90px]">
      <div className="container-x flex flex-col gap-[30px] md:flex-row md:gap-0">
        <div className="md:w-1/2">
          <Reveal className="flex flex-col gap-[30px] md:sticky md:top-[50px] lg:pr-[180px]">
            <div className="flex flex-col gap-[15px]">
              <Badge>Comment ça marche</Badge>
              <h3 className="title-lg">De l’annonce à la route, en quatre étapes</h3>
              <p className="text-[15px] leading-6">Sans pression ni jargon : acheter une voiture doit rester simple et clair.</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <div className="flex">
                {teamAvatars.map((a, i) => (
                  <img key={a.src} src={a.src} alt={a.alt} className={`size-[49px] rounded-full border-2 border-white object-cover ${i ? '-ml-3.5' : ''}`} />
                ))}
              </div>
              <p className="text-[15px] leading-6">Une équipe locale de plus de 10 personnes</p>
            </div>
            <Button to="/services" className="self-start">Découvrir nos services</Button>
          </Reveal>
        </div>
        <Reveal x={20} y={0} delay={0.1} duration={0.65} className="flex flex-col gap-[30px] md:w-1/2 md:items-end">
          {steps.map((s, i) => (
            <div key={s.title} className="w-full md:sticky md:top-[50px] md:max-w-[500px]">
              <div className="rounded-2xl bg-white px-1.5 pt-1.5">
                <div className="relative h-[241px] overflow-hidden rounded-xl">
                  <img src={s.image} alt="" loading="lazy" decoding="async" className="size-full object-cover" />
                  <h2 className="absolute top-5 right-5 text-[40px] leading-[1.3] font-bold text-white md:text-[52px]">{String(i + 1).padStart(2, '0')}</h2>
                </div>
                <div className="flex flex-col gap-2.5 p-5 md:pr-[60px]">
                  <h5 className="text-lg leading-[1.3] font-medium text-navy md:text-xl">{s.title}</h5>
                  <p className="text-[15px] leading-6">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

// Photo on the left, tinted panel with benefits on the right
export function TrustStory({ badge, title, text, cta, image }) {
  return (
    <section className="bg-white">
      <div className="container-x flex flex-col md:flex-row">
        <div className="h-[400px] overflow-hidden rounded-t-2xl md:h-[650px] md:w-1/2 md:rounded-l-2xl md:rounded-tr-none">
          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="size-full object-cover" />
        </div>
        <div className="flex items-center rounded-b-2xl bg-lavender p-[30px] md:w-1/2 md:rounded-r-2xl md:rounded-bl-none md:p-[60px]">
          <div className="flex flex-col gap-[30px]">
            <Reveal className="flex flex-col gap-[15px]">
              <Badge>{badge}</Badge>
              <h3 className="title-lg">{title}</h3>
              <p className="text-[15px] leading-6">{text}</p>
            </Reveal>
            <Reveal y={20} delay={0.12} className="flex flex-col gap-[15px]">
              {benefits.map((b) => (
                <p key={b} className="flex items-start gap-[5px] text-[15px] leading-6">
                  <CheckCircle size={18} className="mt-[3px] shrink-0" />
                  {b}
                </p>
              ))}
            </Reveal>
            <Reveal y={20} delay={0.2}>
              <Button to={cta.to}>{cta.label}</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Stats() {
  return (
    <section className="border-b border-line/70 py-[30px] md:py-[50px]">
      <div className="container-x grid grid-cols-2 gap-y-[30px] md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05} className="flex flex-col items-center gap-2.5 text-center">
            <p className="flex items-center gap-2 text-[40px] leading-10 font-semibold text-[#1a1a1a]">
              <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
              {s.star && <Star size={20} className="text-accent" />}
            </p>
            <p className="text-[15px] leading-6 uppercase">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Stars() {
  return (
    <span className="flex gap-[7px] text-accent">
      {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={11} />)}
    </span>
  )
}

function TestimonialCard({ t }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-lavender p-1.5 md:h-[355px] md:flex-row">
      <div className="flex flex-col justify-between gap-5 p-5 md:w-[353px] md:pr-[60px]">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <Stars />
            <p className="text-[15px] leading-6 text-accent">{t.rating}</p>
          </div>
          <h6 className="text-base leading-[1.3] font-medium text-navy md:text-lg">{t.title}</h6>
          <p className="text-[15px] leading-6">{t.quote}</p>
        </div>
        <div className="flex items-center gap-2.5">
          <img src={t.avatar} alt="" className="size-[50px] rounded-full object-cover" />
          <div>
            <p className="text-base leading-[26px] font-medium">{t.name}</p>
            <p className="text-sm leading-5">{t.role}</p>
          </div>
        </div>
      </div>
      <div className="h-[260px] overflow-hidden rounded-xl md:h-auto md:flex-1">
        <img src={t.image} alt="" decoding="async" className="size-full object-cover" />
      </div>
    </article>
  )
}

export function Testimonials() {
  const wide = useMedia('(min-width: 810px)')
  const loop = useLoop(testimonials.length, wide ? 2 : 1, 6000)
  return (
    <section className="py-[30px] md:py-[90px]">
      <div className="container-x flex flex-col gap-[30px] md:gap-10">
        <SectionHead
          badge="Avis clients"
          title="Ce que disent nos clients"
          aside={<p className="max-w-[500px] text-[15px] leading-6">Retrouvez tous nos avis sur Google et sur notre boutique Leboncoin.</p>}
        />
        <Reveal className="flex flex-col gap-5">
          <SlideTrack items={testimonials} loop={loop} render={(t) => <TestimonialCard t={t} />} />
          <div className="flex gap-2.5">
            <button type="button" onClick={loop.prev} aria-label="Avis précédent" className="size-10 rounded-full transition-transform hover:scale-105">
              <img src={media.arrowPrev} alt="" className="size-10" />
            </button>
            <button type="button" onClick={loop.next} aria-label="Avis suivant" className="size-10 rounded-full transition-transform hover:scale-105">
              <img src={media.arrowNext} alt="" className="size-10" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Photo pleine largeur avec voile sombre, titre centré et deux boutons
export function FindCarCta() {
  return (
    <section>
      <div className="container-x">
        <div className="relative flex h-[400px] items-center justify-center overflow-hidden rounded-2xl px-[30px] text-center md:h-[500px]">
          <img src={media.ctaBanner} alt="Conductrice appuyée contre une voiture rouge au bord de la mer" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-navy/50" />
          <div className="relative flex flex-col items-center gap-[30px]">
            <Reveal className="flex flex-col items-center gap-2.5">
              <Badge light>Votre projet auto</Badge>
              <h3 className="title-lg text-white">Prêt à trouver votre prochaine voiture ?</h3>
              <p className="font-figtree text-[15px] leading-[1.73] text-white">Parcourez notre stock en ligne ou venez nous voir à Roche-la-Molière.</p>
            </Reveal>
            <Reveal y={20} delay={0.12} className="flex flex-wrap justify-center gap-2.5">
              <Button to="/vehicules">Voir les véhicules</Button>
              <Button to="/contact" variant="white">Nous contacter</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Team({ link }) {
  return (
    <section className="pt-[30px] md:pt-[90px]">
      <div className="container-x flex flex-col gap-[30px] md:gap-10">
        <SectionHead badge="L’équipe" title="Des professionnels à votre écoute" aside={<TextLink to={link.to}>{link.label}</TextLink>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06} className="flex flex-col overflow-hidden rounded-2xl bg-snow">
              <div className="flex flex-col items-center gap-[5px] pt-[30px] text-center">
                <h5 className="text-lg leading-[1.3] font-medium text-navy md:text-xl">{p.name}</h5>
                <p className="text-[15px] leading-6">{p.role}</p>
              </div>
              <div className="flex h-[330px] justify-center overflow-hidden rounded-xl">
                <img src={p.photo} alt="" loading="lazy" decoding="async" className="h-[330px] w-[315px] max-w-none object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Sticky intro + accordion list
export function FaqSplit({ badge, title, text, items }) {
  return (
    <section className="py-[30px] md:pt-[90px] md:pb-0">
      <div className="container-x flex flex-col gap-[30px] md:flex-row md:gap-0">
        <div className="md:w-1/2">
          <Reveal className="flex flex-col gap-[30px] md:sticky md:top-[50px] lg:pr-[180px]">
            <div className="flex flex-col gap-2.5">
              <Badge>{badge}</Badge>
              <h3 className="title-lg">{title}</h3>
              <p className="text-[15px] leading-6">{text}</p>
            </div>
            <Button to="/contact" className="self-start">Nous contacter</Button>
          </Reveal>
        </div>
        <Reveal x={20} y={0} delay={0.1} duration={0.6} className="md:w-1/2">
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  )
}

export function BlogTeaser({ posts }) {
  return (
    <section className="py-[30px] md:py-[90px]">
      <div className="container-x flex flex-col gap-[30px] md:gap-10">
        <SectionHead badge="Nos conseils" title="Guides et conseils auto" aside={<TextLink to="/blog">Lire tous les articles</TextLink>} />
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <PostCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
