import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { contact, mainNav } from '../data/site.js'
import { Logo, MapPin, Mail, Phone } from './icons.jsx'
import { Button, EASE } from './ui.jsx'

// Absolute header laid over the hero (home) or the navy band (inner pages). It is not sticky.
export default function Header() {
  const [menu, setMenu] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setMenu(false), [pathname])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.55, ease: EASE }}
        className={`absolute inset-x-0 top-0 z-40 ${menu ? 'bg-navy' : ''}`}
      >
        <div className="flex items-center justify-between gap-5 p-[30px] lg:h-[104px]">
          <div className="flex items-center gap-5 lg:w-[440px]">
            <Link to="/" aria-label="BM Automobile, accueil" className="text-white">
              <Logo />
            </Link>
          </div>

          <nav className="hidden items-center gap-5 lg:flex">
            {mainNav.map((l) => (
              <NavLink key={l.to} to={l.to} end className="hover-line text-[15px] leading-6 font-medium whitespace-nowrap text-white">
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-5 lg:flex lg:w-[440px]">
            <a href={contact.phoneHref} className="flex items-center gap-2.5 text-[15px] leading-6 font-medium whitespace-nowrap text-white">
              <Phone size={18} />
              {contact.phone}
            </a>
            <Button to="/contact" variant="ghost">Prendre rendez-vous</Button>
          </div>

          <button type="button" onClick={() => setMenu((v) => !v)} className="relative h-6 w-[25px] lg:hidden" aria-label={menu ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menu}>
            <span className={`absolute right-0 h-0.5 bg-white transition-all duration-300 ease-framer ${menu ? 'top-[11px] w-[25px] rotate-45' : 'top-[6px] w-[25px]'}`} />
            <span className={`absolute right-0 h-0.5 bg-white transition-all duration-300 ease-framer ${menu ? 'top-[11px] w-[25px] -rotate-45' : 'top-4 w-5'}`} />
          </button>
        </div>

        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="overflow-hidden bg-navy lg:hidden"
            >
              <div className="flex flex-col px-[30px] pb-[30px]">
                <nav className="flex flex-col">
                  {mainNav.map((l) => (
                    <NavLink key={l.to} to={l.to} end className="px-[18px] py-[17px] text-lg leading-[1.5] font-medium text-white">
                      {l.label}
                    </NavLink>
                  ))}
                </nav>
                <Button to="/contact" className="mt-2.5 w-full">Prendre rendez-vous</Button>
                <div className="mt-[30px] border-t border-white/15 pt-[30px]">
                  <p className="text-[22px] leading-[1.3] font-medium text-white">Nous contacter</p>
                  <div className="mt-5 flex flex-col gap-4 text-sm text-muted">
                    <p className="flex items-center gap-2.5">
                      <span className="grid size-[42px] place-items-center rounded-2xl bg-white/5 text-white"><MapPin size={16} /></span>
                      {contact.address}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a href={contact.phoneHref} className="flex items-center gap-2.5 underline">
                        <span className="grid size-[42px] place-items-center rounded-2xl bg-white/5 text-white"><Phone size={16} /></span>
                        {contact.phone}
                      </a>
                      <a href={`mailto:${contact.email}`} className="flex items-center gap-2.5 underline">
                        <span className="grid size-[42px] place-items-center rounded-2xl bg-white/5 text-white"><Mail size={16} /></span>
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
