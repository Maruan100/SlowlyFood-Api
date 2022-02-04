const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 8081;

mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://1234:1234@slowlyfood.knt6b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Conexion inciada correctamente!!");

    app.listen(port, () => {
      console.log("Servidor corriendo en http://localhost:" + port);
    });
  });
