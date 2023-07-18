var resourceactions = {
    get: (target)=>{
      var index = target.actions_t.findIndex((item)=> item.name == 'get');
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

      target.actions_t.splice(index, 1);
      return method;
    },
    post: (target)=>{
      var index = target.actions_t.findIndex((item) => item.name == 'post');

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

      target.actions_t.splice(index, 1);
      return method;
    },
    put: (target)=>{
      var index = target.actions_t.findIndex((item)=> item.name == 'put');

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

      target.actions_t.splice(index, 1);
      return method;
    },
    del: (target)=>{
      var index = target.actions_t.findIndex((item)=> item.name == 'del');

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

      target.actions_t.splice(index, 1);
      return method;
    },
    remove: (target)=>{
      Layout.unmark(Math.floor(target.shape.x/Layout.cellW), Math.floor(target.shape.y/Layout.cellH));
      
      let links = Register.findAllLink(target.shape);

      links.map((lk)=>{
        lk.dest_end_csvg.remove();
        lk.line.removeFromDOM();
        Register.clear(lk.uuid);
      });
      target.shape.removeFromDOM();
  }
  };
  