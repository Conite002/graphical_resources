const { test } = QUnit;
QUnit.module('Resource');

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

test('Resource object checking after its creation', assert=>{
    var res = new Resource({name: "res"});
    assert.equal(res.name, "res");
});

test("Visual representation of a resource ", function(assert) {
    var res = new Resource({ name: "res" });
    assert.equal(res.shape.type, "circle", "set shape");
    assert.equal(res.shape.r, RADIUS, "set r");
    assert.equal(res.shape.x, 0, "set x");
    assert.equal(res.shape.y, 0, "set y");
    assert.equal(res.shape.fill, SH_FILL, "set color");
});


test("Resource position on x_axis and y_axis.", function(assert){
    var res = new Resource({ name: "res", x: 10, y: 5 });
    assert.equal(res.shape.x, 10);
    assert.equal(res.shape.y, 5);
});


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

// test("resource creation with parameters  ", assert => {
//     var res = new Resource({name : "cheapest", x : 10, y : 10, r : 20});
//     assert.equal(res.shape.type, "circle", "set shape");
//     assert.equal(res.shape.r, 20, "set r");
//     assert.equal(res.shape.x, 10, "set x");
//     assert.equal(res.shape.y, 10, "set y");
//     assert.equal(res.name, "cheapest", "set name");
// });

// test("Throws an exception when x attribute isn't a number.", assert => {
//     assert.throws(()=>{
//         new Resource({x: "10"});
//     }, 'x attribute should be a number');
// });

// test("Throws an exception when y attribute isn't a number.", assert => {
//     assert.throws(()=>{
//         new Resource({x: 10, y: "10"});
//     }, 'y attribute should be a number');
// });

// test("Throws an exception when r attribute isn't a number.", assert => {
//     assert.throws(()=>{
//         new Resource({x: 10, y: 10, r: "10"});
//     }, 'r attribute should be a number');
// });

// test("Displaying the name of the resource", assert => {
//     var res = new Resource({name: "cheapest", x: 20, y: 20, r: 20});
//     assert.equal(res.shape.children[0].child.type, "text", "name is a text child");
//     assert.equal(res.shape.children[0].child.text, res.name, "set text value");
//     assert.equal(res.shape.children[0].child.y, res.shape.y + 5);
// });

/**
 * Test: Display a portion of the text when its width is longer that the diameter. 
 */

//  test('methods is array', assert => {
//     var res = new Resource({name: "ozepo", x: 350, y: 330, r: 34, methods: ["GET", "PUT", "POST"], startAngle: 50});
//     assert.ok(Array.isArray(res.methods), 'methods is array');
//   });
  
// test('startAngle is a number', assert => {
//     var res = new Resource({name: "ozepo", x: 350, y: 330, r: 34, methods: ["GET", "PUT", "POST"], startAngle: 50});
//     assert.ok(Number.isInteger(res.startAngle), 'startAngle is a number');
// });

/**
 * Test: Add mouseover and mouseleave on resource
 */

//  test("Add mouseover on the resource", assert => {
//     var res = new Resource({name: "resource", x: 50, y: 50, r: 30});
//     res.shape.addEvent("mouseover", 2);
//     assert.equal(res.shape.events["mouseover"], 2, "set mouseover");
// });

// test("Add mouseleave on the resource", assert => {
//     var res = new Resource({name: "resource", x: 50, y: 50, r: 30});
//     res.shape.addEvent("mouseleave", 2);
//     assert.equal(res.shape.events["mouseleave"], 2, "set mouseleave");
// });

// QUnit.test("addPanel adds arcs and text to the resource", assert => {
//     var res = new Resource({name: "resource", x: 50, y: 50, r: 30});
//     var actions = ["get", "put", "post", "del"];
//     res.addPanel(actions);

//     assert.equal(res.actions.length, actions.length, "addPanel adds the correct number of actions");
//     for (var i = 0; i < actions.length; i++) {
//         console.log(res.actions[i].type)
//         assert.equal(res.actions[i].type, "arc", `action ${i+1} is an arc`);
//         assert.equal(res.actions[i].children[0].child.type, "text", `action ${i+1} has a text child`);
//         assert.equal(res.actions[i].children[0].child.text, actions[i], `action ${i+1} has the correct text value`);
//     }
// });

// QUnit.test("removePanel removes all actions from the resource", assert => {
//     var res = new Resource({name: "resource", x: 50, y: 50, r: 30});
//     var actions = ["get", "put", "post", "del"];
//     res.addPanel(actions);
//     res.removePanel();

//     assert.equal(res.actions.length, 0, "removePanel removes all actions from the resource");
// });




// QUnit.test("Methods are correctly assigned to the resource", assert => {
//     var res = new Resource({name: "resource", x: 50, y: 50, r: 30});
//     var actions = ["GET", "PUT", "POST", "DELETE"];
//     res.addPanel(actions);
//     assert.deepEqual(res.actions.length, methods.length, "methods are correctly assigned to the resource");
// });
