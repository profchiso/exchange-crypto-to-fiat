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
5. Run the application using the command `node app.js` or `npm start`
