class Path {
    constructor(props = {path: '/'}){
        let x = 0;
        let y = 0;

        if (props.x)
            x = props.x;
        if (props.y)
            y = props.y;

        this.path = props.path;

        this.shape = aya.circle(x, y, P_RADIUS);
        this.shape.addChild(
            aya.text(this.shape.x - this.shape.r,
                this.shape.y - this.shape.r - DELTA_Y, 
                this.path,
                SIZE)
        );
        this.type = 'path';
        this.shape.makeHiddenCpoints();
        this.shape.makeHiddenVertex();
        this.shape.removeBoxFromDOM();
    
        this.actions = pathactions;
        this.panelPos = -1;

        this.shape.setStyles({fill: P_FILL, stroke: P_STROKE, strokeWidth: P_STROKEWIDTH});

        this.shape.addEvent("mouseover", (e) => {
            pathmouseovercb(this, e);
        });
        this.shape.addEvent("mouseleave", (e) => {
            pathmouseleavecb(this, e);
        });
    }

    setPath(value){
        this.path = value;
    }
}


var pathmouseovercb = (target, e)=>{
    Events.onmouseover(target, pathactions.list, 
      target.shape.x + target.shape.r,
      target.shape.y - target.shape.r);
};

var pathmouseleavecb = (target, e)=>{
Events.onmouseleave(target);
};
