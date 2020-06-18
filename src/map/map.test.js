"use strict";

import map from "./map";
import { expect } from "chai";

it("map should be a function", () => {
  expect(map).to.be.a("function");
});

it("map([1,2]) should return [1,2]", () => {
  expect(map([1, 2], (item) => item)).to.deep.equal([1, 2]);
});

it("map([12,10],(item,index)=>index) should return [0,1]", () => {
  expect(map([12, 10], (item, index) => index)).to.deep.equal([0, 1]);
});

it("map([3,9],(item,index,array)=>array) should return [[3,9],[3,9]]", () => {
  expect(map([3, 9], (item, index, array) => array)).to.deep.equal([
    [3, 9],
    [3, 9],
  ]);
});

it("map() should return []", () => {
  expect(map()).to.deep.equal([]);
});

it("map([1,2]) should return [1,2]", () => {
  expect(map([1, 2])).to.deep.equal([1, 2]);
});
