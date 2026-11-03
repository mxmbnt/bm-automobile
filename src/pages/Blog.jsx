import { PageIntro, PageTop, useSeo } from '../components/page.jsx'
import { PostCard } from '../components/cards.jsx'
import { Reveal } from '../components/ui.jsx'
import { posts } from '../data/posts.js'

export default function Blog() {
  useSeo('Conseils auto | BM Automobile', 'Guides pratiques pour bien choisir, financer et entretenir votre véhicule, écrits par l’équipe du garage BM Automobile.')
  return (
    <>
      <PageTop />
      <section className="bg-white pt-5 pb-[30px] md:pb-[90px]">
        <div className="container-x flex flex-col gap-10">
          <PageIntro
            badge={`${posts.length} articles`}
            title="Guides et conseils auto"
            aside={<p className="text-[15px] leading-6 md:text-right">Conseils d’achat, financement et entretien, par l’équipe du garage.</p>}
          />
          <div className="grid gap-x-5 gap-y-10 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <PostCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
