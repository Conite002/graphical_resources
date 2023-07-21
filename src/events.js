const Events = {
    config: {},

    onmouseover: (target, actions, posx, posy) => {
        if(target.panelPos < 0)
            Panel.add(target, actions, posx, posy);
        target.state = 'component';
    },
    onmouseleave: (target) => {
        target.state = null;
    },
    onclick: (target)=>{
		if(Events.config.node == target)
				Events.config.node = null;
		else
			Events.config.node = target;
    }
}