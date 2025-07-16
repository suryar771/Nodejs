const express = require("express")

const connectToMongoDB = require("./connect");
const URL = require('./models/url');
const urlRoute = require('./router/url');

connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(()=> console.log("Mongodb is successfully connected"));

const app = express();

app.set("view engine","ejs");

const PORT = 8001;

app.use(express.json());

app.use("/url",urlRoute);
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: { timestamp: Date.now() }
            }
        }
    );
    res.redirect(entry.redirectURL)
});




app.listen(PORT, () => console.log('Server started at 8001'))