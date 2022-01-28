import { compile, serialize, middleware, stringify } from "stylis";

import plugin from "./index";

describe("stylisPluginExtraClassNamesSpecifity", () => {
  it("transforms .css-class1 into specifity of 2", () => {
    expect(serialize(compile(`.css-class1 { width: 0; }`), middleware([plugin(2), stringify]))).toEqual(
      [`.css-class1.css-class1{width:0;}`].join("")
    );
  });

  it("transforms .css-class1 into specifity of 4", () => {
    expect(serialize(compile(`.css-class1 { width: 0; }`), middleware([plugin(4), stringify]))).toEqual(
      [`.css-class1.css-class1.css-class1.css-class1{width:0;}`].join("")
    );
  });

  it("do not transform keyframes", () => {
    expect(serialize(compile(`@keyframes {}`), middleware([plugin(2), stringify]))).toEqual([`@keyframes{}`].join(""));
  });

  it("do not transform nested", () => {
    expect(
      serialize(
        compile(`
        .css-class1 { 
            color: orange; 
            
            .css-child-class2 { 
                color: green; 
            } 
        }`),
        middleware([plugin(2), stringify])
      )
    ).toEqual([`.css-class1.css-class1{color:orange;}.css-class1 .css-child-class2{color:green;}`].join(""));
  });

  it("do not transform chained", () => {
    expect(
      serialize(
        compile(`
    .css-class1 p { 
        color: orange; 
    }`),
        middleware([plugin(2), stringify])
      )
    ).toEqual([`.css-class1 p{color:orange;}`].join(""));
  });
});
