const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/user");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = 5708 || process.env.PORT;
const DB = "mongodb+srv://dennis:varghese@cluster0.xnw7o6s.mongodb.net/101020193_COMP3133_Lab4"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Successfully Connected.')
}).catch(error => {
    console.log('Failed to Connect.')
})

app.get("/", (req, res) => {
    res.send("lab4 - 101020193 - Dennis Varghese");
});

app.use("/", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running @ http://localhost:${PORT}`)
    console.log(`Users @ http://localhost:${PORT}/users`)
});
