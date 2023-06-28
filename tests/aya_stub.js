var aya = {
    init: (width, height)=>{
       return {
          uuid: Math.random().toString(36).substring(2, 15) +
             Math.random().toString(36).substring(2, 15),
          svg: {},
          config: {},
          id: ()=>{
             return Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15);
          },
          grid: (svg, cellW = 40, cellH = 40, subdx = 2, subdy = 4)=>{
             return {};
          },
          point: (x, y, r, isdrawing, issave, uuid = undefined)=>{
             var id = Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15);
             var Obj = {
                uuid: uuid || id,
                x: x != undefined ? x : null,
                y: y != undefined ? y : null,
                r: r != undefined ? r : null,
                ref: uuid ? uuid : null,
                svg: "",
                type: "point",
                events: {},
                c_svg: {
                   setAttribute(key, value){
                     Obj[key] = value;
                   }
                },
                events: {},
                addEvent(event, callback){
                   Obj.events[event] = callback;
                },
                deleteEvent(event){
                   delete Obj.events[event];
                },
                removeFromDOM(){},
                draw(){
                   Obj.addEvent("mousedown", ()=>{});
                   Obj.addEvent("mouseover", ()=>{});
                   Obj.addEvent("mouseleave", ()=>{});
                },
                setStyles: (o) => {
                  Object.keys(o).map((key ,index) => {
                     Obj.c_svg.setAttribute(key, o[key]);
                  });
               }
             }
             return Obj;
          },
          circle: (x, y, r, isdrawing, issave, uuid = undefined)=>{
            var id = Math.random().toString(36).substring(2, 15) +
                     Math.random().toString(36).substring(2, 15);
            var Obj = {
               uuid: uuid || id,
               x: x != undefined ? x : null,
               y: y != undefined ? y : null,
               r: r != undefined ? r : null,
               ref: uuid ? uuid : null,
               svg: "",
               type: "circle",
               events: {},
               children: [],
               c_svg: {
                  setAttribute(key, value){
                     Obj[key] = value;
                   }
               },
               events: {},
               addEvent(event, callback){
                  Obj.events[event] = callback;
               },
               deleteEvent(event){
                  delete Obj.events[event];
               },
               removeFromDOM(){},
               draw(){
                  Obj.addEvent("mousedown", ()=>{});
                  Obj.addEvent("mouseover", ()=>{});
                  Obj.addEvent("mouseleave", ()=>{});
               },
               setStyles: (o) => {
                  Object.keys(o).map((key ,index) => {
                     Obj.c_svg.setAttribute(key, o[key]);
                  });
               },
               addChild: (child, translate, rotate, drawing) => {
                  if (translate){
                     child.offsetX = translate.x;
                     child.offsetY = translate.y;
                  }
                  if (rotate){
                     child.centerX = rotate.centerX;
                     child.centerY = rotate.centerY;
                     child.angle = rotate.angle;
                  }
                  Obj.children.push({child});
               },
               makeHiddenCpoints(){},
               makeHiddenVertex(){},
               removeBoxFromDOM(){},
            }
            return Obj;
         },
          line: (x, y, dest_x, dest_y, isdrawing, issave, uuid = undefined)=>{
 
             var id =  Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15); 
       
             var Obj = {
                uuid: uuid || id,
                x: x != undefined ? x : null,
                y: y != undefined ? y : null,
                dest_x: dest_x != undefined ? dest_x : null,
                dest_y: dest_y != undefined ? dest_y : null,
                svg: "",
                type: "line",
                c_svg: {
                  setAttribute(key, value){
                     Obj[key] = value;
                   }
                },
                draw(){
                },
                redraw(){
                },
                setStyles: (o) => {
                  Object.keys(o).map((key ,index) => {
                     Obj.c_svg.setAttribute(key, o[key]);
                  });
               }
             }
             return Obj;
          },
          rectangle: (x, y, width, height, isdrawing, issave, uuid = undefined)=>{
             var id =  Math.random().toString(36).substring(2, 15) +
                           Math.random().toString(36).substring(2, 15); 
 
             var Obj = {
                uuid: uuid || id,
                events: [],
                x: x!=undefined ? x : null,
                y: y!=undefined ? y : null,
                width: width ? width : null,
                height: height ? height : null,
                type: "rectangle",
                children: [],
                offsetX: "",
                offsetY: "",
                vertex: [
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
 
                ],
                c_points: [
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                ],
                draw(){
                   Obj.shape.c_points.map((pt) => {
                      pt.draw();
                   });
                   Obj.shape.vertex.map((vt) => {
                      vt.draw();
                   });
                },
                redraw: ()=>{
                },
                svg: {
                   setAttribute: (tag, value) =>{
                      Obj[tag] = value;
                   },
                   addEventListener: ()=>{},
                   removeEventListener: () => {}
                },
                c_svg: {
                   setAttribute: (tag, value) =>{
                      Obj[tag] = value;
                   },
                   addEventListener: (e, callback) => {
                      var ev = {};
                      ev[e] = callback;
                      Obj.events.push(ev);
                   },
                },
                addChild: (child, translate, rotate, drawing) => {
                   if (translate){
                      child.offsetX = translate.x;
                      child.offsetY = translate.y;
                   }
                   if (rotate){
                      child.centerX = rotate.centerX;
                      child.centerY = rotate.centerY;
                      child.angle = rotate.angle;
                   }
                   Obj.children.push({child});
                },
                removeFromDOM(){
                   Obj.c_svg = "";
                },
                setStyles: (o) => {
                   Object.keys(o).map((key ,index) => {
                      Obj.c_svg.setAttribute(key, o[key]);
                   });
                }
             };
             return Obj;
          },
          lozenge: (x, y, width, height, isdrawing, issave, uuid = undefined)=>{
             var id =  Math.random().toString(36).substring(2, 15) +
                         Math.random().toString(36).substring(2, 15); 
             console.log(this);
             var Obj = {
                uuid: uuid || id,
                events: [],
                x: x!=undefined ? x : null,
                y: y!=undefined ? y : null,
                width: width ? width : null,
                height: height ? height : null,
                type: "lozenge",
                offsetX: "",
                offsetY: "",
                children: [],
                vertex: [
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
 
                ],
                c_points: [
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                   {
                      x: 0,
                      y: 0,
                      r: 5,
                      draw: ()=>{},
                      redraw: ()=>{},
                      c_svg: null,
                      ref: id,
                      uuid: null
                   },
                ],
                draw(){
                   Obj.shape.c_points.map((pt) => {
                      pt.draw();
                   });
                   Obj.shape.vertex.map((vt) => {
                      vt.draw();
                   });
                },
                redraw: ()=>{
                },
                svg: {
                   setAttribute: (tag, value) =>{
                      Obj[tag] = value;
                   },
                   addEventListener: ()=>{},
                   removeEventListener: () => {}
                },
                c_svg: {
                   setAttribute: (tag, value) =>{
                      Obj[tag] = value;
                   },
                   addEventListener: (e, callback) => {
                      var ev = {};
                      ev[e] = callback;
                      Obj.events.push(ev);
                   },
                },
                addChild: (child, translate, rotate, drawing) => {
                   if (translate){
                      child.offsetX = translate.x;
                      child.offsetY = translate.y;
                   }
                   if (rotate){
                      child.centerX = rotate.centerX;
                      child.centerY = rotate.centerY;
                      child.angle = rotate.angle;
                   }
                   Obj.children.push({child});
                },
                removeFromDOM(){
                   Obj.c_svg = "";
                },
                removeBoxFromDOM(){
                   
                },
                setStyles: (o) => {
                   Object.keys(o).map((key ,index) => {
                      Obj.c_svg.setAttribute(key, o[key]);
                   });
                }
             };
             return Obj;
          },
          image: (x, y, width, height, path, name, isdrawing, issave, uuid = undefined)=>{
             var id = Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15);
 
             var Obj = {
                uuid: uuid || id,
                x: x != undefined ? x : null,
                y: y != undefined ? y : null,
                width: width ? width : null,
                height: height ? height : null,
                path: path ? path : null,
                name: name ? name : null,
                type: "image",
                events: [],
                c_svg: {
                setAttribute: (tag, value) =>{
                   Obj[tag] = value;
                },
                addEventListener: (e, callback) => {
                   var ev = {};
                   ev[e] = callback;
                   Obj.events.push(ev);
                },
                },
                draw(){},
                setStyles: (o) => {
                  Object.keys(o).map((key ,index) => {
                     Obj.c_svg.setAttribute(key, o[key]);
                  });
               }
             };
             return Obj;
          },
          text: (x, y, text, size = 0, dest_x, dest_y, isdrawing, issave, uuid = undefined)=>{
             var id = Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15);
             var Obj = {
                uuid: uuid || id,
                type: 'text',
                svg: "",
                c_svg: {
                  setAttribute(key, value){
                     Obj[key] = value;
                   },
                   getBBox(){
                     return {
                        width: 100
                     };
                   }
                },
                textPath: {
                  setAttribute(){}
                },
                path_text:{
                  setAttribute(){}
                },
                size: size ? size : null,
                x: x != undefined ? x : null,
                y: y != undefined ? y : null,
                dest_x: dest_x != undefined ? dest_x : null,
                dest_y: dest_y != undefined ? dest_y : null,
                text: text ? text : null,
                draw(){},
                redraw(){},
                setStyles: (o) => {
                  Object.keys(o).map((key ,index) => {
                     Obj.c_svg.setAttribute(key, o[key]);
                  });
               }
             };	
             return Obj;
          },
          polyline: (points = [], isdrawing, issave, uuid = undefined)=>{
             var id = Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15);
             var Obj = {
                uuid: uuid || id,
                points: points,
                svg: "",
                c_svg: {
                  setAttribute(key, value){
                     Obj[key] = value;
                   }
                },
                type: 'polyline',
                removeFromDOM(){
                   Obj.c_svg = "";
                },
                draw(){},
                redraw(){},
                setStyles: (o) => {
                  Object.keys(o).map((key ,index) => {
                     Obj.c_svg.setAttribute(key, o[key]);
                  });
               }
             };
             return Obj;
          },
          link: (src_id, dest_id, userconfig = {})=>{
             var id = Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15);
             var Obj = {
                uuid: id,
                source: {},
                destination: {},
                line: {},
                type:"link",
                redraw(){
                }
             };
             return Obj;
          },
          arc: (x0, y0, x, y, angle, ratio, isdrawing, isave, uuid)=>{
            var id = Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
            var Obj = {
               uuid: uuid || id,
               type: 'arc',
               svg: "",
               events: {},
               children: [],
               c_svg: {
               setAttribute(key, value){
                  Obj[key] = value;
                  },
               },
               addEvent(event, callback){
                  Obj.events[event] = callback;
               },
               deleteEvent(event){
                  delete Obj.events[event];
               },
               setStyles: (o) => {
                  Object.keys(o).map((key ,index) => {
                     Obj.c_svg.setAttribute(key, o[key]);
                  });
               },
               addChild: (child, translate, rotate, drawing) => {
                  if (translate){
                     child.offsetX = translate.x;
                     child.offsetY = translate.y;
                  }
                  if (rotate){
                     child.centerX = rotate.x;
                     child.centerY = rotate.y;
                     child.angle = rotate.angle;
                  }
                  Obj.children.push({child});
               },
               removeFromDOM(){},
               x0: x0 != undefined ? x0 : null,
               y0: y0 != undefined ? y0 : null,
               x: x != undefined ? x : null,
               y: y != undefined ? y : null,
               angle: angle != undefined ? angle : null,
               offsetX0: 0,
               offsetY0: 0,
               dest_x: 0,
               dest_y: 0,
               radius: 20,
               ratio: ratio != undefined ? ratio: null,
               draw(){},
               shift(dx, dy){},
               redraw(){},
               calculateAngle(x, y, dest_x, dest_y){},
               resize(pos, dx, dy){}
            }
            return Obj;
         }
       }
    }
 }