/* global module, require, setTimeout */

"use strict";

const express = require("express");
const router = express.Router();

const waitTime = 1000; //  Mock Delay for simulating round trip requests
const foodCategoryList = require("../data/foodCategory.json");
const foodItemList = require("../data/mockFoodList.json");

router.get("/", (req, res) => {
  res.header("Content-Type", "text/plain");
  res.status(200).send("ok");
});

router.get("/foods", (req, res) => {
  setTimeout(() => {
    res.send(foodItemList);
  }, waitTime);
});

router.get("/foods/:id", (req, res) => {
  var food = null;
  foodItemList.forEach(item => {
    if (item.id == req.params.id) {
      food = item;
    }
  });

  setTimeout(() => {
    var err = { error: "Food Item Not Found" };
    food == null ? res.status(404).send(err) : res.status(200).send(food);
  }, waitTime);
});

router.get("/food-categories", (req, res) => {
  setTimeout(() => {
    res.send(foodCategoryList).end();
  }, waitTime);
});

module.exports = router;
