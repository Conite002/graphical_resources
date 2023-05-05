// import { abstractComponent } from "../../abstraction/abstractComponent";

class Resource {
  constructor(props = { name: "dummy", x: 0, y: 0, r: 10 }) {
    this.name = props.name;
    if (
      typeof props.x != "number" ||
      typeof props.y != "number" ||
      typeof props.r != "number"
    )
      throw new Error(" Type error.");

    this._shape = aya.Component("circle", {
      x: props.x,
      y: props.y,
      r: props.r,
    });
    this._shape.shape.setStyles({
      fill: "#D9D7F1",
    });
    var text = aya.Text(this._shape.shape.x, this._shape.shape.y, this.name,0);
    this._shape.addChild(text, null, null, true);
    var width = this._shape.shape.children[0].child.c_svg.getBBox().width;
    var height = 10;
    var delta_x = (this._shape.shape.r*2 - width)/2;
    var delta_y = (this._shape.shape.r*2 + height)/2;
    text.x = this._shape.shape.x - this._shape.shape.r + delta_x;
    text.y = this._shape.shape.y - this._shape.shape.r + delta_y;
    text.redraw();

  }
}
