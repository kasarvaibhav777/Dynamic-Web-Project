const express = require("express");
const routes = express.Router();

const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "642a8cc1d55c26264ee5eded" });
  const slides = await Slider.find();
  const services = await Service.find();
  //console.log(details)
  //console.log(slides)
  //console.log(services)
  res.render("index", { details: details, slides: slides, services: services });
});

routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({ _id: "642a8cc1d55c26264ee5eded" });
  res.render("gallery", { details: details });
});


//process contact form
routes.post("/process-contact-form", async (req, res) => {
  //console.log(req.body);
  try {
    const data = await Contact.create(req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = routes;
