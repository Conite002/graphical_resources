//import { abstractComponent } from "../../abstraction/abstractComponent";

class Path {
    constructor(uri){
        if(!uri)
            throw new Error("path's creation requires a name");
        this.path = uri;
        this.shape = aya.Component("circle", {x:0, y:0, r:15});
        this.shape.form.c_svg.setAttribute("stroke-width", "2px");
        this.shape.form.c_svg.setAttribute("stroke", "green");
        this.shape.form.c_svg.setAttribute("fill", "gray");
    }


    createShape(){
    	
    }
}
