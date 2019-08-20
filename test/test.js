"use strict";

const assert = require("assert");
const returnIfGreaterThan0 = require("../index");

describe("#returnIfGreaterThan0()", () => {

    it("0より大きい時にtrueが帰ってくるか", () => {
        assert.equal(returnIfGreaterThan0(1), true);
    });

    it("0の時にfalseが帰ってくるか", () => {
        assert.equal(returnIfGreaterThan0(0), false);
    });

    it("0より小さい時にfalseが帰ってくるか", () => {
        assert.equal(returnIfGreaterThan0(-1), false);
    });

});