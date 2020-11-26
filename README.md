# Fruit sort using Deep Learning - Front-End - REST API

Projet de classification d'image de fruit : 
- Pas assez mure
- Bon
- Trop mure

Ce projet a été réalisé dans le cadre d'un workshop à l'EPSI Montpellier : l'IA au service de l'industrie

Il s'agit de la partie Front-End qui permet d'envoyer des images afin d'effectuer des prédictions en utilisant notre modèle entrainé.

Projet sur l'entrainement du modèle : https://github.com/joconte/fruit-classifier

Projet sur le Back-End : https://github.com/joconte/ai-fruit-api

# Outils utilisés
- Angular 11.0.2
- Chart.js & Ng2-charts
- Heroku

# Groupe de travail
- JACQUES Nils
- SEVRAIN Florian
- LASPOUGEAS Thomas
- CONTE Jonathan

# Site web
API accessible ici : https://fruit-recognizer-front-angular.herokuapp.com/

Routes : 
- POST - /upload - param : file
- GET - /classify-url - query param : url


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
