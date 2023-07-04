
const Panel = {
    path2name: (actions, path)=>{
        for(var a = 0; a < actions.length; a++){
            if(path == actions[a].path)
                return actions[a].name;
        }
        return '';
    },
    add: (target, actions, posx, posy)=>{
        var x = posx;
        var y = posy;
        var wid, hei, panel, img;

        wid = 3*ImSZ+2*6/*spacing*/;
        hei = Math.floor(actions.length/2);

        if(actions.length % 2)
            hei++;

        hei = hei*ImSZ+ hei*5;
        panel = aya.rectangle(x, y, wid, hei, false, false);

        target.shape.addChild(panel, {x: -2, y: 0}, null, true);
        panel.c_svg.setAttribute("stroke-width", "0px");

        panel.c_svg.setAttribute("opacity", 0);

        target.panelPos = target.shape.children.length-1;

        for (var i = 0, j = 0; i < actions.length; i++, j++){
            if (i && !(i%3)){
                j = 0;
                y += ImSZ /* +5 */ /* y spacing */;
            }
            img = aya.image(x + ImSZ * j + j * 5, y, ImSZ, ImSZ,
                    actions[i].path, actions[i].name, false, false);
            target.shape.addChild(img, {x: 5, y: 0}, null, true);

            img.addEvent("mouseover", (e)=>{
                panelmouseovercb(target);
            });
            img.addEvent("mouseleave", (e)=>{
                panelmouseleavecb(target);
            });
            img.addEvent("mousedown", (e)=>{
                actionsmousedowncb(target, actions, e);
            });
        }

        panel.addEvent("mouseover", (e)=>{
            panelmouseovercb(target);
        });
        panel.addEvent("mouseleave", (e)=>{
            panelmouseleavecb(target);
        });
        target.shape.svg.addEventListener("mouseover", () => {
            svgmouseovercb(target);
        });
    },

    remove: (target)=>{
		var i, len;

        if(target.panelPos < 0)
            return null;

	    len = target.shape.children.length;
        for(i = target.panelPos; i < len; i++)
            target.shape.children[i].child.removeFromDOM();
        target.shape.children.splice(target.panelPos, len);

		target.panelPos = -1;
		target.shape.svg.removeEventListener("mouseover", () => {});
    }
}

var actionsmousedowncb = (target, actions, e)=>{
    Panel.remove(target);
    target.actions[Panel.path2name(actions, e.target.href.baseVal)](target);
}

var panelmouseleavecb = (target)=>{
    target.state = null;
}

var panelmouseovercb = (target)=>{
    target.state = 'panel';
}

var svgmouseovercb = (target)=>{
    if (target.state == null && target.panelPos >= 0){
        Panel.remove(target);
        target.shape.svg.removeEventListener("mouseover",()=>{});
    }
}