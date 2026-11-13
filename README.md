# SOL MESURES · Laboratoire — lanceur

Petite page qui ouvre l'application Apps Script du laboratoire (essais, PV, dossiers) **en plein écran, sans barre d'adresse et sans le bandeau Google** « Cette application a été créée par un utilisateur de Google Apps Script ». Elle s'installe comme une application (icône sur le bureau, l'ordinateur ou la tablette).

Ce dépôt est **public** (obligatoire pour GitHub Pages gratuit). Il ne contient ni le code de l'application ni aucune donnée : seulement cette page, le logo et l'adresse de l'application, qui reste protégée par les codes de connexion.

## Mise en ligne (une fois)

1. Sur GitHub : **New repository**, nom `laboratoire`, **Public**, puis **Create repository**.
2. **uploading an existing file** : glisser-déposer tout le contenu de ce dossier (`index.html`, `application.js`, `manifest.webmanifest`, `sw.js`, `README.md` et le dossier `icones`), puis **Commit changes**.
3. **Settings > Pages** : Source **Deploy from a branch**, Branch **main** / **(root)**, **Save**. Après 1 à 2 minutes, l'adresse s'affiche : `https://<compte>.github.io/laboratoire/`.
4. Dans `application.js` (crayon sur GitHub), coller l'adresse **/exec** de l'application entre les apostrophes de `url: ''`, puis **Commit changes**.

## Installer l'icône

- **Ordinateur (Chrome ou Edge)** : ouvrir l'adresse GitHub Pages, puis l'icône « Installer » à droite de la barre d'adresse (ou menu ⋮ > Caster, enregistrer et partager > Installer la page en tant qu'application). Supprimer l'ancien raccourci du bureau.
- **Tablette / téléphone Android (Chrome)** : menu ⋮ > **Ajouter à l'écran d'accueil** > Installer.

## Mises à jour

- Nouvelle version de l'application dans Apps Script (**Gérer les déploiements > Modifier > Nouvelle version**) : rien à changer ici, l'adresse /exec reste la même.
- Nouveau déploiement (nouvelle adresse) : modifier seulement `application.js`.
- Modification de `index.html` ou des icônes : changer aussi `VERSION` dans `sw.js`, puis fermer et rouvrir l'application deux fois.
