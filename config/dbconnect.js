const mongoose = require("mongoose");
const dbConnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://emad:V6u9E4uThWl0rxy3@cluster0.s9za1.mongodb.net/blog",
      {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
      }
    )
    .then((_) => console.log("DB Connect"))
    .catch((error) => console.log(error));
};
module.exports = dbConnect;
