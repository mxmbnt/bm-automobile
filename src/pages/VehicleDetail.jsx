import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PageTop, useSeo } from '../components/page.jsx'
import { VehicleCard } from '../components/cards.jsx'
import * as I from '../components/icons.jsx'
import { SlideTrack, useLoop } from '../components/Slider.jsx'
import { Button, Reveal, SectionHead, Tag } from '../components/ui.jsx'
import { contact, media } from '../data/site.js'
import { eur, getVehicle, similarVehicles } from '../data/vehicles.js'
import { FindCarCta } from '../sections/shared.jsx'
import NotFound from './NotFound.jsx'

const overviewRows = [
  ['Marque', 'make', I.Car],
  ['Modèle', 'model', I.Brush],
  ['État', 'condition', I.Cone],
  ['Carrosserie', 'body', I.Door],
  ['Kilométrage', 'mileage', I.Gauge],
  ['Année', 'year', I.Calendar],
  ['Énergie', 'fuel', I.Fuel],
  ['Boîte de vitesses', 'transmission', I.Gear],
  ['Garantie', 'warranty', I.Clipboard],
  ['Référence', 'ref', I.IdCard],
]

const H5 = ({ children }) => <h5 className="text-[22px] leading-[1.3] font-medium text-navy md:text-[26px]">{children}</h5>

function Gallery({ images, name }) {
  const loop = useLoop(images.length, 1)
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <SlideTrack
        items={images}
        loop={loop}
        gap={0}
        render={(src, i) => <img src={src} alt={`${name}, photo ${i + 1}`} className="h-[260px] w-full object-cover md:h-[486px]" />}
      />
      <button type="button" onClick={loop.prev} aria-label="Photo précédente" className="absolute top-1/2 left-5 size-10 -translate-y-1/2 rounded-full bg-black/20 transition-colors hover:bg-black/40">
        <img src={media.galleryPrev} alt="" className="size-10" />
      </button>
      <button type="button" onClick={loop.next} aria-label="Photo suivante" className="absolute top-1/2 right-5 size-10 -translate-y-1/2 rounded-full bg-black/20 transition-colors hover:bg-black/40">
        <img src={media.galleryNext} alt="" className="size-10" />
      </button>
      <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 rounded-full bg-black/20 px-[7.5px]">
        {images.map((_, i) => (
          <button key={i} type="button" onClick={() => loop.goTo(i)} aria-label={`Photo ${i + 1}`} className="px-[2.5px] py-2.5">
            <span className={`block size-[5px] rounded-full bg-white transition-opacity ${loop.real === i ? '' : 'opacity-50'}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

function Range({ label, display, min, max, step, value, onChange }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between gap-3 text-sm tracking-[-0.01em]">
        <span className="text-slate">{label}</span>
        <span className="text-navy">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="range"
        style={{ background: `linear-gradient(to right, var(--color-accent) ${pct}%, #e1e1e1 ${pct}%)` }}
      />
    </div>
  )
}

// Crédit amortissable classique : prix moins apport, taux mensuel = TAEG / 12 (approximation)
function PaymentCalculator({ price }) {
  const [deposit, setDeposit] = useState(10)
  const [term, setTerm] = useState(72)
  const [apr, setApr] = useState(7.9)
  const financed = price * (1 - deposit / 100)
  const r = apr / 100 / 12
  const monthly = r ? (financed * r) / (1 - Math.pow(1 + r, -term)) : financed / term
  const total = monthly * term + price * (deposit / 100)

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-6">
      <p className="text-xl text-navy">Estimez votre mensualité</p>
      <Range label="Apport" display={`${eur(price * deposit / 100)} · ${deposit} %`} min={0} max={50} step={1} value={deposit} onChange={setDeposit} />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm tracking-[-0.01em]">
          <span className="text-slate">Durée</span>
          <span className="text-navy">{term} mois</span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {[24, 36, 48, 60, 72].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTerm(t)}
              className={`h-10 rounded-lg border text-sm transition-colors ${t === term ? 'border-accent bg-accent text-white' : 'border-line bg-mist text-navy hover:border-accent'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <Range label="TAEG" display={`${apr.toFixed(1).replace('.', ',')} %`} min={0} max={20} step={0.1} value={apr} onChange={setApr} />
      <div className="flex flex-col gap-1 rounded-xl bg-mist p-[18px] text-sm text-slate">
        <span>Mensualité estimée</span>
        <span className="flex items-baseline gap-1">
          <span className="text-[34px] leading-[1.2] text-accent">{eur(monthly)}</span>
          /mois
        </span>
        <span>{eur(financed)} financés · {eur(total)} au total</span>
      </div>
      <p className="text-sm text-slate">Simulation indicative, hors assurance, qui ne constitue pas une offre de crédit. Contactez-nous pour connaître les solutions de financement possibles. Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.</p>
    </div>
  )
}

function PriceCard({ v }) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-[30px] md:p-10">
      <div className="flex flex-col items-start gap-2.5">
        <Tag tone="lavender" className="px-[15px] py-[7px] text-sm">{v.condition}</Tag>
        <h1 className="text-[22px] leading-[1.3] font-bold text-navy md:text-[30px]">{v.name}</h1>
        <p className="flex flex-wrap items-center gap-[5px] text-[15px] leading-6">
          {v.year}<span className="size-[3px] rounded-full bg-navy" />{v.body}<span className="size-[3px] rounded-full bg-navy" />{v.fuel}
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-2.5 border-y border-line/70 py-5 text-[15px] leading-6 whitespace-nowrap">
        <span className="flex items-center gap-[5px]"><I.Gauge size={18} className="shrink-0" />{v.mileage}</span>
        <span className="flex items-center gap-[5px]"><I.Fuel size={18} className="shrink-0" />{v.fuel}</span>
        {v.transmission && <span className="flex items-center gap-[5px]"><I.Gear size={18} className="shrink-0" />{v.transmission}</span>}
      </div>
      <div className="flex flex-col gap-[5px]">
        <p className="text-[15px] leading-6">Notre prix</p>
        <h4 className="text-[30px] leading-[1.3] font-bold text-navy">{eur(v.price)}</h4>
        {v.warranty && <p className="text-sm leading-5">Garantie {v.warranty} incluse</p>}
      </div>
      <div className="flex flex-col gap-2.5">
        <Button to="/contact" className="w-full">Réserver un essai</Button>
        <Button to="/contact" variant="outline" className="w-full">Faire une offre</Button>
      </div>
    </div>
  )
}

export default function VehicleDetail() {
  const { slug } = useParams()
  const v = getVehicle(slug)
  useSeo(v ? v.seoTitle : 'Page introuvable | BM Automobile', v?.seoDescription)
  if (!v) return <NotFound />

  return (
    <>
      <PageTop />
      <section className="bg-white pt-5 pb-[30px] md:pb-[90px]">
        <div className="container-x flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]">
          <Reveal className="lg:sticky lg:top-[60px] lg:order-2 lg:w-[439px] lg:shrink-0">
            <PriceCard v={v} />
          </Reveal>

          <div className="flex min-w-0 flex-1 flex-col gap-[60px]">
            <Reveal><Gallery key={v.slug} images={v.images} name={v.name} /></Reveal>

            <Reveal className="flex flex-col gap-5">
              <H5>Caractéristiques principales</H5>
              <div className="grid md:grid-cols-2 md:gap-x-5">
                {overviewRows.filter(([, key]) => v[key]).map(([label, key, Icon]) => (
                  <div key={key} className="flex items-center gap-[7px] border-b border-line/70 py-[15px] text-[15px] leading-6">
                    <Icon size={18} className="shrink-0" />
                    <span>{label}</span>
                    <span className="ml-auto text-right font-medium">{v[key]}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-5">
              <H5>Description</H5>
              <div className="flex flex-col gap-2.5 text-[15px] leading-6">
                {v.description.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-5">
              <H5>Équipements</H5>
              {/* les annonces ne détaillent qu'une liste courte : une seule liste sur 2 ou 3 colonnes */}
              <ul className="grid gap-x-5 gap-y-1 text-[15px] leading-6 sm:grid-cols-2 md:grid-cols-3">
                {Object.values(v.features).flat().map((f) => <li key={f}>✓ {f}</li>)}
              </ul>
            </Reveal>

            <Reveal className="flex flex-col gap-5">
              <H5>Informations</H5>
              <ul className="list-disc pl-5 text-[15px] leading-6">
                {v.specs.map(([k, val]) => <li key={k}>{k} : {val}</li>)}
              </ul>
            </Reveal>

            <Reveal><PaymentCalculator key={v.slug} price={v.price} /></Reveal>

            <Reveal className="flex flex-col gap-5">
              <H5>Venir au garage</H5>
              <div className="flex flex-col gap-[30px]">
                <iframe title="Plan d’accès BM Automobile" src={contact.mapEmbed} loading="lazy" className="h-[300px] w-full rounded-2xl border-0 md:h-[400px]" />
                <div className="grid gap-5 sm:grid-cols-3">
                  {[
                    ['Adresse', contact.addressLines, I.MapPin],
                    ['Horaires', contact.hours, I.Clock],
                    ['Téléphone', [contact.phone], I.Phone],
                  ].map(([label, lines, Icon]) => (
                    <div key={label} className="flex flex-col gap-5">
                      <span className="grid size-11 place-items-center rounded-full bg-ice text-accent"><Icon size={18} /></span>
                      <div className="flex flex-col gap-[3px] text-[15px] leading-6">
                        <p>{label}</p>
                        {lines.map((l) => <p key={l} className="font-medium">{l}</p>)}
                      </div>
                    </div>
                  ))}
                </div>
                <Button href={contact.mapsUrl} target="_blank" rel="noreferrer" className="self-start">Itinéraire</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white pb-[30px] md:pb-[90px]">
        <div className="container-x flex flex-col gap-[30px] md:gap-10">
          <SectionHead badge="Notre stock" title="Véhicules similaires" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {similarVehicles(v).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}><VehicleCard v={s} /></Reveal>
            ))}
          </div>
        </div>
      </section>
      <FindCarCta />
      <div className="h-[30px] md:h-[90px]" />
    </>
  )
}
