# Okorie-Chinedu-Sunday

Repository for technical assessment of Okorie Chinedu Sunday

# Introduction

This repository contains front-end and back-end code for a live cypto to fiat currency exchange application.

# Folder Structure

From the root of the repository folder are the following folders:

1. **[backend](https://github.com/redacreltdcom/Okorie-Chinedu-Sunday/tree/main/backend)**
2. **[frontend](https://github.com/redacreltdcom/Okorie-Chinedu-Sunday/tree/main/frontend)**

## Backend Folder Structure

1. **controllers** : this contains the business logic for the application.
2. **crons** : this contains the logics ran at intervals of **MINUTES** as specified **[here](https://github.com/redacreltdcom/Okorie-Chinedu-Sunday/blob/main/backend/sample.env)**.
3. **database** : this contains folder and files related to database. The database used for this application is mongodb.
4. **routes** : this contains files that handles all the server routes.
5. **utils** : this contains utility logics like validation etc.

## How to set up the backend application

1. Clone this repository using the command `git clone https://github.com/redacreltdcom/Okorie-Chinedu-Sunday.git`
2. Change directory to the backend folder using the command `cd backend`
3. Install all dependencies using the command `npm install`
4. Set the environment variables as found **[here](https://github.com/redacreltdcom/Okorie-Chinedu-Sunday/blob/main/backend/sample.env)** **Note** you have to generate the **COINAPI_KEY** **[here](https://docs.coinapi.io/#limits-2)** by entering your email address in the email address field provided in the site
5. Run the application using the command `node app.js`

## Frontend Folder Structure

1. **public** : this contains the startic and some asset files used for the frontend development
2. **src** : this contains contain the react codes and component used to build the frontend application.

## How to set up the frontend application

1. Clone this repository using the command `git clone https://github.com/redacreltdcom/Okorie-Chinedu-Sunday.git`
2. Change directory to the frontend folder using the command `cd frontend`
3. Install all dependencies using the command `npm install`
4. Set the environment variables as found **[here](https://github.com/redacreltdcom/Okorie-Chinedu-Sunday/blob/main/frontend/sample.env)**
5. Run the application using the command `npm start`

# Other informations

- Both the frontend and the backend application are Dockerized. At the root folder of the both applications is a **Dockerfile** which contains the docker directives to create the Docker container for the applications.
- Both the frontend and the backend application use the latest version of **node** **_18.7.0_** and **npm** **_8.15.0_**

- The frontend application uses the latest version of React.

- The application working demo video can be found and downloaded **[here](https://github.com/redacreltdcom/Okorie-Chinedu-Sunday/blob/main/demo.mp4)**
