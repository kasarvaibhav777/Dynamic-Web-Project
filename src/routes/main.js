const express = require("express");
const routes = express.Router();

const Detail = require("../models/Detail");
const Slider = require("../models/Slider");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "642a8cc1d55c26264ee5eded" });
  const slides = await Slider.find();
  //console.log(details)
  //console.log(slides)
  res.render("index", { details: details, slides:slides });
});

routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({ _id: "642a8cc1d55c26264ee5eded" });
  res.render("gallery", { details: details });
});

module.exports = routes;
