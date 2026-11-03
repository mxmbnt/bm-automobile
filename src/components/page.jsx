import { useEffect } from 'react'
import { Badge, Reveal } from './ui.jsx'

// Sets the tab title and meta description of the current page
export function useSeo(title, description) {
  useEffect(() => {
    document.title = title
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}

// Inner pages: navy band under the header, then a white sheet with 70px rounded top corners
export function PageTop() {
  return (
    <div className="bg-navy pt-[86px] lg:pt-[104px]">
      <div className="h-[50px] rounded-t-[50px] bg-white md:h-[70px] md:rounded-t-[70px]" />
    </div>
  )
}

// Badge + H1 on the left, lead text on the right (About, Services, FAQ, Contact, listings)
export function PageIntro({ badge, title, lead, text, aside, className = '' }) {
  return (
    <div className={`flex flex-col gap-[30px] md:flex-row md:gap-2.5 ${className}`}>
      <Reveal className="flex flex-col gap-2.5 md:w-1/2">
        <Badge>{badge}</Badge>
        <h1 className="text-[28px] leading-[1.3] font-bold text-navy md:text-[40px]">{title}</h1>
      </Reveal>
      <Reveal y={20} delay={0.1} className={`flex flex-col gap-[30px] md:w-1/2 ${aside ? 'md:justify-end md:items-end' : ''}`}>
        {lead && <h5 className="text-lg leading-[1.3] font-medium text-navy md:text-xl">{lead}</h5>}
        {text && <p className="text-[15px] leading-6 text-ink">{text}</p>}
        {aside}
      </Reveal>
    </div>
  )
}
