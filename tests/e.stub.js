var resource = ()=>  {
    return {
        shape: aya.circle(0,0,RADIUS),
        panelPos: -1,
        actions: resourceactions
    }
};

var path = ()=> {
    return {
        shape: aya.circle(0,0,RADIUS),
        panelPos: -1
    }
};

var variable = ()=> {
    return {
        shape: aya.lozenge(0,0,RADIUS),
        panelPos: -1
    }
};