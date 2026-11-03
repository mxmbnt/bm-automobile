import { useSeo } from '../components/page.jsx'
import { featuredPosts, featuredVehicles, homeFaqs, media } from '../data/site.js'
import { vehicles } from '../data/vehicles.js'
import { posts } from '../data/posts.js'
import { Brands, BuySell, FeaturedVehicles, Hero } from '../sections/home.jsx'
import { BlogTeaser, FaqSplit, FindCarCta, HowItWorks, Stats, Team, Testimonials, TrustStory } from '../sections/shared.jsx'

export default function Home() {
  useSeo('BM Automobile | Neuf & occasion toutes marques à Roche-la-Molière', 'Véhicules neufs 0 km et d’occasion toutes marques à Roche-la-Molière, près de Saint-Étienne. Garantie sur chaque véhicule, prix TTC affichés. 04 77 90 51 53.')
  return (
    <>
      <Hero count={vehicles.length} />
      <Brands />
      <FeaturedVehicles slugs={featuredVehicles} />
      <BuySell />
      <HowItWorks />
      <TrustStory
        badge="Pourquoi BM Automobile"
        title="Plus qu’un vendeur, un garage de confiance"
        text="Depuis 2006, nous aidons les automobilistes de la Loire à trouver le bon véhicule, neuf ou d’occasion, avec des conseils honnêtes et sans pression."
        cta={{ label: 'Découvrir le garage', to: '/a-propos' }}
        image={media.homeStory}
      />
      <Stats />
      <Testimonials />
      <FindCarCta />
      <Team link={{ label: 'Découvrir le garage', to: '/a-propos' }} />
      <FaqSplit
        badge="Une question ?"
        title="Questions fréquentes"
        text="Tout ce qu’il faut savoir avant d’acheter. Vous ne trouvez pas la réponse ? Notre équipe est joignable en un clic."
        items={homeFaqs}
      />
      <BlogTeaser posts={featuredPosts.map((s) => posts.find((p) => p.slug === s))} />
    </>
  )
}
