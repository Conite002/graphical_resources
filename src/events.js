const Events = {
    onmouseover: (target, actions, posx, posy) => {
        if(target.panelPos < 0)
            Panel.add(target, actions, posx, posy);
        target.state = 'component';
    },
    onmouseleave: (target) => {
        target.state = null;
    }
}