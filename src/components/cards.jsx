import { Link } from 'react-router-dom'
import { ArrowUpRight, Fuel, Gauge, Gear } from './icons.jsx'
import { Tag } from './ui.jsx'
import { eur } from '../data/vehicles.js'

const Dot = () => <span className="size-[3px] shrink-0 rounded-full bg-navy" />

// Carte véhicule : photo + état, ligne de caractéristiques, prix et garantie
export function VehicleCard({ v }) {
  return (
    <Link
      to={`/vehicules/${v.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/70 bg-white transition-shadow duration-300 hover:shadow-[0_2px_8px_rgba(5,11,32,0.08)]"
    >
      <div className="relative h-[206px] overflow-hidden rounded-t-2xl">
        <img src={v.images[0]} alt={v.name} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-500 ease-framer group-hover:scale-105" />
        <Tag className="absolute top-2.5 left-[11px]">{v.condition}</Tag>
      </div>
      <div className="flex flex-1 flex-col gap-[15px] p-5">
        <div className="flex flex-col gap-[5px]">
          <h6 className="truncate text-base leading-[1.3] font-medium text-navy decoration-1 underline-offset-2 transition-colors group-hover:text-accent group-hover:underline md:text-lg">{v.name}</h6>
          <p className="flex items-center gap-[5px] text-sm leading-5 text-ink">
            {v.year}
            <Dot />
            <span className="truncate">{v.version}</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 border-y border-line/70 py-[15px] text-sm leading-5 text-ink">
          <span className="flex items-center gap-[3px]"><Gauge size={16} className="shrink-0" />{v.mileage}</span>
          <span className="flex items-center gap-[3px]"><Fuel size={16} className="shrink-0" />{v.fuel}</span>
          {v.transmission && <span className="flex items-center gap-[3px]"><Gear size={16} className="shrink-0" />{v.transmission}</span>}
        </div>
        <div className="mt-auto flex items-end justify-between gap-2.5">
          <div className="flex flex-col gap-[5px]">
            <h5 className="text-lg leading-[1.3] font-medium text-navy md:text-xl">{eur(v.price)}</h5>
            {v.warranty && <p className="text-sm leading-5 text-ink">Garantie {v.warranty}</p>}
          </div>
          <span className="flex items-center gap-2 text-[15px] leading-6 font-medium whitespace-nowrap text-navy">
            Voir le détail
            <ArrowUpRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  )
}

// Carte article : photo + catégorie, auteur · date, titre
export function PostCard({ p }) {
  return (
    <Link to={`/blog/${p.slug}`} className="group flex flex-col gap-5">
      <div className="relative aspect-[419/280] overflow-hidden rounded-2xl">
        <img src={p.image} alt={p.title} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-500 ease-framer group-hover:scale-105" />
        <Tag className="absolute top-2.5 left-[11px]">{p.category}</Tag>
      </div>
      <div className="flex flex-col gap-2.5 md:pr-[60px]">
        <p className="flex items-center gap-2.5 text-sm leading-5 text-ink">
          {p.author}
          <Dot />
          {p.date}
        </p>
        <h5 className="text-lg leading-[1.3] font-medium text-navy transition-colors group-hover:text-accent md:text-xl">{p.title}</h5>
      </div>
    </Link>
  )
}
