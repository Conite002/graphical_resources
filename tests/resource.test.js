const { test } = QUnit;
QUnit.module('Resource');


/**
 * Tests related to exceptions handling
 */

test("Throws an exception when name attribute isn't a string.", assert =>{
    assert.throws(()=>{
        new Resource({ name: null });
    }, "name should be a string.");
});

test("Throws an exception when name attribute is an empty string.", assert =>{
    assert.throws(()=>{
        new Resource({ name: "" });
    }, "name should be a no empty.");
});


/**
 * Tests related to resource creation
 */

test('Resource object checking after its creation', assert=>{
    var res = new Resource({name: "res"});
    assert.equal(res.name, "res");
});

test("Visual representation of a resource ", function(assert) {
    var res = new Resource({ name: "res" });
    assert.equal(res.shape.type, "circle", "set shape");
    assert.equal(res.shape.r, R_RADIUS, "set r");
    assert.equal(res.shape.x, 0, "set x");
    assert.equal(res.shape.y, 0, "set y");
    assert.equal(res.shape.fill, SH_FILL, "set color");
});


test("Resource position on x_axis and y_axis.", function(assert){
    var res = new Resource({ name: "res", x: 10, y: 5 });
    assert.equal(res.shape.x, 10);
    assert.equal(res.shape.y, 5);
});


/**
 * Tests related to the resource name
 * 
 */
test("setName() - set name ", assert =>{
    var res = new Resource({ name:"res"});
    res.setName("res2");
    assert.equal(res.name, "res2", "name should be a string");
});

test("Resource name - add a text element to the resource", assert=>{
    var res = new Resource({ name: "res"});
    assert.equal(res.shape.children.length, 1, "one item");
    assert.equal(res.shape.children[0].child.type, "text", "type checking");
    assert.equal(res.shape.children[0].child.text, res.name, "set text value");
});

test("getText() - create hidden span text with the given text", assert => {
    var text = "resource";
    var textspan = getText(text);
    assert.equal(textspan.tagName.toLowerCase(), "span", "span created");
    assert.equal(textspan.textContent, text, "textspan contains text");
    assert.equal(textspan.style.visibility, "hidden", "textspan has hidden visibility");
    assert.equal(textspan.style.position, "absolute", "textspan has absolute position");
    assert.equal(textspan.style.whiteSpace, "nowrap", "textspan has nowrap whiteSpace");
    assert.ok(document.body.contains(textspan), "textspan is added from the document body");
});

test("getText() - get correct testspan width", assert =>{
    var text = "resource";
    var textspan = getText(text);
    assert.equal(textspan.width, textspan.offsetWidth, "width and offsetWidth are equals");
});

test("Resource name - set text position element to the resource", assert=>{
    var res = new Resource({ name: "res"});
    var t_width = getText(res.name).width;
    assert.equal(
        res.shape.children[0].child.x,
        res.shape.x - res.shape.r + (res.shape.r * 2 - t_width)/4,
        "set x"
    );
    assert.equal(res.shape.children[0].child.y, res.shape.y + DELTA_Y, "set y");
});

test("Resource name - reduce text element to the resource when it's too long", assert=>{
    var res = new Resource({ name: "resioioezoziez556566599897854"});
    var textWithoutEllipsis = res.shape.children[0].child.text.slice(0, -3);
    assert.ok(res.shape.r*2 > getText(textWithoutEllipsis).width, "diameter is greater than textspan width");
    assert.ok(res.name.includes(textWithoutEllipsis), 'text value is in resource name');
});

/**
 * Test: Add mouseover and mouseleave on resource
 */

test("Add mouseover on the resource", assert => {
    var res = new Resource({name: "resource"});
    assert.equal(typeof res.shape.events["mouseover"], "function", "set mouseover");
});


test("Add mouseleave on the resource", assert => {
    var res = new Resource({name: "resource"});
    assert.equal(typeof res.shape.events["mouseleave"], "function", "set mouseleave");
});


// onclick event for configuring the Resource
test("Add onclick event on the resource", assert => {
    var res = new Resource({name: "resource"});
    assert.equal(typeof res.shape.events["click"], "function", "onclick event setted");
});


/**
 * Tests related to events callbacks on the resource
 */

test('mouseovercb() - set resource state to component', assert=>{
    var res = new Resource({name: "resource"});

    assert.equal(res.state, undefined, 'state is undefined');
    resmouseovercb(res);
    assert.equal(res.state, 'component', 'state changed to component');
});


test('mouseleavecb() - set resource state to null', assert=>{
    var res = new Resource({name: "resource"});
    resmouseleavecb(res);
    assert.equal(res.state, null, 'state = null');
});


// onclick event callback for configuring the Resource
test('onclick() - set config node to the clicked node', assert=>{
    var resource = new Resource();

    assert.equal(Events.config.node, null, 'node is undefined');

    Events.onclick(resource);
    assert.equal(Events.config.node.type, resource.type, 'set config node');
});


/**
 * Tests releted to creating the corresponding method when a mousedown has been applied on an action
 */
test("resourceactions.get(target) - create the get method as a child of the resource", assert=> {
    var res = new Resource({ name: "res"});
    var method = resourceactions.get(res);
    assert.equal(method.type, 'circle');
    assert.equal(method.fill, 'black', 'black point');
    assert.equal(method.r, 3, 'radius is 5');
    assert.equal(method.x, Math.cos(((60 - 0 * 30) * Math.PI) / 180) * res.shape.r + res.shape.x, "set x");
    assert.equal(method.y, Math.sin(((60 - 0 * 30) * Math.PI) / 180) * res.shape.r + res.shape.y, "set y");
});


test("resourceactions.post(target) - create the post method as a child of the resource", assert=> {
    var res = new Resource({ name: "res"});
    var method = resourceactions.post(res);
    assert.equal(method.type, 'circle');
    assert.equal(method.fill, 'black', 'black point');
    assert.equal(method.r, 3, 'radius is 5');
    assert.equal(method.x, Math.cos(((60 - 1 * 30 ) * Math.PI) / 180) * res.shape.r + res.shape.x, "set x");
    assert.equal(method.y, Math.sin(((60 - 1 * 30) * Math.PI) / 180) * res.shape.r + res.shape.y, "set y");
});


test("resourceactions.put(target) - create the put method as a child of the resource", assert=> {
    var res = new Resource({ name: "res"});
    var method = resourceactions.put(res);
    assert.equal(method.type, 'circle');
    assert.equal(method.fill, 'black', 'black point');
    assert.equal(method.r, 3, 'radius is 5');
    assert.equal(method.x, Math.cos(((60 - 2 * 30 ) * Math.PI) / 180) * res.shape.r + res.shape.x, "set x");
    assert.equal(method.y, Math.sin(((60 - 2 * 30) * Math.PI) / 180) * res.shape.r + res.shape.y, "set y");
});

test("resourceactions.del(target) - create the delete method as a child of the resource", assert=> {
    var res = new Resource({ name: "res"});
    var method = resourceactions.del(res);
    assert.equal(method.type, 'circle');
    assert.equal(method.fill, 'black', 'black point');
    assert.equal(method.r, 3, 'radius is 5');
    assert.equal(method.x, Math.cos(((60 - 3 * 30 ) * Math.PI) / 180) * res.shape.r + res.shape.x, "set x");
    assert.equal(method.y, Math.sin(((60 - 3 * 30) * Math.PI) / 180) * res.shape.r + res.shape.y, "set y");
});


test("resactions.remove(target) - delete the resource with its methods or actions", assert=> {
    var resource = new Resource({ name: "res"});
    assert.false(res.isDeleted, 'not yet deleted');

    resactions.remove(resource);
   
    assert.true(res.isDeleted, 'resource deleted');
});