//import { abstractComponent } from "../../abstraction/abstractComponent";
var actions = [
    {name: "deletion", path: "src/images/"},
    {name: "path", path: "src/images/"},
    {name: "decorator", path: "src/images/"},
    {name: "adapter", path: "src/images/"},
    {name: "composite", path: "src/images/"},
    {name: "strategy", path: "src/images/"},
    {name: "chain of responsibility", path: "src/images/"}
];

class Variable {
    constructor(props = {name: "dummy", style: "template"}){
        
        if(["template" ,"query" ,"plain"].indexOf(props.style)==-1)
            throw new Error("the style must be a correct style");
        this.name = props.name;
        this.style = props.style;

        this._shape = aya.Component("lozenge", {x:0, y:0, width:10, height:15});
        this._shape.shape.setStyles({strokewidth: "2px", stroke: "black", fill: "yellow"});
        var text = aya.Text(aya.id(), this._shape.shape.x, this._shape.shape.y, props.name, 0, this._shape.shape.x + this._shape.shape.width, this._shape.shape.y);
        this._shape.addChild(text, {x: 0, y: -10});
    }

}
