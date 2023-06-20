QUnit.module('Resource');


QUnit.test("Default representation of a resource ", function(assert) {
    var res = new Resource();
    assert.equal(res.shape.type, "circle", "set shape");
    assert.equal(res.shape.r, 10, "set r");
    assert.equal(res.shape.x, 0, "set x");
    assert.equal(res.shape.y, 0, "set y");
    assert.equal(res.shape.fill, "#D9D7F1", "set color");
    assert.equal(res.name, "dummy", "set name");
});

QUnit.test("resource creation with parameters  ", assert => {
    var res = new Resource({name : "cheapest", x : 10, y : 10, r : 20});
    assert.equal(res.shape.type, "circle", "set shape");
    assert.equal(res.shape.r, 20, "set r");
    assert.equal(res.shape.x, 10, "set x");
    assert.equal(res.shape.y, 10, "set y");
    assert.equal(res.name, "cheapest", "set name");
});

QUnit.test("Throws an exception when x attribute isn't a number.", assert => {
    assert.throws(()=>{
        new Resource({x: "10"});
    }, 'x attribute should be a number');
});

QUnit.test("Throws an exception when y attribute isn't a number.", assert => {
    assert.throws(()=>{
        new Resource({x: 10, y: "10"});
    }, 'y attribute should be a number');
});

QUnit.test("Throws an exception when r attribute isn't a number.", assert => {
    assert.throws(()=>{
        new Resource({x: 10, y: 10, r: "10"});
    }, 'r attribute should be a number');
});

QUnit.test("Displaying the name of the resource", assert => {
    var res = new Resource({name: "cheapest", x: 20, y: 20, r: 20});
    assert.equal(res.shape.children[0].child.type, "text", "name is a text child");
    assert.equal(res.shape.children[0].child.text, res.name, "set text value");
    assert.equal(res.shape.children[0].child.y, res.shape.y + 5);
    /* res.shape.children[0].child.x is setted by using getBBox method of  dom element */
});

/**
 * Test: Display a portion of the text when its width is longer that the diameter. 
 */

//  QUnit.test('methods is array', assert => {
//     var res = new Resource({name: "ozepo", x: 350, y: 330, r: 34, methods: ["GET", "PUT", "POST"], startAngle: 50});
//     assert.ok(Array.isArray(res.methods), 'methods is array');
//   });
  
// QUnit.test('startAngle is a number', assert => {
//     var res = new Resource({name: "ozepo", x: 350, y: 330, r: 34, methods: ["GET", "PUT", "POST"], startAngle: 50});
//     assert.ok(Number.isInteger(res.startAngle), 'startAngle is a number');
// });


  
QUnit.test("addPanel adds arcs and text to the resource", assert => {
    var res = new Resource({name: "resource", x: 50, y: 50, r: 30});
    var actions = ["get", "put", "post", "del"];
    res.addPanel(actions);

    assert.equal(res.actions.length, actions.length, "addPanel adds the correct number of actions");
    for (var i = 0; i < actions.length; i++) {
        console.log(res.actions[i].type)
        assert.equal(res.actions[i].type, "arc", `action ${i+1} is an arc`);
        assert.equal(res.actions[i].children[0].child.type, "text", `action ${i+1} has a text child`);
        assert.equal(res.actions[i].children[0].child.text, actions[i], `action ${i+1} has the correct text value`);
    }
});

QUnit.test("removePanel removes all actions from the resource", assert => {
    var res = new Resource({name: "resource", x: 50, y: 50, r: 30});
    var actions = ["get", "put", "post", "del"];
    res.addPanel(actions);
    res.removePanel();

    assert.equal(res.actions.length, 0, "removePanel removes all actions from the resource");
});

QUnit.test("Event listeners are added to the resource shape", assert => {
    var res = new Resource({name: "resource", x: 50, y: 50, r: 30});
    var shape = res.shape;
    console.log(shape.events)
    assert.equal(shape.events.mouseover.length, 1, "mouseover event listener is added");
    assert.equal(shape.events.mouseleave.length, 1, "mouseleave event listener is added");
});

QUnit.test("Methods are correctly assigned to the resource", assert => {
    var res = new Resource({name: "resource", x: 50, y: 50, r: 30});
    assert.deepEqual(res.methods, ["GET", "PUT", "POST", "DELETE"], "methods are correctly assigned to the resource");
});
