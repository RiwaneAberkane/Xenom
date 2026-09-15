# XENOM

> **Beyond Motion.**

XENOM est une expérience web automobile conceptuelle imaginée comme un site de présentation premium pour une hypercar fictive.

Le projet a été conçu avant tout comme une démonstration de **direction artistique, d'intégration front-end, de responsive design et d'animations web immersives**.

L'objectif n'est pas de reproduire le site d'une marque existante, mais de construire une identité automobile originale avec une expérience visuelle inspirée des codes du luxe, de la performance et du design contemporain.

---

## Sommaire

- [Présentation](#présentation)
- [Objectifs](#objectifs)
- [Direction artistique](#direction-artistique)
- [Expérience utilisateur](#expérience-utilisateur)
- [Structure du site](#structure-du-site)
- [Animations](#animations)
- [Navigation](#navigation)
- [Responsive design](#responsive-design)
- [Stack technique](#stack-technique)
- [Architecture du projet](#architecture-du-projet)
- [Installation](#installation)
- [Développement](#développement)
- [Build de production](#build-de-production)
- [Tests recommandés](#tests-recommandés)
- [Accessibilité](#accessibilité)
- [Performances](#performances)
- [Personnalisation](#personnalisation)
- [Statut du projet](#statut-du-projet)

---

# Présentation

XENOM présente une hypercar fictive à travers une expérience entièrement orientée autour de trois notions :

**Performance. Design. Experience.**

Le site combine de grandes compositions typographiques, des visuels automobiles plein écran, des interfaces minimalistes et plusieurs animations liées au scroll.

Le projet adopte volontairement une approche très éditoriale : le visiteur ne consulte pas simplement une succession de sections, il découvre progressivement l'univers de la voiture.

---

# Objectifs

Les principaux objectifs du projet sont :

- créer une identité automobile fictive cohérente ;
- réaliser un site visuellement premium ;
- développer une interface responsive desktop/mobile ;
- expérimenter des animations avancées liées au scroll ;
- utiliser GSAP sans compromettre la lisibilité du site ;
- travailler les transitions entre les différentes sections ;
- construire une navigation compatible avec les sections animées ;
- proposer une expérience différente d'un site vitrine classique ;
- démontrer des compétences front-end dans un projet portfolio complet.

---

# Direction artistique

## Univers

L'identité XENOM repose sur une esthétique :

- sombre ;
- minimaliste ;
- futuriste ;
- automobile ;
- technique ;
- cinématographique ;
- premium.

Le site utilise principalement un environnement noir accompagné de blancs légèrement cassés et d'accents rouges.

Le rouge est utilisé avec parcimonie pour représenter l'énergie, la performance et l'identité lumineuse de la voiture.

---

## Principes graphiques

La direction artistique repose notamment sur :

- de grands espaces négatifs ;
- une typographie très espacée ;
- des titres monumentaux ;
- des textes techniques très petits ;
- des lignes et séparateurs fins ;
- des compositions asymétriques ;
- des images automobiles immersives ;
- des détails rouges ponctuels ;
- des animations lentes et contrôlées.

L'interface évite volontairement les composants UI classiques trop visibles afin de conserver une sensation éditoriale.

---

# Expérience utilisateur

XENOM a été pensé comme une expérience continue.

Le visiteur commence avec une présentation très cinématographique de la voiture puis descend progressivement dans les différents aspects du concept.

Le rythme du site alterne entre :

- sections très visuelles ;
- séquences animées ;
- contenu technique ;
- mouvements horizontaux ;
- zooms ;
- compositions typographiques.

L'objectif est d'éviter une succession monotone de blocs identiques.

---

# Structure du site

Le site est organisé autour de plusieurs grands blocs.

## 01 — Hero

Introduction principale à l'univers XENOM.

Cette section présente immédiatement :

- la marque ;
- la voiture ;
- l'identité visuelle ;
- la signature du projet.

Elle constitue le premier contact avec l'expérience.

---

## 02 — Performance

La section Performance présente la dimension mécanique et dynamique de XENOM.

Elle utilise une mise en scène sombre et technique avec des informations liées à la puissance, aux sensations et à la philosophie de performance du véhicule.

Les animations accompagnent la progression du scroll afin de donner davantage de profondeur à la présentation.

---

## 03 — Design

La section Design présente le travail autour de la silhouette et des éléments visuels de la voiture.

Elle met davantage l'accent sur :

- les formes ;
- les surfaces ;
- les détails ;
- la lumière ;
- la relation entre esthétique et fonction.

La composition diffère volontairement de Performance afin d'éviter une répétition graphique entre les sections.

---

## 04 — Experience

Experience est l'une des sections les plus immersives du projet.

Elle utilise une animation directement liée au scroll.

Le visuel évolue progressivement lorsque l'utilisateur descend dans la page afin de créer une sensation de profondeur.

L'objectif est notamment de produire un effet de **dézoom progressif sans déplacement latéral excessif**.

Cette section possède une distance de scroll volontairement importante : cela fait partie de l'expérience et doit être pris en compte lors de la navigation vers les sections suivantes.

---

## 05 — The Machine

The Machine présente XENOM ONE à travers plusieurs chapitres.

### Chapter 01 — Exterior

**SCULPTED BY AIR.**

Présentation du travail sur la carrosserie et les surfaces.

### Chapter 02 — Aerodynamics

**AIR BECOMES STRUCTURE.**

Présentation de la relation entre aérodynamisme, pression, carbone et architecture du véhicule.

### Chapter 03 — Signature

**SEEN AFTER DARK.**

Présentation de l'identité lumineuse rouge caractéristique de XENOM.

---

## Scroll horizontal

Sur desktop, The Machine utilise une navigation horizontale pilotée par le scroll vertical.

Le conteneur principal est épinglé temporairement grâce à GSAP ScrollTrigger pendant que les différents panneaux se déplacent horizontalement.

Sur mobile, ce comportement est volontairement supprimé au profit d'une lecture verticale plus naturelle.

---

## 06 — Finale

La dernière partie clôt l'expérience XENOM.

Elle reprend l'identité graphique du projet autour du message :

> **NOT MADE TO FOLLOW.**

puis :

> **XENOM.**

Cette section agit comme une conclusion visuelle avant le footer.

---

## 07 — Footer

Le footer reprend les principales destinations du site :

- Performance
- Design
- Experience
- The Machine

Il permet également de revenir en haut de la page.

---

# Animations

Les animations du projet sont principalement réalisées avec :

**GSAP**

et :

**GSAP ScrollTrigger**

---

## ScrollTrigger

ScrollTrigger est utilisé pour :

- déclencher des animations à l'apparition des sections ;
- synchroniser certaines animations avec le scroll ;
- épingler temporairement certaines zones ;
- créer le scroll horizontal de The Machine ;
- gérer les animations spécifiques desktop/mobile ;
- créer des effets de zoom et de profondeur.

Exemple de principe :

```js
gsap.to(element, {
  scrollTrigger: {
    trigger: section,
    start: 'top top',
    end: '+=200%',
    scrub: true,
    pin: true,
  },
});
```

---

## `gsap.matchMedia()`

Le projet utilise également :

```js
gsap.matchMedia();
```

afin de séparer les comportements desktop et mobile.

Exemple :

```js
mm.add('(min-width: 801px)', () => {
  // animations desktop
});

mm.add('(max-width: 800px)', () => {
  // animations mobile
});
```

Cela évite de forcer les animations desktop complexes sur les petits écrans.

---

# Navigation

La navigation principale contient :

```text
PERFORMANCE
DESIGN
EXPERIENCE
THE MACHINE
```

Les sections utilisent les ancres suivantes :

```text
#hero
#performance
#design
#experience
#machine
#finale
```

Il est important de conserver ces IDs si la structure du site est modifiée.

---

## Header fixe

La navigation reste disponible pendant le scroll.

Le Header utilise :

```css
position: fixed;
```

afin de rester accessible sur l'ensemble de l'expérience.

---

## React Portal

Certaines sections utilisant GSAP créent des contextes graphiques particuliers à cause notamment de :

- `transform` ;
- `pin` ;
- `pin-spacer` ;
- `z-index`.

Afin d'empêcher ces sections de passer visuellement devant la navigation, le Header est rendu directement dans :

```js
document.body
```

avec :

```js
createPortal()
```

Le principe architectural est donc :

```text
BODY
│
├── #root
│   ├── Hero
│   ├── Performance
│   ├── Design
│   ├── Experience
│   ├── Machine
│   └── Finale
│
├── Header
│
└── Mobile Menu
```

Cette séparation rend la navigation indépendante des animations GSAP du contenu.

---

# Navigation mobile

À partir de `800px`, la navigation desktop est remplacée par un burger.

Le menu mobile propose :

```text
01 / PERFORMANCE
02 / DESIGN
03 / EXPERIENCE
04 / THE MACHINE
```

Le menu :

- couvre tout le viewport ;
- possède sa propre identité XENOM ;
- bloque le scroll de la page lorsqu'il est ouvert ;
- peut être fermé avec le bouton X ;
- peut être fermé avec la touche `Escape` ;
- se ferme automatiquement après sélection d'une section.

---

# Responsive design

Le projet a été développé pour fonctionner aussi bien sur desktop que sur mobile.

Breakpoint principal :

```css
@media (max-width: 800px)
```

---

## Desktop

Sur desktop, le site exploite davantage :

- les grands visuels ;
- les compositions horizontales ;
- les animations GSAP ;
- les sections épinglées ;
- les mouvements liés au scroll ;
- les grands espaces.

---

## Mobile

Sur mobile, certaines interactions sont volontairement simplifiées.

L'objectif n'est pas de reproduire exactement le comportement desktop, mais de préserver :

- la direction artistique ;
- la lisibilité ;
- les performances ;
- la fluidité ;
- la hiérarchie visuelle.

Certaines animations horizontales deviennent donc verticales.

---

# Stack technique

## Front-end

- React
- Vite
- JavaScript
- JSX
- CSS

## Animations

- GSAP
- GSAP ScrollTrigger

## Navigation / DOM

- React Portal
- Ancres HTML

## Versioning

- Git

---

# Architecture du projet

L'organisation exacte peut évoluer, mais le projet suit globalement cette structure :

```text
xenom/
│
├── public/
│   └── xenom-icon.png
│
├── src/
│   │
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Performance.jsx
│   │   ├── Design.jsx
│   │   ├── Experience.jsx
│   │   ├── Machine.jsx
│   │   └── Finale.jsx
│   │
│   ├── styles/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

> La structure réelle du dossier doit rester la référence si de nouveaux composants sont ajoutés par la suite.

---

# Assets

Les images utilisées par les différentes sections sont stockées principalement dans :

```text
src/assets/images/
```

Par exemple, The Machine utilise plusieurs visuels correspondant à ses chapitres :

```text
xenom-machine-exterior.png
xenom-machine-aero.png
xenom-machine-signature.png
```

Les images destinées à être accessibles directement depuis la racine publique sont placées dans :

```text
public/
```

---

# Favicon

Le favicon XENOM est placé dans :

```text
public/xenom-icon.png
```

et déclaré dans :

```text
index.html
```

avec :

```html
<link
  rel="icon"
  type="image/png"
  href="/xenom-icon.png"
/>
```

---

# Installation

## Prérequis

Il faut avoir installé :

- Node.js
- npm
- Git

Vérifier Node :

```bash
node --version
```

Vérifier npm :

```bash
npm --version
```

---

## Cloner le projet

```bash
git clone <URL_DU_REPOSITORY>
```

Puis :

```bash
cd xenom
```

---

## Installer les dépendances

```bash
npm install
```

---

# Développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Vite fournit ensuite une adresse locale, généralement :

```text
http://localhost:5173
```

---

# Build de production

Avant tout déploiement, générer le build :

```bash
npm run build
```

Vite crée alors :

```text
dist/
```

Ce dossier contient la version optimisée du site destinée à la production.

---

## Prévisualiser le build

Après le build :

```bash
npm run preview
```

Cela permet de tester localement la version de production.

---

# Tests recommandés

Avant chaque déploiement, vérifier au minimum les éléments suivants.

## Desktop

- Hero correctement affiché
- Header visible pendant tout le scroll
- liens de navigation fonctionnels
- Performance fonctionnel
- Design fonctionnel
- Experience fluide
- The Machine horizontal fonctionnel
- Finale fonctionnelle
- Footer fonctionnel
- retour en haut fonctionnel

---

## Mobile

Tester idéalement autour de :

```text
390 × 844
```

Vérifier :

- Hero
- cadrage des images
- textes
- espacements
- burger
- menu plein écran
- blocage du scroll derrière le menu
- fermeture du menu
- navigation entre sections
- Performance
- Design
- Experience
- The Machine
- Finale
- Footer

---

## Navigation

Tester les liens :

```text
Performance → #performance
Design → #design
Experience → #experience
The Machine → #machine
```

Tester également le logo :

```text
XENOM → #hero
```

---

## Console

Ouvrir les DevTools du navigateur et vérifier qu'aucune erreur JavaScript importante n'est présente.

---

## Build

Toujours terminer la vérification avec :

```bash
npm run build
```

Le projet ne doit pas être considéré comme prêt au déploiement tant que le build ne passe pas correctement.

---

# Accessibilité

Plusieurs éléments ont été intégrés afin de conserver une navigation correcte :

- `aria-label` sur les boutons importants ;
- navigation déclarée avec `<nav>` ;
- boutons utilisant de vrais éléments `<button>` ;
- liens utilisant de vrais éléments `<a>` ;
- textes alternatifs sur les images ;
- support de la touche `Escape` pour le menu mobile ;
- utilisation de `aria-expanded` pour le burger ;
- utilisation de `aria-hidden` pour le menu mobile.

---

## Reduced Motion

Certaines transitions CSS prennent en compte :

```css
@media (prefers-reduced-motion: reduce)
```

afin de limiter les mouvements pour les utilisateurs ayant demandé une réduction des animations dans leur système.

---

# Performances

XENOM utilise plusieurs images haute définition et des animations complexes.

Il est donc important de surveiller :

- le poids des images ;
- la résolution réellement nécessaire ;
- le nombre d'animations simultanées ;
- les transformations GSAP ;
- les ScrollTriggers actifs ;
- les performances mobiles.

---

## Images

Éviter d'utiliser une image beaucoup plus grande que sa taille d'affichage réelle.

Pour les futurs assets, privilégier lorsque possible :

- WebP ;
- AVIF ;
- compression adaptée ;
- dimensions raisonnables.

Les images très grandes peuvent provoquer une impression de pixellisation ou de manque de netteté si leur source initiale n'est pas suffisamment définie.

---

# GSAP — bonnes pratiques du projet

Lorsqu'une nouvelle animation est ajoutée, utiliser de préférence :

```js
const ctx = gsap.context(() => {
  // animations
}, section);
```

Puis nettoyer :

```js
return () => ctx.revert();
```

Pour les comportements responsive :

```js
const mm = gsap.matchMedia();
```

et :

```js
return () => mm.revert();
```

Cela évite de conserver des animations ou ScrollTriggers inutiles après démontage du composant.

---

# Attention aux sections `pin`

Les sections utilisant :

```js
pin: true
```

modifient temporairement le comportement normal du document.

ScrollTrigger peut notamment créer des éléments :

```text
pin-spacer
```

Il faut donc être prudent lors de l'ajout :

- d'ancres ;
- de navigations automatiques ;
- de `position: fixed` ;
- de nouveaux `z-index` ;
- de transformations CSS sur les parents.

La navigation XENOM a précisément été isolée avec React Portal pour éviter les conflits avec ces sections.

---

# Personnalisation

## Couleurs

Les couleurs principales du projet sont centralisées autant que possible dans les variables CSS.

Exemple :

```css
:root {
  --color-white: #f4f4f2;
  --color-red: #b00014;
}
```

Toujours privilégier une variable existante avant d'introduire une nouvelle couleur directement dans un composant.

---

## Ajouter une nouvelle section

Pour ajouter une section :

```jsx
export default function NewSection() {
  return (
    <section
      className="new-section"
      id="new-section"
    >
      {/* Content */}
    </section>
  );
}
```

Si elle doit être accessible depuis la navigation, ajouter ensuite son entrée dans les données de navigation du Header.

---

# Commandes utiles

Installation :

```bash
npm install
```

Développement :

```bash
npm run dev
```

Build :

```bash
npm run build
```

Preview :

```bash
npm run preview
```

Git status :

```bash
git status
```

Ajouter les modifications :

```bash
git add .
```

Créer un commit :

```bash
git commit -m "message"
```

---

# Git

Le projet est versionné avec Git.

Une bonne pratique consiste à créer un commit après validation complète d'un bloc fonctionnel.

Exemples :

```bash
git commit -m "feat: add performance section"
```

```bash
git commit -m "feat: add responsive navigation"
```

```bash
git commit -m "fix: improve experience scroll animation"
```

```bash
git commit -m "feat: add Xenom favicon and site metadata"
```

---

# Statut du projet

XENOM comprend actuellement :

- [x] identité visuelle
- [x] Hero
- [x] Performance
- [x] Design
- [x] Experience
- [x] The Machine
- [x] Finale
- [x] Footer
- [x] responsive desktop/mobile
- [x] navigation fixe
- [x] burger mobile
- [x] animations GSAP
- [x] ScrollTrigger
- [x] favicon XENOM
- [x] métadonnées principales
- [x] documentation

---

# Philosophie XENOM

XENOM n'a pas été conçu comme une simple page présentant une voiture.

Chaque section cherche à traduire une sensation différente :

**la puissance, la matière, la vitesse, la lumière et le mouvement.**

> **NOT MADE TO FOLLOW.**

> **XENOM — BEYOND MOTION.**

---

## Disclaimer

XENOM est un projet conceptuel réalisé à des fins de démonstration et de portfolio.

La marque, le véhicule et l'univers présentés dans cette expérience sont fictifs.