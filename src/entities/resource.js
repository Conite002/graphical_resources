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
    var text = aya.Text(this._shape.shape.x, this._shape.shape.y+5, this.name, 10000);
    this._shape.addChild(text, null, null, true);
    
    var bbox = this._shape.shape.children[0].child.c_svg.getBBox();
    var textWidth = bbox.width;

    if (textWidth > this._shape.shape.r * 2) {
      var estimatedChars = Math.floor(this.name.length * this._shape.shape.r * 2 / textWidth);
      var maxChars = Math.max(0, estimatedChars-1);
      text.c_svg.textContent = this.name.substring(0, maxChars) + "...";
      text.setText(this.name);
      // textWidth = this._shape.shape.children[0].child.c_svg.getBBox().width;
      textWidth = this.getTextWidth(this.name);
      while (textWidth > 0 && textWidth > this._shape.shape.r * 2) {
        text.c_svg.textContent = text.c_svg.textContent.slice(0, -1);
        textWidth = this.getTextWidth(text.c_svg.textContent);
        console.log(text.c_svg.textContent) 
        console.log(this.name);
      }
      text.text = text.c_svg.textContent;
    }
    
    var delta_x = (this._shape.shape.r * 2 - textWidth) / 2;
    text.x = this._shape.shape.x - this._shape.shape.r + delta_x;

    text.redraw();
  }

  getTextWidth(texte){
    var dummyText = document.createElement("span");
    dummyText.style.visibility = "hidden";
    dummyText.style.position = "absolute";
    dummyText.style.whiteSpace = "nowrap";
    dummyText.textContent = texte;
    document.body.appendChild(dummyText);
    var width = dummyText.offsetWidth;
    console.log(" width ", width);
    document.body.removeChild(dummyText);
    return width;
  }
}
