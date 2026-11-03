import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { PageIntro, PageTop, useSeo } from '../components/page.jsx'
import { VehicleCard } from '../components/cards.jsx'
import { EASE, Reveal } from '../components/ui.jsx'
import { inventoryOrder, vehicles } from '../data/vehicles.js'

const bands = {
  'Moins de 15 000 €': (v) => v.price < 15000,
  '15 000 à 20 000 €': (v) => v.price >= 15000 && v.price < 20000,
  '20 000 à 25 000 €': (v) => v.price >= 20000 && v.price < 25000,
  '25 000 à 30 000 €': (v) => v.price >= 25000 && v.price < 30000,
  'Plus de 30 000 €': (v) => v.price >= 30000,
}
const uniq = (key) => [...new Set(vehicles.map((v) => v[key]))].sort((a, b) => a.localeCompare(b, 'fr'))

// Options tirées du stock (les paramètres d'URL restent en anglais : ?make=Citroën)
const filters = [
  { key: 'condition', label: 'État', options: ['Occasion', '0 km'], test: (v, o) => v.condition === o },
  { key: 'make', label: 'Marque', options: uniq('make'), test: (v, o) => v.make === o },
  { key: 'body', label: 'Carrosserie', options: ['Citadine', 'Compacte', 'SUV', 'Utilitaire'], test: (v, o) => v.body === o },
  { key: 'fuel', label: 'Énergie', options: ['Essence', 'Diesel', 'Hybride', 'Hybride rechargeable', 'Électrique'], test: (v, o) => v.fuel === o },
  { key: 'transmission', label: 'Boîte', options: ['Automatique', 'Manuelle'], test: (v, o) => v.transmission === o },
  { key: 'price', label: 'Prix', options: Object.keys(bands), test: (v, o) => bands[o](v) },
]

function Select({ filter, value, onChange }) {
  return (
    <label className="relative">
      <span className="sr-only">{filter.label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`h-11 cursor-pointer appearance-none rounded-full border bg-white py-3 pr-10 pl-4 text-sm leading-5 outline-none transition-colors focus:border-accent ${value ? 'border-accent text-accent' : 'border-line text-navy'}`}
      >
        <option value="">{filter.label}</option>
        {filter.options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <svg viewBox="0 0 12 12" className="pointer-events-none absolute top-1/2 right-4 size-3 -translate-y-1/2 text-navy" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 4.5 6 7.5 9 4.5" />
      </svg>
    </label>
  )
}

export default function Vehicles() {
  useSeo('Véhicules neufs et d’occasion à Roche-la-Molière | BM Automobile', 'Tout notre stock, occasions et 0 km, filtrable par marque, carrosserie, énergie, boîte et prix. Garantie et prix TTC sur chaque annonce.')
  const [params, setParams] = useSearchParams()

  const list = useMemo(() => {
    const ordered = inventoryOrder.map((s) => vehicles.find((v) => v.slug === s))
    return ordered.filter((v) => filters.every((f) => !params.get(f.key) || f.test(v, params.get(f.key))))
  }, [params])

  const set = (key, value) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true, preventScrollReset: true })
  }
  const active = filters.some((f) => params.get(f.key))

  return (
    <>
      <PageTop />
      <section className="bg-white pt-5 pb-[30px] md:pb-[90px]">
        <div className="container-x flex flex-col gap-10">
          <PageIntro badge={`${vehicles.length} véhicules disponibles`} title="Tous nos véhicules" aside={<p className="text-[15px] leading-6">Occasions et véhicules 0 km, toutes marques, visibles au garage à Roche-la-Molière.</p>} />
          <Reveal y={20} delay={0.15} className="flex flex-wrap items-center gap-[15px]">
            {filters.map((f) => <Select key={f.key} filter={f} value={params.get(f.key) || ''} onChange={(v) => set(f.key, v)} />)}
            {active && (
              <button type="button" onClick={() => setParams({}, { replace: true })} className="hover-line text-sm text-navy">
                Effacer les filtres
              </button>
            )}
          </Reveal>
          {list.length ? (
            <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {list.map((v) => (
                  <motion.div key={v.slug} layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.45, ease: EASE }}>
                    <VehicleCard v={v} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <p className="rounded-2xl bg-snow px-[30px] py-[60px] text-center text-[15px]">Aucun véhicule ne correspond à ces filtres pour le moment. Essayez d’élargir votre recherche.</p>
          )}
        </div>
      </section>
    </>
  )
}
