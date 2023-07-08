class Resource{
    constructor(){
        this.shape = aya.circle(0,0,RADIUS);
        this.panelPos = -1;
        this.action = resourceactions;
        this.type = 'resource';
    }
}

// class Path{
//     constructor(props = {path: '/'}){
//         this.shape = aya.circle(0,0, P_RADIUS);
//         this.panelPos = -1;
//         this.action = pathactions;
//         this.type = 'path';
//     }
// }

class Variable{
    constructor(){
        this.shape = aya.lozenge(0,0,L_WIDTH, L_HEIGHT);
        this.panelPos = -1;
        this.action = varactions;
        this.type = 'variable';
    }
}

var Panel = {
    add: (target, action, e)=>{

    }
};