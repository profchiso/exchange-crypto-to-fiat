//require packages
require("dotenv").config(); //require the config files
const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const WebSocket = require("ws");
const cronJob = require("node-cron");
const app = express(); //create an express app


const server = http.createServer(app)
const wss = new WebSocket.Server({ server }); //create a websocket server

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors()); //enable CORS
const connectToDB = require("./database/dbConnection");
connectToDB() // function to connect to the database

const { getLiveExchangesCryptoToFiatAndSave } = require("./crons/getLiveExchange")

//brings in  routes
const { undefinedRouter } = require("./routes/undefinedRoutes");
const { exchangeRouter } = require("./routes/exchanges");

//define  root routes
app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to crypto  to Fiat currency exchange!!", statusCode: 200 })
})
app.use("/api/v1/exchanges", exchangeRouter); //mount the exchangeRouter on the /exchanges path
app.use(undefinedRouter); //add undefinedRouter to handle requests to an invalid endpoint


//cron job to fetch the live exchange rates and stream them to the frontend via websocket
cronJob.schedule(
    `*/${process.env.MINUTES} * * * *`,
    async() => {
        console.log(`run every  ${process.env.MINUTES} minutes`);
        let data = await getLiveExchangesCryptoToFiatAndSave()

        //stream data to frontend using the websocket connection
        wss.on('connection', (ws) => {
            ws.send(JSON.stringify(data));
        });
    }, { scheduled: true }
);

const PORT = process.env.PORT || 5000; //define port number
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});