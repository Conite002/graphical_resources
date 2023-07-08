const {test} = QUnit;
QUnit.module("Panel", {
    beforeEach: function () {
        resourceactions.list =   [
            {name: "get", path: "src/images/get.jpg"},
            {name: "post", path: "src/images/post.jpg"},
            {name: "put", path: "src/images/put.jpg"},
            {name: "del", path: "src/images/delete.jpg"}
        ];
    }
});


/**
 * Tests related to setting path and name of the action
 */

test("Panel.path2name() - retrieve the name from the path", assert=>{
    var name = Panel.path2name(resourceactions.list, "src/images/get.jpg");

    assert.equal(name, "get", "get name");
});

test("Panel.path2name()  - return '' when the name is not found", assert=>{
    var name = Panel.path2name(resourceactions.list, "");

    assert.equal(name, "", "return empty string");
});


/**
 * Tests related to adding the panel and the actions inside
 */
test("Panel.add() - add the empty panel", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 0, 0);

    assert.equal(res.shape.children[0].child.type, "rectangle", "panel has a rectangle as support");

    assert.equal(res.shape.children[0].child.x, res.shape.x, "panel x-absc");
    assert.equal(res.shape.children[0].child.y, res.shape.y, "panel y-absc");
    
    assert.equal(res.shape.children[0].child.width,  3 * ImSZ + 2 * 6, "panel width");
    assert.equal(res.shape.children[0].child.height, Math.floor(resourceactions.list.length/2) * ImSZ+ Math.floor(resourceactions.list.length/2) *5, "panel height");
    
    assert.equal(res.shape.children[0].child["stroke-width"], "0px","the border width must be 0 px");
    assert.equal(res.shape.children[0].child["opacity"], 0, "panel opacity");
});


test("Panel.add() - panel must cover the component", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 0, 0);

    assert.ok(res.shape.children.length, "the shape has a child");
    assert.equal(res.shape.children[0].child.type, "rectangle", "panel has a rectangle as support");
    assert.equal(res.shape.children[0].child.offsetX, -2, "panel offsetX");
    assert.equal(res.shape.children[0].child.offsetY, 0, "panel offsetY");
});


test("Panel.add() - add actions to the panel", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 0, 0);

    assert.equal(res.shape.children.length, resourceactions.list.length + 1, "resource children");
    res.shape.children.map(({child}, index) => {
        if (index){
            assert.equal(child.type, "image", "children are images");
            assert.equal(child.offsetX, 5, "set offsetX");
            assert.equal(child.width, ImSZ, "the width of the child must be 30 px");
            assert.equal(child.height, ImSZ, "the height of the child must be 30 px");
            assert.equal(child.path, resourceactions.list[index - 1].path, "check the correct path of each image");
            assert.equal(child.name, resourceactions.list[index - 1].name, "check the correct name of each image");
        }
    });
});

test("Panel.add(target, actions, posx, posy) - set y space and x space between actions", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    // actions are displayed on three columns
    assert.equal(res.shape.children[1].child.x, 100, "set x to posX");
    assert.equal(res.shape.children[1].child.y, 100, "set y to posY");

    assert.equal(res.shape.children[2].child.x, 100 + ImSZ + 5, "set x");
    assert.equal(res.shape.children[2].child.y, 100, "set y");


    assert.equal(res.shape.children[3].child.x, 100 + ImSZ * 2 + 2 * 5, "set x");
    assert.equal(res.shape.children[3].child.y, 100, "set y");


    assert.equal(res.shape.children[4].child.x, 100, "set x to posX");
    assert.equal(res.shape.children[4].child.y, 100 + ImSZ, "set y");
});


/**
 * Tests related to adding event on the panel
 */
test("Panel.add() - add mouseover on the panel", assert=> {
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    assert.equal(typeof res.shape.children[0].child.events['mouseover'], 'function', "mouseover defined");
});

test("Panel.add() - add mouseleave on the panel", assert=> {
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    assert.equal(typeof res.shape.children[0].child.events['mouseleave'], 'function', "mouseleave defined");
});

test("Panel.add() - add mouseover on the svg", assert=> {
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    assert.equal(typeof res.shape.svg_events['mouseover'], 'function', "mouseover defined");
});


/**
 * Tests related to adding events on the actions inside the panel
 */
test("Panel.add() - add mouseover on the actions", assert=> {
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    res.shape.children.map(({child}, index) =>{
        if (index)
            assert.equal(typeof child.events['mouseover'], 'function', "mouseover defined");
    });
});

test("Panel.add() - add mouseleave on the actions", assert=> {
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    res.shape.children.map(({child}, index) =>{
        if (index)
            assert.equal(typeof child.events['mouseleave'], 'function', "mouseleave defined");
    });
});

test("Panel.add() - add mousedown on the actions", assert=> {
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    res.shape.children.map(({child}, index) =>{
        if (index)
            assert.equal(typeof child.events['mousedown'], 'function', "mousedown defined");
    });
});

/**
 * Tests releted to creating the corresponding method when a mousedown has been applied on an action
 */

// resource actions

test("resourceactions.get(target) - get action should be deleted", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    Panel.remove(res);
    resourceactions.get(res);
    Panel.add(res, resourceactions.list, 100, 100);

    res.shape.children.map(({child}, index) =>{
        if (index)
            assert.notEqual(child.name, 'get', 'get action has been deleted');
    });
});

test("resourceactions.post(target) - post action should be deleted", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    Panel.remove(res);
    resourceactions.post(res);
    Panel.add(res, resourceactions.list, 100, 100);

    res.shape.children.map(({child}, index) =>{
        if (index)
            assert.notEqual(child.name, 'post', 'post action has been deleted');
    });
});

test("resourceactions.put(target) - put action should be deleted", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    Panel.remove(res);
    resourceactions.put(res);
    Panel.add(res, resourceactions.list, 100, 100);

    res.shape.children.map(({child}, index) =>{
        if (index)
            assert.notEqual(child.name, 'put', 'put action has been deleted');
    });
});


/**
 * Tests related to changing the target state according to the event applied on the actions or the panel
 */

test("mouseovercb() - change target state", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    panelmouseovercb(res);
    assert.equal(res.state, 'panel', "set state to panel");
});

test("mouseleavecb() - change target state", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    panelmouseovercb(res);
    assert.equal(res.state, 'panel', "set state to panel");
    panelmouseleavecb(res);
    assert.equal(res.state, null, "set state to null");
});

test("mousedowncb() - remove the panel and execute the action", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    assert.equal(res.state, null, "state panel is null");
    assert.true(res.panelPos >= 0, 'panel has been added');
    var e = {
        target: {
            href: {
                baseVal: "src/images/get.jpg"
            }
        }
    };
    actionsmousedowncb(res, resourceactions.list, e);
    assert.equal(res.shape.children.length, 1, 'panel is removed');
    assert.equal(res.panelPos, -1, 'panelPos reset to -1');
    assert.equal(res.shape.svg_events['mouseover'], undefined, "mouseover is deleted");
});

test("svgmouseovercb() - remove the panel", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    panelmouseovercb(res);
    assert.equal(res.state, 'panel', "set state to panel");
    panelmouseleavecb(res);
    assert.equal(res.state, null, "state panel is null");
    assert.true(res.panelPos >= 0, 'panel has been added');
    svgmouseovercb(res);
    assert.equal(res.shape.children.length, 0, 'panel is removed');
    assert.equal(res.panelPos, -1, 'panelPos reset to -1');
    assert.equal(res.shape.svg_events['mouseover'], undefined, "mouseover is deleted");
});


/**
 * Tests related to removing the panel
 */

test("Panel.remove(target) - return null when panelPos < 0", assert=>{
    var res = resource();
    assert.true(res.panelPos < 0, 'panelPos < 0');
    var isRemoved = Panel.remove(res);
    assert.equal(isRemoved, null, 'return null');
});

test("Panel.remove(target) - delete the panel and actions from component's children and the DOM", assert=>{
    var res = resource();
    Panel.add(res, resourceactions.list, 100, 100);
    assert.true(res.panelPos >= 0, 'panel is added');
    Panel.remove(res);
    assert.equal(res.shape.children.length, 0, 'panel is removed');
    assert.equal(res.panelPos, -1, 'panelPos reset to -1');
});