import { createElement } from "./";

describe("createElement", () => {
  test("only one argument", () => {
    expect(createElement("div")).toMatchObject({
      type: "div",
      props: {
        children: []
      }
    });
  });
  test("with one children", () => {
    expect(createElement("div", null, "a")).toMatchObject({
      type: "div",
      props: { children: ["a"] }
    });
  });
  test("with two children", () => {
    expect(createElement("div", null, "a", "b")).toMatchObject({
      type: "div",
      props: {
        children: ["a", "b"]
      }
    });
  });
});
