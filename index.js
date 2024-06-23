const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())


// import de mes routes
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics")
const comicsByCharacterRoutes= require ("./routes/comicsByCharacter")

// utilisation de mes routes
 app.use(charactersRoutes);
 app.use(comicsRoutes);
 app.use(comicsByCharacterRoutes)


 app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(3000, () => {
  console.log("Server started");
});