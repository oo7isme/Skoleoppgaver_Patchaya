const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
const db =
  "mongodb+srv://patchaya:LXwAEy1hFduN8AzL@cluster0.jfdum0e.mongodb.net/dromtorpcut";
const port = 25584;
app.use(express.json());

mongoose.connect(db, {});

const orderSchema = new mongoose.Schema({
  cut: String,
  name: String,
  email: String,
  date: Date,
});

const Order = mongoose.model("Order", orderSchema);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
    } else {
      const allowedOrigins = [
        "http://localhost:3000",
        "https://dromtorp-cut.vercel.app",
      ];
      const isAllowed = allowedOrigins.includes(origin);
      callback(isAllowed ? null : new Error("Origin not allowed"), isAllowed);
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.post("/registerOrder", (req, res) => {
  console.log(req.body);
  bcrypt.hash(req.body.cut, saltRounds, function (err, hash) {
    if (err) {
      console.error(err);
      res.status(500).send("Error hashing data");
    } else {
      const orderSchema = new Order({
        cut: hash,
        name: req.body.name,
        email: hash,
        date: req.body.date,
      });

      orderSchema
        .save()
        .then((savedData) => {
          console.log("Saved data:", savedData);
          res.send("Data received and saved successfully");
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("Error saving data");
        });
    }
  });
});

app.get("/checkDateAvailability/:date", async (req, res) => {
  const date = new Date(req.params.date);
  const order = await Order.findOne({ date: date });
  if (order) {
    res.send("Date is not available");
  } else {
    res.send("Date is available");
  }
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});

// to check if cut matches

// app.post('/checkCut', (req, res) => {
//   const inputCut = req.body.cut;
//   Order.findOne({ name: req.body.name }, function(err, order) {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error finding order');
//     } else if (order) {
//       bcrypt.compare(inputCut, order.cut, function(err, result) {
//         if (err) {
//           console.error(err);
//           res.status(500).send('Error comparing data');
//         } else {
//           if (result) {
//             res.send('Cut matches');
//           } else {
//             res.send('Cut does not match');
//           }
//         }
//       });
//     } else {
//       res.send('Order not found');
//     }
//   });
// });
