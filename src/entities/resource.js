var methods = ["get", "put", "post", "del"];

class Resource {
  constructor(props) {
    if( props && (typeof props.name != "string" || props.name == "")){
      throw new Error(" name should be a string");
    }
    this.name = props.name;
    this.shape = aya.circle(
      props.x ? props.x : 0,
      props.y ? props.y : 0,
      RADIUS
    );
    this.shape.makeHiddenCpoints();
    this.shape.makeHiddenVertex();
    this.shape.removeBoxFromDOM();
    this.actions = [];
    this.shape.setStyles({
      fill: SH_FILL,
    });

    var text = aya.text(0, this.shape.y + DELTA_Y, this.name, 0, 0, 0, false);
    this.shape.addChild(text, null, null, true);
    var t_width = getText(this.name).width;
    if (t_width > this.shape.r * 2) {
      text.text = reduceText(t_width, this.shape.r * 2, this.name);
      text.c_svg.textContent = text.text;
      t_width = getText(text.text).width;
    }
    var deltaX = (this.shape.r * 2 - t_width)/2;
    text.x = this.shape.x - this.shape.r + deltaX/2;
    text.redraw();

    this.shape.addEvent("mouseover", () => {
      Events.onmouseover(this,methods);
    });
    this.shape.addEvent("mouseleave", () => {
      Events.onmouseleave(this);
    });
  }

  setName(value){
    this.name = value;
  }
  addPanel(actions) {
      var x = this.shape.x;
      var y = this.shape.y + this.shape.r + 20;
      for (var i = 0; i < actions.length; i++) {
        var arc = aya.arc(this.shape.x, this.shape.y, x, y, ANGLE, RATIO, false);
        
        this.shape.addChild(arc, null, null, true);
        // this.shape.c_svg.appendChild(arc.c_svg);
        var text = aya.text(arc.x, arc.y - DELTA_Y, actions[i], 0, 0, 0, false);
        arc.addChild(text, null, { x: arc.x, y: arc.y, angle: getAngle(ANGLE,i) }, true);
        text.c_svg.setAttribute("transform", "rotate(" + `${text.angle}` + "," +` ${text.centerX}` + "," + `${text.centerY}` + ")");
        text.textPath.setAttribute("startOffset", "5%");
        // this.shape.addChild(text, null, null, false);
        this.actions.push(arc);
        x = arc.dest_x;
        y = arc.dest_y;
        
        arc.addEvent("mouseover", ()=>{
          Events.onmouseover(this, methods);
        });
      }      

  }

  removePanel(){
    this.actions.map((arc, index) =>{
      arc.children.map((text) => {
        
        text.removeFromDOM();
      });
      arc.removeFromDOM();
    });
    this.actions = [];
  }
}
