import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { company, contact, footerNav, socials } from '../data/site.js'
import * as Icons from './icons.jsx'
import { EASE, Reveal } from './ui.jsx'

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="hover-line w-fit text-sm leading-5 text-muted transition-colors hover:text-white">
      {children}
    </Link>
  )
}

export default function Footer() {
  const [sent, setSent] = useState(false)

  return (
    <footer className="relative overflow-hidden bg-navy pt-[50px] md:pt-[70px]">
      {/* white page edge with rounded bottom corners */}
      <div className="absolute inset-x-0 top-0 h-[50px] rounded-b-[50px] bg-white md:h-[70px] md:rounded-b-[70px]" />

      <Reveal y={0} duration={0.6} className="border-b border-white/10">
        <div className="container-x flex flex-col gap-10 py-[60px] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-[5px]">
            <h4 className="text-[22px] leading-[1.3] font-bold text-white md:text-[30px]">Recevez nos nouveaux arrivages</h4>
            <p className="text-sm leading-5 text-muted">Un e-mail court dès qu’un nouveau véhicule arrive au garage. Pas de spam.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            className="flex h-[65px] w-full items-center rounded-full bg-white/7 py-2.5 pr-2.5 pl-6 md:max-w-[502px]"
          >
            {sent ? (
              <p className="text-sm text-white">Merci ! Votre inscription est bien prise en compte.</p>
            ) : (
              <>
                <input type="email" name="Email" required placeholder="Votre e-mail" aria-label="Votre e-mail" className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-muted" />
                <button type="submit" aria-label="S’inscrire" className="grid size-[45px] shrink-0 place-items-center rounded-full bg-accent text-white transition-colors hover:bg-accent-dark">
                  <Icons.Send size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </Reveal>

      <Reveal y={0} duration={0.6}>
        <div className="container-x grid gap-10 py-[60px] md:grid-cols-2 lg:grid-cols-[392px_1fr_1fr_1fr] lg:gap-0">
          <div className="flex flex-col gap-5 lg:pr-[90px]">
            <Link to="/" aria-label="BM Automobile, accueil" className="text-white">
              <Icons.Logo />
            </Link>
            <p className="max-w-[302px] text-sm leading-5 text-muted">{company.tagline}, à Roche-la-Molière près de Saint-Étienne, depuis {company.since}.</p>
            <div className="flex gap-[5px]">
              {socials.map((s) => {
                const Icon = Icons[s.icon]
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-white">
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="text-xl leading-[1.3] font-medium text-white">Le garage</h5>
            <nav className="flex flex-col gap-[15px]">
              {footerNav.company.map((l) => <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>)}
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="text-xl leading-[1.3] font-medium text-white">Véhicules</h5>
            <nav className="flex flex-col gap-[15px]">
              {footerNav.inventory.map((l) => <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>)}
              <a href={company.leboncoin} target="_blank" rel="noreferrer" className="hover-line w-fit text-sm leading-5 text-muted transition-colors hover:text-white">
                Nos annonces Leboncoin
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="text-xl leading-[1.3] font-medium text-white">Contact</h5>
            <div className="flex flex-col gap-5 text-sm leading-5 text-muted">
              <p className="flex items-center gap-2.5">
                <span className="grid size-[42px] shrink-0 place-items-center rounded-2xl bg-white/5 text-white"><Icons.MapPin size={16} /></span>
                <span>{contact.addressLines[0]}<br />{contact.addressLines[1]}</span>
              </p>
              <a href={contact.phoneHref} className="flex items-center gap-2.5 underline hover:text-white">
                <span className="grid size-[42px] shrink-0 place-items-center rounded-2xl bg-white/5 text-white"><Icons.Phone size={16} /></span>
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2.5 underline hover:text-white">
                <span className="grid size-[42px] shrink-0 place-items-center rounded-2xl bg-white/5 text-white"><Icons.Mail size={16} /></span>
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="container-x flex flex-col gap-5 py-[30px] md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-5 text-muted">© {new Date().getFullYear()} {company.name}. Tous droits réservés.</p>
        <nav className="flex gap-5">
          {footerNav.legal.map((l) => <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>)}
        </nav>
      </div>

      {/* oversized wordmark rising from the bottom edge */}
      <div className="container-x h-[90px] overflow-hidden md:h-[200px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Icons.Wordmark className="w-full" />
        </motion.div>
      </div>
    </footer>
  )
}
