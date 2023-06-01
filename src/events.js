const Events = {
    onmouseover: (target, actions) => {
        target.addPanel(actions);
    },
    onmouseleave: (target) => {
        target.removePanel();
    }
}