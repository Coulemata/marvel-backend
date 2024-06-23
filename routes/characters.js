const express = require("express");
const router = express.Router();
const axios=require("axios");

router.get("/characters", async (req,res) => {

  const name = req.query.name || "";
  const limit = req.query.limit || 100;
  const skip = req.query.skip || 0;

    try {
      const response = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=xkJrN6vI2GRmpRoS`,
    );
      console.log(response.data);
      res.json(response.data); 
    } catch (error) {
      console.error(error.message);
    }
});
  

  module.exports = router;
