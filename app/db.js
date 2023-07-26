const mongoose = require("mongoose");

exports.connectMonggose = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      "mongodb+srv://iammohdhamidashraf:WyfhZ6P96p8PG5no@habitdb.9bpkzjc.mongodb.net/HabitDB?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    )
    .then((e) => console.log("Connected to Mongodb => Habit-Tracker"))
    .catch((e) => console.log("Not Connect Mongodb"));
};
