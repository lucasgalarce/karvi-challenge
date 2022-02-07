# karvi-challenge

This project consists of get cars data

# Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

## Prerequisites

[node](https://nodejs.org/es/)

## Installation 🔧

Clone the repo

```
git clone https://github.com/lucasgalarce/karvi-challenge.git
```

## Aditional you need add .env file with:
```
API_KEY=826b5e6c-49cc-4362-a0e3-658dc20fdbf2
```

Install NPM packages

```
npm install
npm build
npm start
```

## Deploy 📦
This page is being deployed in [aws](https://karvi-challenge.herokuapp.com/api/cars?site=br)

## Builded with 🛠️
* Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine.
* Typescript

## Endpoints

/api/cars: need site param(br o ar). Example: https://karvi-challenge.herokuapp.com/api/cars?site=br

/api/cars/get: need site(br or ar) and ids param(separated by comma). Example: https://karvi-challenge.herokuapp.com/api/cars/getbyid?site=br&ids=411032,411031