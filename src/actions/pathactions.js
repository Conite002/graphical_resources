var pathactions = {
    list: [
      {name: "path", path: "src/images/path.jpg"},
      {name: "variable", path: "src/images/variable.jpg"},
      {name: "resource", path: "src/images/res.jpg"},
      {name: "remove", path: "src/images/trash.png"}
    ],
    path: (target)=>{
      let {col, lig } = Layout.setPosition(
        Math.floor(target.shape.x/Layout.cellW), 
        Math.floor(target.shape.y/Layout.cellH)
      );
      Layout.mark(col, lig);

      target.shape.x = col * Layout.cellW + Layout.cellW/2;
      target.shape.y = lig * Layout.cellH + Layout.cellH/2;
     
      target.shape.children[0].child.x = target.shape.x - target.shape.r;
      target.shape.children[0].child.y = target.shape.y - target.shape.r - DELTA_Y;

      target.shape.redraw();

      let links = Register.findAllLink(target.shape);
  
      links.length && links.map((lk)=> lk.redraw());

      let obj = Layout.getClosestPosition(
        Math.floor(target.shape.x/Layout.cellW), 
        Math.floor(target.shape.y/Layout.cellH)
      );
            
      Layout.mark(obj.x, obj.y);
  
      let path = new Path({
          path: '/',
          x: obj.x * Layout.cellW + Layout.cellW/2,
          y: obj.y * Layout.cellH + Layout.cellH/2 
      });
      let lk = aya.link(
        target.shape.uuid, 
        path.shape.uuid, 
        {end_dest: "triangle"}
      );
      Register.add(lk.uuid, lk);

      target.children.push({node: path});
    },
    variable: (target)=>{
      let {col, lig } = Layout.setPosition(
        Math.floor(target.shape.x/Layout.cellW), 
        Math.floor(target.shape.y/Layout.cellH)
      );
      Layout.mark(col, lig);

      target.shape.x = col * Layout.cellW + Layout.cellW/2;
      target.shape.y = lig * Layout.cellH + Layout.cellH/2;

      target.shape.children[0].child.x = target.shape.x - target.shape.r;
      target.shape.children[0].child.y = target.shape.y - target.shape.r - DELTA_Y;

      target.shape.redraw();
    
      var links = Register.findAllLink(target.shape);
  
      links.length && links.map((lk)=> lk.redraw());

      let obj = Layout.getClosestPosition(
        Math.floor(target.shape.x/Layout.cellW), 
        Math.floor(target.shape.y/Layout.cellH)
      );
          
      Layout.mark(obj.x, obj.y);
  
      let variable = new Variable({
        style: 'template',
        x: obj.x * Layout.cellW + Layout.cellW/2,
        y: obj.y * Layout.cellH + Layout.cellH/2 
      });
  
      let lk = aya.link(target.shape.uuid, variable.shape.uuid, {end_dest: "triangle"});
      Register.add(lk.uuid, lk);

      target.children.push({node: variable});
    },
    resource: (target)=>{
      let {col, lig } = Layout.setPosition(
        Math.floor(target.shape.x/Layout.cellW), 
        Math.floor(target.shape.y/Layout.cellH)
      );
      Layout.mark(col, lig);

      target.shape.x = col * Layout.cellW + Layout.cellW/2;
      target.shape.y = lig * Layout.cellH + Layout.cellH/2;

      target.shape.children[0].child.x = target.shape.x - target.shape.r;
      target.shape.children[0].child.y = target.shape.y - target.shape.r - DELTA_Y;

      target.shape.redraw();
     
      var links = Register.findAllLink(target.shape);
  
      links.length && links.map((lk)=> lk.redraw());
      
      let obj = Layout.getClosestPosition(
        Math.floor(target.shape.x/Layout.cellW), 
        Math.floor(target.shape.y/Layout.cellH)
      );
          
      Layout.mark(obj.x, obj.y);
  
      var resource = new Resource({
        name: 'res', 
        x: obj.x * Layout.cellW + Layout.cellW/2,
        y: obj.y * Layout.cellH + Layout.cellH/2 
      });
      let lk = aya.link(target.shape.uuid, resource.shape.uuid, {end_dest: "triangle"});

      Register.add(lk.uuid, lk);
  
      target.children.push({node: resource});
    },
    remove: (target)=>{
      var links = Register.findAllLink(target.shape);
  
      if (links.length)
        links.map((lk)=>{
          lk.dest_end_csvg.remove();
          lk.line.removeFromDOM();
          Register.clear(lk.uuid);
        });
      if (target.children.length)
        target.children.map((child)=>{
          child.node.actions.remove(child.node);
        });
      target.shape.removeFromDOM();
    }
  };
  