var pathactions = {
    list: [
      {name: "path", path: "src/images/path.jpg"},
      {name: "variable", path: "src/images/variable.jpg"},
      {name: "resource", path: "src/images/res.jpg"},
      {name: "remove", path: "src/images/trash.png"}
    ],
    path: (target)=>{
      let {col, lig} = Layout.getClosestPosition(
        Math.floor(target.shape.x/Layout.cellW), 
        Math.floor(target.shape.y/Layout.cellH)
      );
      Layout.mark(col, lig);
  
      let path = new Path({
          path: '/',
          x: col * Layout.cellW + Layout.cellW/2,
          y: lig * Layout.cellH + Layout.cellH/2 
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
      let {col, lig} = Layout.getClosestPosition(
        Math.floor(target.shape.x/Layout.cellW), 
        Math.floor(target.shape.y/Layout.cellH)
      );
      Layout.mark(col, lig);
  
      let variable = new Variable({
        style: 'template',
        x: col * Layout.cellW + Layout.cellW/2,
        y: lig * Layout.cellH + Layout.cellH/2 
      });
  
      let lk = aya.link(
        target.shape.uuid, 
        variable.shape.uuid, 
        {end_dest: "triangle"}
      );
      Register.add(lk.uuid, lk);

      target.children.push({node: variable});
    },
    resource: (target)=>{
      let {col, lig} = Layout.getClosestPosition(
        Math.floor(target.shape.x/Layout.cellW), 
        Math.floor(target.shape.y/Layout.cellH)
      );
      Layout.mark(col, lig);
  
      var resource = new Resource({
        name: 'res', 
        x: col * Layout.cellW + Layout.cellW/2,
        y: lig * Layout.cellH + Layout.cellH/2 
      });
      let lk = aya.link(
        target.shape.uuid, 
        resource.shape.uuid, 
        {end_dest: "triangle"}
      );

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
  