/* global require, jest, beforeEach, afterEach */

"use strict";

const request = require("supertest");
const express = require("express");
const routes = require("../src/routes.js");
const { describe, test, expect } = require("@jest/globals");

const app = express();
app.use("/", routes);

let server;

describe("Testing Mock API Server", () => {
  beforeEach((done) => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    server = app.listen(4000, (err) => {
      if (err) return done(err.message);
      done();
    });
  });

  afterEach((done) => {
    server && server.close();
    done();
  });

  test("Should respond with ok for the root path", (done) => {
    request(app).get("/").then(resp => {
      expect(resp.statusCode).toEqual(200);
      expect(resp.body).toEqual({});
      done();
    });
  });

  test("Should return an array of food items", (done) => {
    request(app).get("/foods").then(response => {
      expect(response.statusCode).toEqual(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      done();
    });
  });

  test("Should return a single food item", (done) => {
    request(app).get("/foods/1").then(resp => {
      const body = resp.body;
      expect(resp.statusCode).toEqual(200);
      expect(body).toBeInstanceOf(Object);
      expect(body.id).toEqual(1);
      expect(body.categoryId).toEqual(3);
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("price");
      expect(body).toHaveProperty("image");
      done();
    });
  });

  test("Should return a 404 error when not found", (done) => {
    request(app).get("/foods/NOT_FOUND").then(resp => {
      const body = resp.body;
      expect(resp.statusCode).toBe(404);
      expect(body).toHaveProperty("error");
      done();
    });
  });

  test("Should return a list of food categories", (done) => {
    request(app).get("/food-categories").then(resp => {
      const body = resp.body;
      expect(resp.statusCode).toBe(200);
      expect(body).toBeInstanceOf(Array);
      expect(body.length).toBeGreaterThan(0);
      done();
    });
  });
});
