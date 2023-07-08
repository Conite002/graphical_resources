var pathactions = {
    list: [
      {name: "path", path: "src/images/path.jpg"},
      {name: "variable", path: "src/images/variable.jpg"},
      {name: "resource", path: "src/images/res.jpg"},
    //   {name: "remove", path: "src/images/remove.jpg"}
    ],
    path: (target)=>{
        var path = new Path();
    
        aya.link(target.shape.uuid, path.shape.uuid, {end_dest: "triangle"});
    
        target.shape.addChild(path);
    },
    variable: (target)=>{
        var variable = new Variable();
    
        aya.link(target.shape.uuid, variable.shape.uuid, {end_dest: "triangle"});
    
        target.shape.addChild(variable);
    },
    resource: (target)=>{
        var resource = new Resource({name: 'res'});
    
        aya.link(target.shape.uuid, resource.shape.uuid, {end_dest: "triangle"});
    
        target.shape.addChild(resource);
    },
    // remove: (target)=>{
    //   target.shape.children.map(({child})=>{
    //     if (child.shape)
    //         child.shape.removeFromDOM();
    //     else  
    //       child.removeFromDOM();
    //     target.shape.removeFromDOM();
    //   });
    // }
  };
  