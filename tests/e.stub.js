class Resource{
    constructor(){
        this.shape = aya.circle(0,0,RADIUS);
        this.panelPos = -1;
            this.actions_t = [
                {name: "get", path: "src/images/get.jpg"},
                {name: "post", path: "src/images/post.jpg"},
                {name: "put", path: "src/images/put.jpg"},
                {name: "del", path: "src/images/delete.jpg"},
                // {name: "remove", path: "src/images/remove.jpg"}
            ];
        this.actions = resourceactions;
        this.type = 'resource';
    }
}

class Path{
    constructor(props = {path: '/'}){
        this.shape = aya.circle(0,0, P_RADIUS);
        this.panelPos = -1;
        this.actions = pathactions;
        this.type = 'path';
    }
}

// class Variable{
//     constructor(){
//         this.shape = aya.lozenge(0,0,L_WIDTH, L_HEIGHT);
//         this.panelPos = -1;
//         this.actions = varactions;
//         this.type = 'variable';
//     }
// }

var Panel = {
    add: (target, action, e)=>{

    }
};