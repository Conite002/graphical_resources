class Variable{
    constructor(props = {name: 'dummy', style: 'template'}){
        let text;
        let x = 0;
        let y = 0;
        if (props && props.name)
            this.name = props.name;

        if (!['template', 'plain', 'query'].includes(props.style))
            throw new Error('style is not correct');
        this.style = props.style;

        if (props.x)
            x = props.x;
        if (props.y)
            y = props.y;

        if (this.style == 'template')
            text = '{'+ this.name + '}';
        else if (this.style == 'plain')
            text = '{'+ this.name + '}';
        else 
            text = '{'+ this.name + '?}';

        this.panelPos = -1;
        this.actions = varactions;
        this.shape = aya.lozenge(x, y, L_WIDTH, L_HEIGHT);

        this.shape.makeHiddenCpoints();
        this.shape.makeHiddenVertex();
        this.shape.removeBoxFromDOM();

        this.shape.setStyles({fill: L_FILL, stroke: L_STROKE, strokeWidth: L_STROKEWIDTH});

        this.shape.addChild(aya.text(this.shape.x - this.shape.width, 
            this.shape.y - DELTA_Y, 
            text, 
            300, 
            0, 
            0, false)
        );

        this.shape.addEvent('mouseover', (e)=>{ 
            varmouseovercb(this, e);
        });
        this.shape.addEvent('mouseleave', (e)=>{
            varmouseleavecb(this, e)
        });
    }

    setStyle(value){
        if (value && !['template', 'plain', 'query'].includes(value))
            throw new Error('style is not correct');
        this.style = value;
    }

    setName(value){
        this.name = value;
    }
}

var varmouseovercb = (target, e)=>{
    Events.onmouseover(target, varactions.list, 
      target.shape.x + target.shape.width/3,
      target.shape.y);
};
  
var varmouseleavecb = (target, e)=>{
    Events.onmouseleave(target);
};