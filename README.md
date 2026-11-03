# Site BM Automobile (Roche-la-Molière)

Site vitrine et stock de BM Automobile, « neuf & occasion toutes marques ». Il est construit sur le template Boxcars (licence achetée), dont la version d'origine est conservée dans `../boxcars-template`.

- **Stack** : React 18, Vite 6, Tailwind v4, React Router 7, framer-motion 11
- **Langue** : français, prix en euros TTC, routes en français

## Démarrer
```bash
cd 16
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```
Hébergement : toutes les routes doivent renvoyer `index.html` (`vercel.json` et `public/_redirects` sont fournis).

## Pages (`src/pages/`, routes dans `src/main.jsx`)
| Route | Fichier | Contenu |
|---|---|---|
| `/` | `Home.jsx` | hero sur la façade, marques du stock, véhicules à la une, étapes, chiffres, avis, FAQ, conseils |
| `/vehicules` | `Vehicles.jsx` | tout le stock, 6 filtres (état, marque, carrosserie, énergie, boîte, prix) liés à l'URL |
| `/vehicules/:slug` | `VehicleDetail.jsx` | galerie, caractéristiques, garantie, équipements, malus, simulateur, carte |
| `/occasions`, `/zero-km`, `/suv`, `/citadines`, `/utilitaires`, `/hybrides-electriques` | `Category.jsx` | stock filtré (règles dans `categories`, `src/data/site.js`) |
| `/services` | `Services.jsx` | occasions, 0 km, garantie, atelier |
| `/a-propos` | `About.jsx` | le garage, mosaïque photos, étapes, chiffres, FAQ |
| `/blog`, `/blog/:slug` | `Blog.jsx`, `BlogPost.jsx` | 12 articles conseils |
| `/contact` | `Contact.jsx` | carte, formulaire, coordonnées |
| `/faq` | `Faq.jsx` | 20 questions en 4 groupes |
| `/mentions-legales`, `/confidentialite`, `/cookies` | `Legal.jsx` | pages légales |

## Données (`src/data/`)
- `site.js` : société et coordonnées (`company`, `contact`), menus, textes, FAQ, services, catégories, pages légales.
- `vehicles.js` : le stock, une entrée par véhicule. Pour le mettre à jour, modifier ce fichier.
- `posts.js` : les articles.

## Sources des informations
- **Coordonnées** (site existant du garage) : BM AUTO & Associés, ZI Charles Chana, 42230 Roche-la-Molière, 04 77 90 51 53.
- **Société** (annuaire des entreprises) : BM AUTO ET ASSOCIES, SARL, SIREN 491 523 049, RCS Saint-Étienne, siège 4 rue des Piqueurs de Fond, créée en 2006.
- **Stock** : 33 véhicules repris le 03/11/2026 des annonces easy-occasions.fr (prix TTC, km, année, énergie, garantie, équipements, malus, photos 800 × 600 dans `public/media/stock/`). La Citroën C3 V001509, sans photo, n'est pas importée. La boîte de vitesses est laissée vide quand l'annonce ne la précise pas.
- **Financement** : les annonces n'en parlent pas. Le site dit seulement « contactez-nous pour connaître les solutions de financement possibles », et le simulateur reste une estimation.

## Charte
- Rouge `#D71920` (`accent`), anthracite `#14161B` (`navy`) : tokens dans `src/index.css`.
- Logo redessiné d'après l'enseigne (`Logo` dans `src/components/icons.jsx`, police Oswald), favicon assorti.
- Photos de la concession (hero, Le garage, blocs « Pourquoi BM Automobile ») tirées des annonces.

## À compléter avant mise en ligne (« À CONFIRMER » / « À REMPLACER » dans `src/data/site.js`)
- E-mail, horaires, liens Facebook / Instagram.
- Financement, reprise et atelier : à confirmer avec le garage.
- **Avis clients** : les 4 avis sont des exemples, à remplacer par de vrais avis (les faux avis sont interdits).
- **Équipe** : photos de démo et rôles génériques, à remplacer par l'équipe réelle.
- Mentions légales : capital social, directeur de publication, hébergeur, médiateur de la consommation.
- Logo officiel en vectoriel, et une photo de façade en haute définition pour le hero.
- Formulaires (contact, newsletter) : ils affichent seulement un message de confirmation, à brancher sur un service d'envoi.
- Photos de stock restantes (étapes, bannières, mosaïque, articles) : à remplacer par des photos du garage si possible.
