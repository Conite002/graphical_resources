function getTextWidth(texte){
  var tbox = document.createElement("span");
  tbox.style.visibility = "hidden";
  tbox.style.position = "absolute";
  tbox.style.whiteSpace = "nowrap";
  tbox.textContent = texte;
  document.body.appendChild(tbox);
  var width = tbox.offsetWidth;
  document.body.removeChild(tbox);
  return width;
}

class Resource {
  constructor(props = { name: "dummy", x: 0, y: 0, r: 10 }) {
    if (
      typeof props.x != "number" ||
      typeof props.y != "number" ||
      typeof props.r != "number"
    )
      throw new Error(" Type error.");

    this.name = props.name;

    this.shape = aya.circle(props.x, props.y, props.r);
    this.shape.setStyles({
      fill: "#D9D7F1",
    });
    var text = aya.text(this.shape.x, this.shape.y+5, this.name, 0, 0, 0, false);
    this.shape.addChild(text, null, null, true);
    
    var textWidth = this.shape.children[0].child.c_svg.getBBox().width;

    if (textWidth > this.shape.r * 2) {

      var estimatedChars = Math.floor(this.name.length * this.shape.r * 2 / textWidth);
      var maxChars = Math.max(0, estimatedChars-1);
      text.c_svg.textContent = this.name.substring(0, maxChars) + "...";
      text.setText(this.name);

      textWidth = getTextWidth(this.name);

      while (textWidth > 0 && textWidth > this._shape.shape.r * 2){
        text.c_svg.textContent = text.c_svg.textContent.slice(0, -1);
        textWidth = this.getTextWidth(text.c_svg.textContent);
      }
      text.text = text.c_svg.textContent;
    }
    
    var deltaX = (this.shape.r * 2 - textWidth) / 2;
    text.x = this.shape.x - this.shape.r + deltaX;

    text.redraw();
  }
}
