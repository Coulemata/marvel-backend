const express = require("express");
const router = express.Router();
const axios=require("axios");

router.get("/comics", async (req,res) => {
    try {
      const response = await axios.get( `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=xkJrN6vI2GRmpRoS`
      );
      console.log(response.data);
      res.json(response.data); 
    } catch (error) {
      console.error(error.message);
    }
})


module.exports = router;


