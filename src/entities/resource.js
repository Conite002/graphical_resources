var methods = ["get", "put", "post", "del"];

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
    this.actions = [];
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
    this.shape.addEvent("mouseover", ()=>{
      Events.onmouseover(this, methods);
    });
    this.shape.addEvent("mouseleave", ()=>{
      Events.onmouseleave(this);
    });

  }

  addPanel(actions) {
    try {
      var x = this.shape.x;
      var y = this.shape.y + this.shape.r + 20;
      for (var i = 0; i < actions.length; i++) {
        var arc = aya.arc(this.shape.x, this.shape.y, x, y, ANGLE, RATIO, false);
        this.shape.addChild(arc, null, null, true);
        var text = aya.text(arc.x, arc.y - DELTA_Y, actions[i], 0, 0, 0, false);
        arc.addChild(text, null, { x: arc.x, y: arc.y, angle: getAngle(ANGLE,i) }, true);
        text.c_svg.setAttribute("transform", "rotate(" + `${text.angle}` + "," +` ${text.centerX}` + "," + `${text.centerY}` + ")");
        text.textPath.setAttribute("startOffset", "5%");
        this.shape.addChild(text, null, null, false);
        this.actions.push(arc);
        x = arc.dest_x;
        y = arc.dest_y;
        arc.addEvent("mouseover", ()=>{
          Events.onmouseover(this, methods);
        });
      }      

    } catch (error) {
      console.log(error);
    }
  }

  removePanel(){
    this.actions.map((arc, index) =>{
      arc.removeFromDOM();
    });
    this.actions = [];
  }
}
