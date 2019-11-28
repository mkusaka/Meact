import Meact, { createElement, createTextElement } from "./";

describe("Me!act", () => {
  test("has createElement function", () => {
    expect(Meact.createElement).toEqual(createElement)
  })
})

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
    expect(createElement('div', null, 'a')).toMatchObject({
      type: 'div',
      props: {
        children: [
          {
            type: 'TEXT_ELEMENT',
            props: {
              nodeValue: 'a',
              children: []
            }
          }
        ]
      }
    });
  });
  test("with two children", () => {
    expect(createElement('div', null, 'a', 'b')).toMatchObject({
      type: 'div',
      props: {
        children: [
          {
            type: 'TEXT_ELEMENT',
            props: {
              nodeValue: 'a',
              children: []
            }
          },
          {
            type: 'TEXT_ELEMENT',
            props: {
              nodeValue: 'b',
              children: []
            }
          }
        ]
      }
    });
  });
});

describe('createTextElement', () => {
  test('with one children', () => {
    expect(createTextElement('div')).toMatchObject({
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: "div",
        children: []
      }
    });
  });
});
