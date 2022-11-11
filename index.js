const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let flight =[
  {
      id: 1,
      title: 'flight to canada',
      time: '1pm',
      price: 26000,
      date: '26-06-20'
  }
  ]
    // Add/Book flight
  app.post('/flight', (req, res) => {
      const ticket = {
          id: flight.length + 1,
          title: req.body.title,
          time: req.body.time,
          price: req.body.price,
          date: req.body.date
      };
      flight.push(ticket)
      res.send(ticket);
      
   })
  // View all flight
  app.get('/flight',(req, res)=>{
      res.send(flight)
      
  })
  
  // get single flight
  app.get('/flight/:id', (req, res) => {
      const ticket = flight.find(c => c.id === parseInt(req.params.id))
      if (!ticket) res.status(404).send('Ticket not found')
      res.send(ticket)
  })
  

  
  
   // update flight
  app.put('/flight/:id', (req, res) => {
      var id = req.params.id
      var title = req.body.title
      var time = req.body.time
      var price = req.body.price
      var date = req.body.date
  
          var index = flight.findIndex(el => el.id == id)
          flight[index] = {
              ...flight[index],
              title: title,
              time: time,
              price: price,
              date: date
          }
          res.send({
              success: true,
              message: 'Data updated successfully'
          })
  })
  
  // Delete flight
  app.delete('/flight/:id', (req, res) => {
      const ticket = flight.find(c => c.id === parseInt(req.params.id))
      if (!ticket) res.status(404).send('Ticket not found')
      const index = flight.indexOf(ticket)
      flight.splice(index, 1);
      res.send("Deleted successfully")
      
  })
