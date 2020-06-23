import { expect } from "chai";
import some from "./some";

it("some should be a function", () => {
  expect(some).to.be.a("function");
});

it("some([],item => item) should return false", () => {
  expect(some([], (item) => item)).to.not.be.ok;
});

it("some([1,2,3],item => item > 2) should return true", () => {
  expect(some([1, 2, 3], (item) => item > 2)).to.be.ok;
});

it("some([1,3,5,7,9],item => item % 2 === 0) should return false", () => {
  expect(some([1, 3, 5, 7, 9], (item) => item % 2 === 0)).to.not.be.ok;
});

it("some([5,98,2,7,49],(item,index) => item === index) should return ok", () => {
  expect(some([5, 98, 2, 7, 49], (item, index) => item === index)).to.be.ok;
});

it("some([1,2,3,4,5,6],(item,i,array) => array.length === item) should return true", () => {
  expect(some([1, 2, 3, 4, 5, 6], (item, i, array) => array.length === item)).to
    .be.ok;
});
