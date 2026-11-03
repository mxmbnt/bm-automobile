import { useState } from 'react'
import { PageIntro, PageTop, useSeo } from '../components/page.jsx'
import { Headset, Hourglass, MapPinUser } from '../components/icons.jsx'
import { Badge, Button, Reveal } from '../components/ui.jsx'
import { contact } from '../data/site.js'

const field = 'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/60 focus:border-accent'

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2.5">
      <span className="text-sm leading-5 text-[#818181]">{label}</span>
      {children}
    </label>
  )
}

export default function Contact() {
  useSeo('Contact | BM Automobile, Roche-la-Molière', 'Adresse, horaires et téléphone du garage BM Automobile à Roche-la-Molière, ou envoyez-nous un message.')
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageTop />
      <section className="bg-white pt-5 pb-[30px] md:pb-[90px]">
        <div className="container-x flex flex-col gap-10">
          <PageIntro
            badge="Réponse rapide"
            title="Nous contacter"
            aside={<p className="text-[15px] leading-6 md:text-right">Appelez-nous, écrivez-nous ou passez au garage : nous répondons à chaque message dans la journée ouvrée.</p>}
          />
          <Reveal y={24} delay={0.1}>
            <iframe title="Plan d’accès BM Automobile" src={contact.mapEmbed} loading="lazy" className="h-[360px] w-full rounded-2xl border-0 md:h-[510px]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-[30px] md:pb-[90px]">
        <div className="container-x flex flex-col gap-[60px] lg:flex-row lg:items-start lg:gap-[90px]">
          <Reveal className="flex flex-col gap-[30px] lg:w-[704px]">
            <div className="flex flex-col gap-2.5">
              <Badge>Écrivez-nous</Badge>
              <h3 className="title-lg">Comment pouvons-nous vous aider ?</h3>
              <p className="text-[15px] leading-6">Envoyez-nous votre demande, nous vous répondons dans la journée ouvrée. Précisez le véhicule qui vous intéresse et nous préparerons son historique.</p>
            </div>
            {sent ? (
              <div className="rounded-2xl bg-lavender p-[30px]">
                <h5 className="text-xl font-medium text-navy">Merci, votre message est bien envoyé.</h5>
                <p className="mt-2 text-[15px] leading-6">Nous vous recontactons dans la journée ouvrée. Besoin d’une réponse plus rapide ? Appelez le {contact.phone}.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="flex flex-col gap-5">
                <Field label="Nom"><input name="Nom" required placeholder="Marie Dupont" className={field} /></Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="E-mail"><input type="email" name="Email" required placeholder="vous@email.fr" className={field} /></Field>
                  <Field label="Téléphone"><input type="tel" name="Telephone" placeholder="06 …" className={field} /></Field>
                </div>
                <Field label="Message"><textarea name="Message" rows={4} placeholder="Votre demande : véhicule, essai, reprise, atelier…" className={`${field} h-[100px] resize-y`} /></Field>
                <Button type="submit" className="w-full rounded-[10px]">Envoyer le message</Button>
              </form>
            )}
          </Reveal>

          <Reveal y={20} delay={0.1} className="flex flex-col gap-5 rounded-2xl border border-line p-[30px] md:p-10 lg:sticky lg:top-0 lg:flex-1">
            <div className="flex flex-col gap-2.5">
              <Badge>Venir ou appeler</Badge>
              <h5 className="text-[22px] leading-[1.3] font-medium text-navy md:text-[26px]">Sans rendez-vous</h5>
              <p className="text-[15px] leading-6">Passez pendant nos horaires d’ouverture. Appelez avant de venir et le véhicule qui vous intéresse sera prêt pour l’essai.</p>
            </div>
            <div className="flex flex-col gap-[30px]">
              {[
                ['Adresse', contact.addressLines, MapPinUser],
                ['Téléphone et e-mail', [contact.phone, contact.email], Headset],
                ['Horaires', contact.hoursLong, Hourglass],
              ].map(([label, lines, Icon]) => (
                <div key={label} className="flex flex-col gap-[15px]">
                  <Icon size={26} className="text-navy" />
                  <div className="flex flex-col gap-[7px]">
                    <h6 className="text-lg leading-[1.3] font-medium text-navy">{label}</h6>
                    <div className="text-[15px] leading-6">
                      {lines.map((l) => <p key={l}>{l}</p>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
