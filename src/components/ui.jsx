import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, animate, motion, useInView } from 'framer-motion'
import { ArrowLong, ArrowUpRight } from './icons.jsx'

// Easing used by every Framer transition of the template
export const EASE = [0.22, 0.61, 0.36, 1]

// Fade + slide in once 20% of the element is visible (Framer "appear on scroll")
export function Reveal({ as = 'div', x = 0, y = 24, delay = 0, duration = 0.55, amount = 0.2, className, children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ delay, duration, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Dot + uppercase label above section titles
export function Badge({ children, light = false, className = '' }) {
  return (
    <p className={`flex items-center gap-[7px] text-sm leading-5 font-medium uppercase ${light ? 'text-white' : 'text-navy'} ${className}`}>
      <span className={`size-1.5 rounded-full ${light ? 'bg-white' : 'bg-navy'}`} />
      {children}
    </p>
  )
}

// Small pill used on vehicle and article cards
export function Tag({ children, tone = 'white', className = '' }) {
  const tones = { white: 'bg-white', ice: 'bg-ice', lavender: 'bg-lavender text-ink' }
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-[5px] text-xs leading-5 font-medium text-navy uppercase ${tones[tone]} ${className}`}>
      <span className="size-1 rounded-full bg-navy" />
      {children}
    </span>
  )
}

const buttonStyles = {
  primary: 'bg-accent text-white hover:bg-accent-dark',
  white: 'bg-white text-navy hover:bg-lavender',
  outline: 'border border-accent text-accent hover:bg-ice',
  ghost: 'border border-white/90 text-white hover:bg-white hover:text-navy',
}

// Framer "Primary / White / Border / White-Border" buttons: 44px high, 12px radius, arrow on the right
export function Button({ to, href, variant = 'primary', className = '', children, icon = true, ...rest }) {
  const cls = `group inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-[15px] leading-6 font-medium whitespace-nowrap transition-colors duration-300 ${buttonStyles[variant]} ${className}`
  const inner = (
    <>
      {children}
      {icon && <ArrowUpRight size={11} className="transition-transform duration-300 ease-framer group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}

// Text link with arrow and growing accent underline ("Voir tous les véhicules")
export function TextLink({ to, children, className = '' }) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-2 text-[15px] leading-6 font-medium whitespace-nowrap text-navy ${className}`}>
      <span className="relative">
        {children}
        <span className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-framer group-hover:scale-x-100" />
      </span>
      <ArrowUpRight size={11} />
    </Link>
  )
}

// Badge + title (+ optional right-hand content) at the top of a section
export function SectionHead({ badge, title, aside, light = false, className = '' }) {
  return (
    <div className={`flex flex-col gap-2.5 md:flex-row md:items-end md:justify-between md:gap-10 ${className}`}>
      <Reveal className="flex flex-col gap-2.5">
        <Badge light={light}>{badge}</Badge>
        <h3 className={`title-lg ${light ? 'text-white' : ''}`}>{title}</h3>
      </Reveal>
      {aside && (
        <Reveal y={20} delay={0.1} className="shrink-0">
          {aside}
        </Reveal>
      )}
    </div>
  )
}

// Counts up to `value` the first time it scrolls into view (Framer "Counter" component, 2s easeOut)
export function Counter({ value, decimals = 0, suffix = '', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 2, ease: 'easeOut', onUpdate: setN })
    return () => c.stop()
  }, [inView, value])
  return (
    <span ref={ref} className={className}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}

// FAQ row: snow card, question + rotating arrow, answer slides open
export function Accordion({ items, className = '' }) {
  const [open, setOpen] = useState(-1)
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className="rounded-2xl bg-snow">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 px-[30px] py-[26px] text-left"
            >
              <h6 className="text-base leading-[1.3] font-medium text-navy md:text-lg">{item.q}</h6>
              <ArrowLong
                size={12}
                className={`shrink-0 text-navy transition-transform duration-300 ease-framer ${isOpen ? '-rotate-45' : 'rotate-[135deg]'}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="px-[30px] pb-[26px] text-[15px] leading-6 text-ink">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

// Splits a title into words that rise in one after another (Framer text effect)
export function WordsReveal({ text, as = 'h1', className = '', delay = 0 }) {
  const Tag = as
  return (
    <Tag className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block whitespace-pre"
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: delay + i * 0.06, duration: 0.5, ease: EASE }}
        >
          {w}
          {i < text.split(' ').length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </Tag>
  )
}
