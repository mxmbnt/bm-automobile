// Contenu éditorial du site : tout ce qui n'est ni un véhicule ni un article
// Sources : annuaire des entreprises (société) et annonces easy-occasions.fr (téléphone, stock, garanties).
// Les valeurs marquées « À CONFIRMER » sont provisoires.

import { vehicles } from './vehicles.js'

const m = (file) => `/media/${file}`

// Le pin de la carte vise l'adresse du siège dans la ZI (annuaire des entreprises)
const addressQuery = encodeURIComponent('4 rue des Piqueurs de Fond, ZI Charles Chana, 42230 Roche-la-Molière')

export const company = {
  name: 'BM Automobile',
  tagline: 'Neuf & occasion toutes marques',
  legalName: 'BM AUTO ET ASSOCIES',
  legalForm: 'SARL',
  siren: '491 523 049',
  siret: '491 523 049 00022',
  vat: 'FR88491523049',
  rcs: 'RCS Saint-Étienne 491 523 049',
  headOffice: 'ZA Charles Chana, 4 rue des Piqueurs de Fond, 42230 Roche-la-Molière',
  since: 2006,
  leboncoin: 'https://www.leboncoin.fr/boutique/45685/bm_automobile.htm',
}

export const contact = {
  phone: '04 77 90 51 53',
  phoneHref: 'tel:+33477905153',
  email: 'contact@bm-automobile.fr', // À CONFIRMER
  // Coordonnées affichées sur le site existant du garage (easy-occasions.fr)
  address: 'ZI Charles Chana, 42230 Roche-la-Molière',
  addressLines: ['ZI Charles Chana', '42230 Roche-la-Molière'],
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${addressQuery}`,
  mapEmbed: `https://maps.google.com/maps?q=${addressQuery}&z=15&output=embed`,
  // À CONFIRMER
  hours: ['Lun – Ven : 8h – 12h, 14h – 18h', 'Sam : 9h – 12h · Dim : fermé'],
  hoursLong: ['Du lundi au vendredi : 8h – 12h et 14h – 18h', 'Samedi : 9h – 12h · Dimanche : fermé'],
}

export const mainNav = [
  { label: 'Accueil', to: '/' },
  { label: 'Véhicules', to: '/vehicules' },
  { label: 'Services', to: '/services' },
  { label: 'Le garage', to: '/a-propos' },
  { label: 'Conseils', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav = {
  company: [
    { label: 'Le garage', to: '/a-propos' },
    { label: 'Services', to: '/services' },
    { label: 'Conseils', to: '/blog' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ],
  inventory: [
    { label: 'Tous les véhicules', to: '/vehicules' },
    { label: 'Occasions', to: '/occasions' },
    { label: 'Véhicules 0 km', to: '/zero-km' },
    { label: 'SUV', to: '/suv' },
    { label: 'Citadines', to: '/citadines' },
    { label: 'Utilitaires', to: '/utilitaires' },
    { label: 'Hybrides et électriques', to: '/hybrides-electriques' },
  ],
  legal: [
    { label: 'Mentions légales', to: '/mentions-legales' },
    { label: 'Confidentialité', to: '/confidentialite' },
    { label: 'Cookies', to: '/cookies' },
  ],
}

// À CONFIRMER : adresses des pages Facebook et Instagram du garage
export const socials = [
  { label: 'Facebook', icon: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Instagram', icon: 'Instagram', href: 'https://www.instagram.com/' },
]

export const media = {
  // façade de la concession avec l'enseigne (photo d'annonce, 800 × 600) : hero et page Le garage
  showroom: m('stock/V001520-1.jpg'),
  hero: m('stock/V001520-1.jpg'),
  buyBanner: m('lHsPToRqlThwuyMMWVZ0GV09tcg.jpg'),
  sellBanner: m('aIb3JofA4FLCqaCFeWWMSE8Atx0.jpg'),
  ctaBanner: m('j2tfndbaoQ5sJw8x025LuZyuk4.jpg'),
  // photos d'annonces prises devant la concession
  homeStory: { src: m('stock/V001524-1.jpg'), alt: 'Volkswagen T-Roc devant la concession BM Automobile' },
  aboutStory: { src: m('stock/V001522-1.jpg'), alt: 'Toyota Yaris Cross devant le showroom BM Automobile' },
  notFound: m('NoOHgZ0CoiQpP5vdFyEFV12q1Q.svg'),
  arrowPrev: m('A226aSSgrZp8j4dwSMsUtYDNu4k.svg'),
  arrowNext: m('u7kO7y6SQWfWGhP53b9kDkuLyqI.svg'),
  galleryPrev: m('6tTbkXggWgQCAJ4DO2QEdXXmgM.svg'),
  galleryNext: m('11KSGbIZoRSg4pjdnUoif6MKHI.svg'),
}

export const vehicleTypes = [
  { label: 'SUV', to: '/suv', icon: m('vItzdk3WQxgAnaG7rKkSqYIFQ0.svg') },
  { label: 'Citadine', to: '/citadines', icon: m('CouivDN7KBD9EuVDNN7lB3NU.svg') },
  { label: 'Hybride et électrique', to: '/hybrides-electriques', icon: m('h0mdzfn4yH1aC5bmF0ECvP3rsQ.svg') },
]

// Marques présentes dans le stock, de la plus représentée à la moins représentée
export const brands = Object.entries(
  vehicles.reduce((acc, v) => ({ ...acc, [v.make]: (acc[v.make] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'fr'))
  .map(([name, count]) => ({ name, count }))

// Sélections de l'accueil : « Véhicules à la une » et « Nos conseils »
export const featuredVehicles = [
  'peugeot-3008-hybrid-145-e-dcs6-allure-pack-navigation-1514',
  'cupra-formentor-1-4-e-hybrid-204ch-v-dsg6-1525',
  'toyota-yaris-cross-hybride-130h-2wd-design-1522',
  'volkswagen-polo-1-0-tsi-116-s-s-dsg7-r-line-1487',
]
export const featuredPosts = [
  'essence-hybride-ou-electrique-comment-choisir',
  'bien-lire-l-historique-d-un-vehicule',
  'credit-auto-ou-loa-que-choisir',
]

export const steps = [
  { title: 'Choisissez votre véhicule', text: 'Parcourez notre stock en ligne, occasions et 0 km, et filtrez par marque, prix ou carrosserie. Chaque annonce montre le vrai véhicule, en photos.', image: m('aeucp7FH86HpvzN5rd7gKdbe8.jpg') },
  { title: 'Venez l’essayer', text: 'Appelez-nous pour réserver un essai : le véhicule vous attend au garage, à Roche-la-Molière.', image: m('cDK4KtjafKId0VH1hZbttvV8GTU.jpg') },
  { title: 'Reprise ou paiement', text: 'Nous pouvons estimer votre véhicule actuel et déduire sa valeur du prix. Le prix affiché est le prix payé, sans frais cachés.', image: m('pKIeOa5m9aAbhIG69E6xDFIlA8.jpg') },
  { title: 'Repartez garanti', text: 'Chaque véhicule est vendu avec une garantie, de 6 à 96 mois selon le modèle, et les papiers sont prêts le jour de la livraison.', image: m('AfsLNxCYoKl1Uti50ad50bmJJ4.jpg') },
]

export const teamAvatars = [
  { src: m('f0VyG7epm01Zf9bLGF1jg55Sn4.jpg'), alt: '' },
  { src: m('pTuTcG3cC2VdJMeM4xhRO3VHWYM.jpg'), alt: '' },
  { src: m('qGQqFJ0V7ezdzgnBv6ojEZn1kjI.jpg'), alt: '' },
]

export const benefits = [
  'Neuf & occasion, toutes marques',
  'Une garantie sur chaque véhicule, de 6 à 96 mois selon le modèle',
  'Des prix affichés TTC, sans frais cachés',
]

// Chiffres vérifiables : 20 ans depuis la création en 2006, effectif de 10 à 19 salariés, stock en ligne
export const stats = [
  { value: 20, suffix: ' ans', label: 'D’expérience' },
  { value: 10, suffix: '+', label: 'Professionnels' },
  { value: vehicles.length, label: 'Véhicules en stock' },
  { value: vehicles.filter((v) => v.condition === '0 km').length, label: 'Véhicules 0 km' },
]

// À REMPLACER par de vrais avis clients (Google, Leboncoin) avant la mise en ligne
export const testimonials = [
  {
    rating: '5,0',
    title: 'Reprise rapide et honnête',
    quote: 'Estimation claire de mon ancienne voiture, déduite directement du prix. Tout a été réglé en une matinée, papiers compris.',
    name: 'Client BM Automobile',
    role: 'Exemple d’avis à remplacer',
    avatar: m('SD4ic4f0pVRRzUhtG4RKoRoLEY.jpg'),
    image: m('mNsfvp6yJoMjpRhwfNQMCNhKxYM.jpg'),
  },
  {
    rating: '5,0',
    title: 'De bons conseils, sans pression',
    quote: 'On m’a orienté vers la voiture qui correspondait à mon budget plutôt que vers la plus chère. Je recommande sans hésiter.',
    name: 'Client BM Automobile',
    role: 'Exemple d’avis à remplacer',
    avatar: m('Ur06SPhgC6XYo7mfrxJ11dTCvw0.jpg'),
    image: m('iFWagMWyoGY8krgFiSbAWoAyzY.jpg'),
  },
  {
    rating: '5,0',
    title: 'Un 0 km au bon prix',
    quote: 'Une voiture neuve, garantie, disponible tout de suite et moins chère qu’en concession. Exactement ce que je cherchais.',
    name: 'Client BM Automobile',
    role: 'Exemple d’avis à remplacer',
    avatar: m('kAxffMYuCK4VL0PBQPs8QmbSN8I.jpg'),
    image: m('U8uysC6NgBjnXqJYQC0vBQ2U5Y.jpg'),
  },
  {
    rating: '5,0',
    title: 'Conforme à l’annonce',
    quote: 'La voiture était exactement comme décrite, avec son historique d’entretien. Et l’atelier assure le suivi depuis.',
    name: 'Client BM Automobile',
    role: 'Exemple d’avis à remplacer',
    avatar: m('31FpcLsBYNqj7shVtcMfDKRkKo.jpg'),
    image: m('RRKkCrKRolzX5V4sMo7NrpzPzw.jpg'),
  },
]

// À REMPLACER par les vraies personnes de l'équipe (prénom, poste, photo)
export const team = [
  { name: 'Vente', role: 'Conseil, essais et reprise', photo: m('jAwV3r5ta0cTDhA6lJjBjzPNA4.png') },
  { name: 'Véhicules 0 km', role: 'Recherche et commande', photo: m('uNFrpfVf9vEBA2uLgLLXSUPfsQ.png') },
  { name: 'Atelier', role: 'Entretien et réparation', photo: m('R1sMTr2ZimpypRGRPfZyiqOJuxI.png') },
  { name: 'Accueil', role: 'Rendez-vous et démarches', photo: m('OqWHXEyPKSzWq4qIXSbBLz4.png') },
]

const financing = 'Contactez-nous pour connaître les solutions de financement possibles pour le véhicule qui vous intéresse.' // À CONFIRMER avec le garage

export const homeFaqs = [
  { q: 'Comment trouver le bon véhicule ?', a: 'Utilisez les filtres de la page Véhicules pour trier par marque, prix, carrosserie ou énergie. Chaque annonce présente des photos du véhicule réel. Vous hésitez encore ? Appelez-nous au 04 77 90 51 53, nous vous proposerons quelques modèles adaptés.' },
  { q: 'Qu’est-ce qu’un véhicule 0 km ?', a: 'C’est un véhicule neuf, déjà immatriculé, qui n’a presque pas roulé (quelques kilomètres au compteur). Il est disponible tout de suite, conserve sa garantie et coûte souvent moins cher qu’un neuf commandé en concession.' },
  { q: 'Vos véhicules sont-ils garantis ?', a: 'Oui. Chaque véhicule est vendu avec une garantie dont la durée est indiquée sur l’annonce : de 6 mois pour certaines occasions jusqu’à 96 mois pour certains modèles neufs.' },
  { q: 'Reprenez-vous mon véhicule actuel ?', a: 'Appelez-nous en précisant le modèle, l’année et le kilométrage : nous vous dirons si une reprise est possible et à quelles conditions.' },
  { q: 'Proposez-vous un financement ?', a: financing },
]

export const aboutFaqs = [
  { q: 'Où se trouve le garage ?', a: 'À Roche-la-Molière (42230), à une dizaine de minutes de Saint-Étienne. Appelez-nous au 04 77 90 51 53 avant de venir : le véhicule qui vous intéresse sera prêt.' },
  { q: 'Quelles marques vendez-vous ?', a: 'Toutes les marques, en neuf comme en occasion : Citroën, MG, Dacia, Cupra, Volkswagen, Peugeot, Toyota, Geely, Audi, Iveco et bien d’autres selon les arrivages.' },
  { q: 'Vendez-vous des utilitaires ?', a: 'Oui, nous avons régulièrement des fourgons et des utilitaires, comme le Citroën Berlingo Van ou l’Iveco Daily benne. Consultez la page Utilitaires.' },
  { q: 'Comment fixez-vous vos prix ?', a: 'Selon l’état du véhicule, son historique et sa cote sur le marché. Les prix sont affichés TTC.' },
  { q: 'Faut-il prendre rendez-vous ?', a: 'Ce n’est pas obligatoire, mais un appel permet de préparer le véhicule qui vous intéresse pour un essai dès votre arrivée.' },
]

export const servicesFaqs = [
  { q: 'Quelle garantie sur vos véhicules ?', a: 'La durée de garantie est indiquée sur chaque annonce : de 6 à 96 mois selon le véhicule. Nous vous détaillons ce qui est couvert avant l’achat.' },
  { q: 'Qu’est-ce qu’un véhicule 0 km ?', a: 'Un véhicule neuf déjà immatriculé, avec quelques kilomètres au compteur, disponible immédiatement et vendu avec sa garantie.' },
  { q: 'Entretenez-vous les véhicules achetés ailleurs ?', a: 'Contactez-nous pour toute demande d’entretien ou de réparation : nous vous indiquerons les interventions possibles et les délais.' },
  { q: 'Reprenez-vous mon véhicule actuel ?', a: 'Appelez-nous avec le modèle, l’année et le kilométrage : nous vous dirons si une reprise est possible.' },
  { q: 'Proposez-vous un financement ?', a: financing },
]

export const faqGroups = [
  {
    id: 'achat',
    nav: 'Acheter un véhicule',
    title: '01 · Acheter un véhicule',
    items: [
      { q: 'Comment trouver le bon véhicule ?', a: 'Utilisez les filtres de la page Véhicules pour trier par marque, prix, carrosserie ou énergie. Si vous préférez en parler, appelez-nous au 04 77 90 51 53 : nous vous ferons une présélection.' },
      { q: 'Puis-je réserver un véhicule avant de venir ?', a: 'Appelez-nous : nous vous dirons comment bloquer le véhicule le temps que vous veniez le voir et l’essayer.' },
      { q: 'Faut-il un rendez-vous pour un essai ?', a: 'Ce n’est pas obligatoire. En nous appelant avant de venir, le véhicule sera prêt à l’essai à votre arrivée.' },
      { q: 'Le contrôle technique est-il fait ?', a: 'Conformément à la loi, les véhicules de plus de quatre ans sont vendus avec un contrôle technique de moins de six mois.' },
      { q: 'Les prix sont-ils TTC ?', a: 'Oui, tous nos prix sont affichés TTC, y compris pour les utilitaires. Le malus écologique éventuel est indiqué sur l’annonce.' },
    ],
  },
  {
    id: 'zero-km',
    nav: 'Véhicules 0 km',
    title: '02 · Véhicules 0 km',
    items: [
      { q: 'Qu’est-ce qu’un véhicule 0 km ?', a: 'Un véhicule neuf, déjà immatriculé, avec seulement quelques kilomètres au compteur. Il est disponible immédiatement.' },
      { q: 'Est-il garanti comme un neuf ?', a: 'Oui. La durée de garantie restante est indiquée sur chaque annonce.' },
      { q: 'Pourquoi est-il moins cher ?', a: 'Parce qu’il a déjà été immatriculé une première fois. Pour vous, c’est un véhicule neuf, sans délai de livraison, à un prix plus avantageux.' },
      { q: 'Le malus est-il compris ?', a: 'Le montant du malus écologique est précisé sur l’annonce quand il s’applique. N’hésitez pas à nous demander le coût total d’immatriculation.' },
      { q: 'Pouvez-vous trouver un modèle précis ?', a: 'Dites-nous ce que vous cherchez (marque, modèle, finition, budget) : nous vous dirons si nous pouvons le trouver.' },
    ],
  },
  {
    id: 'garantie',
    nav: 'Garantie',
    title: '03 · Garantie',
    items: [
      { q: 'Vos véhicules sont-ils garantis ?', a: 'Oui. Chaque annonce précise la durée de garantie, de 6 à 96 mois selon le véhicule. S’y ajoutent la garantie légale de conformité et la garantie des vices cachés.' },
      { q: 'Puis-je faire inspecter le véhicule par mon garagiste ?', a: 'Bien sûr, venez avec la personne de votre choix.' },
      { q: 'Que se passe-t-il en cas de problème après l’achat ?', a: 'Appelez-nous : nous regardons avec vous ce que couvre votre garantie et la marche à suivre.' },
      { q: 'Puis-je consulter l’historique du véhicule ?', a: 'Demandez-nous le carnet d’entretien, les factures disponibles et le rapport Histovec.' },
      { q: 'La garantie est-elle transférable ?', a: 'Cela dépend du contrat de garantie du véhicule. Posez-nous la question pour le modèle qui vous intéresse.' },
    ],
  },
  {
    id: 'reprise',
    nav: 'Reprise et financement',
    title: '04 · Reprise et financement',
    items: [
      { q: 'Reprenez-vous mon véhicule ?', a: 'Appelez-nous avec le modèle, l’année et le kilométrage : nous vous dirons si une reprise est possible et à quelles conditions.' },
      { q: 'Proposez-vous un financement ?', a: financing },
      { q: 'Puis-je payer comptant ?', a: 'Bien sûr. Contactez-nous pour les moyens de paiement acceptés.' },
      { q: 'Le prix est-il négociable ?', a: 'Nos prix sont fixés au plus juste. Parlons-en directement au garage.' },
      { q: 'Comment vous contacter ?', a: 'Par téléphone au 04 77 90 51 53, via le formulaire de contact ou en passant au garage.' },
    ],
  },
]

export const aboutImages = {
  keys: { src: m('hHXzjwWZn7xJhu2zwXkDPT3Mw.jpg'), alt: 'Remise des clés d’un véhicule à un client' },
  showroom: { src: media.showroom, alt: 'Façade du garage BM Automobile avec son enseigne' },
  reception: { src: m('YKhmvj19m8tRy0CZ53VdaHkJBJs.jpg'), alt: 'Accueil du showroom' },
  inspection: { src: m('1YKI5tT7GznkcT4IuWrLIE2kw54.jpg'), alt: 'Technicien contrôlant un véhicule capot ouvert' },
  couple: { src: m('0wTkjNPFKq38zGKAPXYCg2EqSrs.jpg'), alt: 'Conseiller présentant un véhicule à un couple' },
}

export const services = [
  {
    badge: 'Occasions',
    title: 'Des occasions toutes marques',
    text: 'Citadines, SUV, compactes ou utilitaires : nous sélectionnons des occasions de toutes marques, avec leur kilométrage, leur année et leur prix TTC affichés clairement. Chaque véhicule est vendu avec une garantie.',
    cta: 'Voir les occasions',
    to: '/occasions',
    image: { src: m('7M8v8CU1uEx8BlL2cDsZM5YnIQ.jpg'), alt: 'Signature d’un bon de commande de véhicule' },
  },
  {
    badge: 'Véhicules 0 km',
    title: 'Du neuf disponible tout de suite',
    text: 'Nos véhicules 0 km sont neufs, déjà immatriculés, avec quelques kilomètres au compteur. Pas de délai de commande, une garantie qui peut aller jusqu’à 96 mois et un prix plus doux qu’un neuf classique.',
    cta: 'Voir les 0 km',
    to: '/zero-km',
    image: { src: m('BQ9C3fAf1kNcH7Y5ShUDWzAurn8.jpg'), alt: 'Clés de voiture posées sur un contrat' },
  },
  {
    badge: 'Garantie',
    title: 'Une garantie sur chaque véhicule',
    text: 'La durée de garantie est indiquée sur chaque annonce, de 6 à 96 mois selon le véhicule. Nous vous expliquons ce qui est couvert avant l’achat, sans petites lignes.',
    cta: 'Poser une question',
    to: '/contact',
    image: { src: m('Rcpgfiz6YeniyPth59rYyzCf9ic.jpg'), alt: 'Conseiller expliquant un contrat à des clients' },
  },
  {
    badge: 'Atelier',
    title: 'Entretien et réparation',
    text: 'BM Automobile est aussi un garage : contactez-nous pour l’entretien ou la réparation de votre véhicule, nous vous indiquerons les interventions possibles et les délais.',
    cta: 'Nous contacter',
    to: '/contact',
    image: { src: m('SLs0LfZj64Dk6n7mAoDKwt3uxo.jpg'), alt: 'Technicien avec une tablette à côté d’un véhicule capot ouvert' },
  },
]

// Pages d'inventaire filtrées
const seo = (what) => `${what} à Roche-la-Molière, près de Saint-Étienne | BM Automobile`
export const categories = {
  occasions: {
    badge: 'occasions disponibles',
    title: 'Voitures d’occasion',
    text: 'Des occasions toutes marques, avec kilométrage, année, garantie et prix TTC affichés sur chaque annonce.',
    seoTitle: seo('Voitures d’occasion'),
    seoDescription: 'Voitures d’occasion toutes marques à Roche-la-Molière (Loire), garanties de 6 à 24 mois. Prix TTC affichés.',
    filter: (v) => v.condition === 'Occasion',
  },
  'zero-km': {
    badge: 'véhicules 0 km disponibles',
    title: 'Véhicules 0 km',
    text: 'Des véhicules neufs déjà immatriculés, disponibles immédiatement, avec leur garantie et un prix plus doux qu’en concession.',
    seoTitle: seo('Véhicules 0 km'),
    seoDescription: 'Véhicules neufs 0 km disponibles immédiatement chez BM Automobile, à Roche-la-Molière. Garantie incluse, prix TTC.',
    filter: (v) => v.condition === '0 km',
  },
  suv: {
    badge: 'SUV disponibles',
    title: 'SUV',
    text: 'Des SUV en occasion ou 0 km, essence, diesel, hybrides ou électriques. Prix TTC et garantie sur chaque annonce.',
    seoTitle: seo('SUV'),
    seoDescription: 'SUV d’occasion et 0 km à vendre à Roche-la-Molière, près de Saint-Étienne. Garantie et prix TTC sur chaque annonce.',
    filter: (v) => v.body === 'SUV',
  },
  citadines: {
    badge: 'citadines disponibles',
    title: 'Citadines',
    text: 'Des citadines faciles à vivre et économiques, en occasion ou 0 km, prêtes à l’essai.',
    seoTitle: seo('Citadines'),
    seoDescription: 'Citadines d’occasion et 0 km à vendre à Roche-la-Molière, près de Saint-Étienne. Garantie et prix TTC.',
    filter: (v) => v.body === 'Citadine',
  },
  utilitaires: {
    badge: 'utilitaires disponibles',
    title: 'Utilitaires',
    text: 'Fourgons et utilitaires pour les professionnels et les particuliers, prix affichés TTC.',
    seoTitle: seo('Utilitaires'),
    seoDescription: 'Utilitaires et fourgons à vendre à Roche-la-Molière (Loire) : Citroën Berlingo, Iveco Daily. Prix TTC, garantie incluse.',
    filter: (v) => v.body === 'Utilitaire',
  },
  'hybrides-electriques': {
    badge: 'hybrides et électriques disponibles',
    title: 'Hybrides et électriques',
    text: 'Des véhicules hybrides, hybrides rechargeables et 100 % électriques, en occasion ou 0 km.',
    seoTitle: seo('Voitures hybrides et électriques'),
    seoDescription: 'Voitures hybrides, hybrides rechargeables et électriques à Roche-la-Molière. Occasion ou 0 km, garantie incluse.',
    filter: (v) => v.fuel !== 'Essence' && v.fuel !== 'Diesel',
  },
}

export const legalPages = {
  'mentions-legales': {
    badge: 'Informations légales',
    title: 'Mentions légales',
    updated: 'Dernière mise à jour : novembre 2026',
    seoTitle: 'Mentions légales | BM Automobile',
    seoDescription: 'Éditeur, hébergeur et conditions d’utilisation du site de BM Automobile, garage à Roche-la-Molière.',
    sections: [
      ['01 · Éditeur du site', `Le site est édité par ${company.legalName}, ${company.legalForm} exerçant sous l’enseigne ${company.name}. Siège social : ${company.headOffice}. ${company.rcs}. SIRET de l’établissement : ${company.siret}. TVA intracommunautaire : ${company.vat}. Capital social : à compléter.`],
      ['02 · Directeur de la publication', 'Le directeur de la publication est le gérant de la société (nom à compléter).'],
      ['03 · Hébergement', 'Hébergeur du site : à compléter (raison sociale, adresse et téléphone de l’hébergeur).'],
      ['04 · Annonces de véhicules', 'Les annonces sont publiées à titre informatif et ne constituent pas une offre contractuelle. La disponibilité évolue rapidement : un véhicule présenté peut déjà être réservé ou vendu. Seul le bon de commande signé engage les parties.'],
      ['05 · Prix', 'Les prix sont indiqués en euros toutes taxes comprises. Les frais d’immatriculation et les éventuelles options sont présentés séparément avant tout engagement. En cas d’erreur manifeste de prix, nous vous en informons avant de poursuivre.'],
      ['06 · Financement', 'Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager. Les simulations affichées sur le site sont indicatives et ne constituent pas une offre de crédit ; toute offre reste soumise à l’acceptation du dossier par l’organisme prêteur.'],
      ['07 · Propriété intellectuelle', `Les textes, photographies, la mise en page et les éléments graphiques de ce site sont la propriété de ${company.legalName} ou utilisés avec autorisation. Toute reproduction sans accord écrit est interdite.`],
      ['08 · Responsabilité', 'Nous veillons à l’exactitude des informations publiées, sans pouvoir garantir l’absence d’erreur ou d’interruption du site. Le site peut contenir des liens vers des sites tiers, dont nous ne maîtrisons pas le contenu.'],
      ['09 · Médiation de la consommation', 'Conformément au Code de la consommation, vous pouvez recourir gratuitement à un médiateur de la consommation en cas de litige. Coordonnées du médiateur : à compléter.'],
      ['10 · Contact', `Pour toute question : ${contact.email} ou ${contact.address}.`],
    ],
  },
  confidentialite: {
    badge: 'Protection de vos données',
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : novembre 2026',
    seoTitle: 'Politique de confidentialité | BM Automobile',
    seoDescription: 'Quelles données personnelles nous collectons, pourquoi, combien de temps nous les conservons et quels sont vos droits.',
    sections: [
      ['01 · Responsable du traitement', `Le responsable du traitement des données collectées sur ce site est ${company.legalName} (${company.name}), ${company.headOffice}.`],
      ['02 · Données collectées', 'Nous collectons les informations que vous nous transmettez via les formulaires (nom, e-mail, téléphone, message) ainsi que des données techniques de navigation (type de navigateur, pages consultées).'],
      ['03 · Finalités', 'Ces données servent à répondre à vos demandes, à préparer un essai, une reprise ou une étude de financement, et à améliorer le site. Elles ne sont ni vendues ni louées.'],
      ['04 · Base légale', 'Les traitements reposent sur votre consentement, sur les mesures précontractuelles prises à votre demande et, pour les ventes conclues, sur nos obligations légales.'],
      ['05 · Destinataires', 'Vos données sont destinées à notre équipe. Elles peuvent être transmises à un organisme de financement uniquement à votre demande, pour l’étude de votre dossier.'],
      ['06 · Durée de conservation', 'Les demandes de contact sont conservées trois ans au plus après le dernier échange. Les données liées à une vente sont conservées pendant les durées imposées par la loi.'],
      ['07 · Sécurité', 'Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre tout accès non autorisé, perte ou altération.'],
      ['08 · Vos droits', 'Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité de vos données. Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).'],
      ['09 · Exercer vos droits', `Écrivez-nous à ${contact.email} ou à l’adresse ${contact.address}. Une pièce justificative d’identité pourra vous être demandée.`],
      ['10 · Modifications', 'Cette politique peut évoluer. La version en vigueur est toujours disponible sur cette page avec sa date de mise à jour.'],
    ],
  },
  cookies: {
    badge: 'Ce que nous enregistrons',
    title: 'Politique cookies',
    updated: 'Dernière mise à jour : novembre 2026',
    seoTitle: 'Politique cookies | BM Automobile',
    seoDescription: 'Les cookies utilisés sur ce site, leur rôle et comment les gérer dans votre navigateur.',
    sections: [
      ['01 · Qu’est-ce qu’un cookie ?', 'Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d’un site. Il permet de mémoriser des informations d’une page à l’autre ou d’une visite à l’autre.'],
      ['02 · Cookies nécessaires', 'Ils assurent le bon fonctionnement du site (navigation, formulaires, sécurité) et ne peuvent pas être désactivés. Ils ne vous identifient pas personnellement.'],
      ['03 · Mesure d’audience', 'Ces cookies nous permettent de compter les visites et de savoir quelles annonces sont les plus consultées. Ils ne sont déposés qu’avec votre accord.'],
      ['04 · Services tiers', 'La carte Google Maps intégrée peut déposer ses propres cookies. Google publie sa propre politique expliquant ce qu’il collecte.'],
      ['05 · Gérer vos choix', 'Vous pouvez accepter ou refuser les cookies non essentiels et modifier votre choix à tout moment dans les réglages de votre navigateur. Bloquer tous les cookies peut empêcher certaines fonctions du site.'],
      ['06 · Contact', `Pour toute question sur les cookies : ${contact.email}.`],
    ],
  },
}
