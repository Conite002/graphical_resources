class Resource {
  constructor(props) {
    let x = 0;
    let y = 0;
    if (props.x && props.y){
        x = props.x;
        y = props.y;
    }
    if(props && (typeof props.name != "string" || props.name == ""))
      throw new Error(" name should be a string");
      
    this.name = props.name;


    this.shape = aya.circle(x, y, R_RADIUS);

    this.type = 'resource';
    this.isDeleted = false;
    this.shape.makeHiddenCpoints();
    this.shape.makeHiddenVertex();
    this.shape.removeBoxFromDOM();

    this.actions_t = [
      {name: "get", path: "src/images/get.jpg"},
      {name: "post", path: "src/images/post.jpg"},
      {name: "put", path: "src/images/put.jpg"},
      {name: "del", path: "src/images/delete.jpg"},
      {name: "remove", path: "src/images/trash.png"}
    ];

    this.actions = resourceactions;
    this.shape.setStyles({
      fill: SH_FILL,
    });

    this.panelPos = -1; // to be tested
    this.children = [];

    var text = aya.text(0, this.shape.y + DELTA_Y, this.name, 0, 0, 0, false);
    this.shape.addChild(text, null, null, true);

    setTextSize(text, this.shape, this.name);  

    this.shape.addEvent("mouseover", (e) => {
      resmouseovercb(this, e);
    });
    this.shape.addEvent("mouseleave", (e) => {
      resmouseleavecb(this, e);
    });
    this.shape.addEvent('click', (e)=>{
			Events.onclick(this);
		});
  }

  setName(value){
    this.name = value;
    this.shape.children[0].child.text = this.name;
    this.shape.children[0].child.textPath.textContent = this.name;
    setTextSize(this.shape.children[0].child, this.shape, this.name);  
  }
}

var resmouseovercb = (target, e)=>{
  Events.onmouseover(target, target.actions_t, 
    target.shape.x + target.shape.r,
    target.shape.y - target.shape.r);
};

var resmouseleavecb = (target, e)=>{
    Events.onmouseleave(target);
};