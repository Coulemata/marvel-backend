const express = require("express");
const router = express.Router();
const axios=require("axios");
const { default: Comics } = require("./comics");

// router.get("/comics/:characterId", async (req,res) => {
//    const characterId= "5fcf91f5d8a2480017b91455"
  
//     try {
//       const response = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=xkJrN6vI2GRmpRoS`
//       );
//       console.log(response.data);
//       res.json(response.data); 
//     } catch (error) {
//       console.error(error.message);
//     }
// })
  
router.get("/comics/:characterId", async (req, res) => {
  try {
    let characterId = req.params.characterId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=xkJrN6vI2GRmpRoS`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
  

module.exports = router;

