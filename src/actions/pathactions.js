var pathactions = {
    list: [
      {name: "path", path: "src/images/path.jpg"},
      {name: "variable", path: "src/images/variable.jpg"},
      {name: "resource", path: "src/images/res.jpg"},
      {name: "remove", path: "src/images/trash.png"}
    ],
    path: (target)=>{
        var obj = Layout.getClosestPosition(Math.floor(target.shape.x/Layout.cellW), Math.floor(target.shape.y/Layout.cellH));
            
        Layout.mark(obj.x, obj.y);
    
        var path = new Path({
            path: '/',
            x: obj.x * Layout.cellW + Layout.cellW/2,
            y: obj.y * Layout.cellH + Layout.cellH/2 
        });
        var lk = aya.link(target.shape.uuid, path.shape.uuid, {end_dest: "triangle"});
        Register.add(lk.uuid, lk);

        target.children.push({node: path, link: lk});
    },
    variable: (target)=>{
        var obj = Layout.getClosestPosition(Math.floor(target.shape.x/Layout.cellW), Math.floor(target.shape.y/Layout.cellH));
            
        Layout.mark(obj.x, obj.y);
    
        var variable = new Variable({
          style: 'template',
          x: obj.x * Layout.cellW + Layout.cellW/2,
          y: obj.y * Layout.cellH + Layout.cellH/2 
        });
    
        var lk = aya.link(target.shape.uuid, variable.shape.uuid, {end_dest: "triangle"});
        Register.add(lk.uuid, lk);

        target.children.push({node: variable, link: lk});
    },
    resource: (target)=>{
        var obj = Layout.getClosestPosition(Math.floor(target.shape.x/Layout.cellW), Math.floor(target.shape.y/Layout.cellH));
            
        Layout.mark(obj.x, obj.y);
    
        var resource = new Resource({
          name: 'res', 
          x: obj.x * Layout.cellW + Layout.cellW/2,
          y: obj.y * Layout.cellH + Layout.cellH/2 
        });
        var lk = aya.link(target.shape.uuid, resource.shape.uuid, {end_dest: "triangle"});

        Register.add(lk.uuid, lk);
    
        target.children.push({node: resource, link: lk});
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
        target.children.map((child, index)=>{
          child.node.actions.remove(child.node);
        });
      target.shape.removeFromDOM();
    }
  };
  