import { Method } from "./method";

class CircleEvent{

    static mouseovercb(self){
        if(state == "mouseover")
            return;
        state = "mouseover";
        active_component = self;
        self.methods.map((m, index)=>{
            if(m.type == 'arc'){
                m.draw();
                console.log("arc drawing");
                console.log(m.children);
                m.children.map(({child})=>{
                    if(index == 0){
                        child.setRotateAngle(-20);
                        child.setOffsetX(2);
                        child.setOffsetY(-5);
                    }
                    if(index == 1){
                        child.setRotateAngle(-60);
                        child.setOffsetX(2);
                        child.setOffsetY(-10);
                    }
                    if(index == 2){
                        child.setRotateAngle(-90);
                        child.setOffsetX(5);
                        child.setOffsetY(-15);
                    }
                    if(index == 3){
                        child.setRotateAngle(-150);
                        child.setOffsetX(20);
                        child.setOffsetY(-2);
                    }
                    child.draw();
                    child.c_svg.setAttribute("class", "name_res");

                    child.addEvent("mousedown", ()=>{
                        ArcEvent.mousedowncb({self: self, arc: m});
                    });
                    child.addEvent("mouseover", ()=>{
                        ArcEvent.mouseovercb(m);
                    });
                    child.addEvent("mouseleave", ()=>{
                        ArcEvent.mouseleavecb(m);
                    });
                });
                m.addEvent("mouseover", ()=>{
                    ArcEvent.mouseovercb(m);
                });
                m.addEvent("mouseleave", ()=>{
                    ArcEvent.mouseleavecb(m);
                });
                m.addEvent("mousedown", ()=>{
                    ArcEvent.mousedowncb({self: self, arc: m});
                });
            }
        });
        self.svg.addEventListener("mouseover", ()=>{
            console.log("mouseover svg");
            if(state == "mouseover" )
                return;
            console.log(active_component);
            if(active_component)
                active_component.removeArtefact();
            active_component = null;
        });
    }
    static mouseleavecb(self){
        state = "";
    }
}
class ArcEvent{
    static mouseovercb(arc){
        state = "mouseover";
    }

    static mouseleavecb(arc){
        state = "";
    }

    static mousedowncb(self){
        var method_name = "none";
        var idx = self.self.relocate(self.arc);
        console.log("mousedown arc, comp actif");
        console.log(active_component);

        self.self.svg.removeEventListener("mouseover", ()=>{});
        active_component.removeArtefact();
        self.arc.children[0].child.setRotateAngle(0);
        active_component = null;

        for(var m of self.self.data.methods){
            if(m.name == self.arc.children[0].child.text){
                method_name = m.id;
                break;
            }
        }
        state = "";
        self.self.methods[idx] = new Method(self.self.x, self.self.y, self.self.r, idx, method_name, self.self.svg);
        self.arc.children[0].child.x = self.self.methods[idx].ancre.x + 10;
        self.arc.children[0].child.y = self.self.methods[idx].ancre.y + 10;

        self.arc.children[0].child.draw();

        console.log("self.self.methods");
        console.log(self.self.methods[idx]);
        self.self.methods[idx].id.removeFromDOM();
        self.self.methods[idx].polyline.removeFromDOM();

        self.self.methods[idx].ancre.addEvent("mousedown", ()=>{
            AncreEvent.mousedowncb({self: self.self, method: self.self.methods[idx]});
        });
    }
}

class RectangleEvent{
    static mouseovercb(self){
        state = "mouseover";
        // self.id.c_svg.setAttribute("fill", "indigo");
      
        // if(!active_img){
            if(active_component)
                return;
            active_component = self;
            self.createArtefact();
            self.svg.addEventListener("mouseover", ()=>{
                console.log("mouseover svg from over rect");
                if(state == "mouseover" )
                    return;
                console.log(active_component);
                if(active_component)
                    active_component.removeArtefact();
                active_component = null;
            });
        // }
    }

    static mouseleavecb(self){
        state = "";
    }

    static mousedowncb(self){
        console.log("mousedown sur id");
        // self.id.c_svg.setAttribute("fill", "indigo");
        // var method_name = window.prompt("method name", self.method_name.text);
        // var delete_method = window.confirm("Do you want to delete the method ?");
        console.log("retour de prompt");
        console.log(method_name);
        console.log("id's children");
        // self.method_name.text = method_name;
        // self.method_name.redraw();
        // if(delete_method){
        //     self.id.removeFromDOM();
        //     self.polyline.removeFromDOM();
        //     self.ancre.removeFromDOM();
        //     self.esquiss.children.map(({child})=>{
        //         child.removeFromDOM();
        //     });
        //     self.esquiss.removeFromDOM();
        //     delete self.method;
        // }
    }
}

class EsquissEvent{
    static mouseovercb(self){
        state = "mouseover";
    }

    static mouseleavecb(self){
         state = "";
    }
}

class PatternEvent{
    static mouseovercb(self){
        state = "mouseover";
        self.child.c_svg.setAttribute("class", "scroll");
    }
    static mouseleavecb(self){
        // self.svg.addEventListener("mouseover", ()=>{
        //     console.log("mouseover svg from over mouseover");
        //     if(state == "mouseover")
        //         return;
        //     console.log(active_component);
        //     if(active_component)
        //         active_component.removeArtefact();
        //     active_component = null;
        // });
    }
    static mousedowncb(self){
        var img, pattern;
        active_img = false;
        active_child = self.child;
        console.log("mousedown sur le text");
        if(self.self.id.children.length != 0){
            self.self.id.children.map(({child}, index)=>{
                if(child.type == 'image' && child != active_child){
                    child.removeFromDOM();
                    self.self.id.children.splice(index, 1);
                }
            });
        }
        // pattern = window.prompt("add more information ?");

        if(self.child.text == 'adapter'){
            console.log(self.child.text);
            img = aya.Image(self.self.id.x + 5, self.self.id.y - self.self.height/2, 30,30, "icons/adapter.png");
        }
        else if(self.child.text == "composite"){
            console.log(self.child.text);
            img = aya.Image(self.self.id.x + 5, self.self.id.y - self.self.height/2, 30,30, "icons/composite.png");
        }
        else if(self.child.text == "chain of responsability"){
            console.log(self.child.text);
            img = aya.Image(self.self.id.x + 5, self.self.id.y - self.self.height/2, 30,30, "icons/chain.png");
        }
        else if(self.child.text == "none"){
            console.log(self.child.text);
            // img = aya.Image(self.self.id.x + 5, self.self.id.y - self.self.height/2, 30,30, "icons/chain.png");
        }
        else if(self.child.text == "decorator"){
            console.log(self.child.text);
            img = aya.Image(self.self.id.x + 5, self.self.id.y - self.self.height/2 + 5, 30,30, "icons/decorator.png");
        }
        else if(self.child.text == "strategy"){
            console.log(self.child.text);
            img = aya.Image(self.self.id.x + 5, self.self.id.y - self.self.height/2, 30,30, "icons/strategy.png");
        }
        self.self.id.addChild(img, null, null, false);
        active_img = true;
    }
}

class AncreEvent{
    static mousedowncb(self){
        self.method.ancre.selected = true;
        self.self.methods.map((m) =>{
            if(m.type == 'method' && m != self.method && m.ancre.selected == true){
                 m.id.removeFromDOM();
                 m.polyline.removeFromDOM();
                 m.ancre.selected = false;
            }
            if(m.type == 'method' && m == self.method){
                if(active_method == self.method){
                    console.log("active_ancre");
                    m.id.removeFromDOM();
                    m.polyline.removeFromDOM();
                    active_method = "";
                }
                else{
                    self.method.id.draw();
                    self.method.polyline.draw();
                    self.method.ancre.children.map(({child})=>{
                        if(child.type == 'text'){
                            // console.log('child founded');
                            // child.offsetX = 0;
                            // child.offsetY = 0;
                            // child.x = self.method.polyline.dest_x;
                            // child.y = self.method.polyline.dest_y;
                            // child.redraw();
                            child.removeFromDOM();
                        }
                    });
                    self.method.id.addEvent("mouseover", ()=>{
                        RectangleEvent.mouseovercb(self.method);
                    });
                    self.method.id.addEvent("mouseleave", ()=>{
                        RectangleEvent.mouseleavecb(self.method);
                    });
                    self.method.id.addEvent("mousedown", ()=>{
                        RectangleEvent.mousedowncb(self.method);
                    });
                    self.method.polyline.c_svg.setAttribute("fill", "none");
                    active_method = m;
                }
            }
        });
    }
}
export {CircleEvent, ArcEvent, RectangleEvent, EsquissEvent, PatternEvent, AncreEvent};