class Resource{
    constructor(){
        this.shape = aya.circle(0,0,R_RADIUS);
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
        this.children = [];
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

class Layout{
    static getClosestPosition(col, lig){
        return {
            col: 0,
            lig: 0
        };
    }

    static mark(col, lig){
    }

    static unmark(col, lig){
    }
};


class Register{
    static add(id, obj){}

    static findAllLink(component){ return;}
}

var resourceactions = {};

var varactions = {};