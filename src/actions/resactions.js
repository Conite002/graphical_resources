var resourceactions = {
    list: [
      {name: "get", path: "src/images/get.jpg"},
      {name: "post", path: "src/images/post.jpg"},
      {name: "put", path: "src/images/put.jpg"},
      {name: "del", path: "src/images/delete.jpg"},
      // {name: "remove", path: "src/images/remove.jpg"}
    ],
    get: (target)=>{
      var index = resourceactions.list.findIndex((item)=> item.name == 'get');
      var x =  Math.cos( ( (60 - 0 * 30 ) * Math.PI) / 180) * 
              target.shape.r + target.shape.x;
      var y =  Math.sin( ( (60 - 0 * 30 ) *  Math.PI) / 180) * 
              target.shape.r + target.shape.y;

      var method = aya.circle(x, y, M_RADIUS, false);
      target.shape.addChild(method);
      method.setStyles({fill: 'black'});
      method.makeHiddenCpoints();
      method.makeHiddenVertex();
      method.removeBoxFromDOM();

      resourceactions.list.splice(index, 1);
      return method;
    },
    post: (target)=>{
      var index = resourceactions.list.findIndex((item) => item.name == 'post');

      var x =  Math.cos( ( (60 - 1 * 30 ) * Math.PI) / 180) * 
      target.shape.r + target.shape.x;
      var y =  Math.sin( ( (60 - 1 * 30 ) *  Math.PI) / 180) * 
            target.shape.r + target.shape.y;

      var method = aya.circle(x, y, M_RADIUS, false);
      target.shape.addChild(method);
      method.setStyles({fill: 'black'});
      method.makeHiddenCpoints();
      method.makeHiddenVertex();
      method.removeBoxFromDOM();

      resourceactions.list.splice(index, 1);
      return method;
    },
    put: (target)=>{
      var index = resourceactions.list.findIndex((item)=> item.name == 'put');

      var x =  Math.cos( ( (60 - 2 * 30 ) * Math.PI) / 180) * 
      target.shape.r + target.shape.x ;
      var y =  Math.sin( ( (60 - 2 * 30 ) *  Math.PI) / 180) * 
            target.shape.r + target.shape.y;

      var method = aya.circle(x, y, M_RADIUS, false);
      target.shape.addChild(method);
      method.setStyles({fill: 'black'});
      method.makeHiddenCpoints();
      method.makeHiddenVertex();
      method.removeBoxFromDOM();

      resourceactions.list.splice(index, 1);
      return method;
    },
    del: (target)=>{
      var index = resourceactions.list.findIndex((item)=> item.name == 'del');

      var x =  Math.cos( ( (60 - 3 * 30 ) * Math.PI) / 180) * 
      target.shape.r + target.shape.x ;
      var y =  Math.sin( ( (60 - 3 * 30 ) *  Math.PI) / 180) * 
            target.shape.r + target.shape.y;

      var method = aya.circle(x, y, M_RADIUS, false);
      target.shape.addChild(method);
      method.setStyles({fill: 'black'});
      method.makeHiddenCpoints();
      method.makeHiddenVertex();
      method.removeBoxFromDOM();

      resourceactions.list.splice(index, 1);
      return method;
    },
    remove: (target)=>{
    
    }
  };
  