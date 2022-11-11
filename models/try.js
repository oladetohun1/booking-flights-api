const app = require('express')();
app.use(express.json())
const port = process.env.PORT || 8000 

app.listen(port, () => {
    console.log(`listening to https://localhost:${port}`)
});

let flight = {
    id: "1",
    title: 'flight to canada',
    time: '1pm',
    price: 26000,
    date: '26-06-20'
}