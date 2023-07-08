const {test} = QUnit;

QUnit.module('Variable');

/**
 * Tests related to variable creation
 */
test("default variable creation", assert=>{
    var v = new Variable();

    assert.equal(v.name, 'dummy', 'default name');
    assert.equal(v.style, 'template', 'template style by default');
});

test("variable creation with parameter", assert=>{
    var v = new Variable({name: 'userId', style: 'template'});

    assert.equal(v.name, 'userId', 'variable name');
    assert.equal(v.style, 'template', 'template style');
});


test("throws an exception when style attribute is not correct", assert=>{
    assert.throws(()=>{
        new Variable({name: 'userId', style: 'unexpected'});
    }, 'style is not correct');
});

test("visual representation of a variable", assert=>{
    var v = new Variable({name: 'userId', style: 'template'});

    assert.equal(v.shape.type, 'lozenge', 'shape type');
    assert.equal(v.shape.x, 0, 'set x');
    assert.equal(v.shape.y, 0, 'set y');
    assert.equal(v.shape.width, L_WIDTH, 'set width');
    assert.equal(v.shape.height, L_HEIGHT, 'set height');
    assert.equal(v.shape['fill'], L_FILL, 'set fill');
    assert.equal(v.shape['stroke'], L_STROKE, 'set stroke');
    assert.equal(v.shape['strokeWidth'], L_STROKEWIDTH, 'set stroke-width');
});

test("Variable position on x_axis and y_axis.", function(assert){
    var variable = new Variable({x: 10, y: 5 });
    assert.equal(variable.shape.x, 10);
    assert.equal(variable.shape.y, 5);
});


/**
 * Tests related to setName() and setStyle() method
 */
test("setName() - set variable name", assert=>{
    var v = new Variable({name: 'userId', style: 'template'});

    v.setName('postId');
    assert.equal(v.name, 'postId', 'set name');
});

test("setStyle() - throws an exception when style is not correct", assert=>{
    var v = new Variable({name: 'userId', style: 'template'});
    assert.throws(()=>{
        v.setStyle('unexpected');
    }, 'style value is not correct');
});

test("setStyle() - set variable style", assert=>{
    var v = new Variable({name: 'userId', style: 'template'});

    v.setStyle('query');
    assert.equal(v.style, 'query', 'set query');
});


/**
 * Tests related to variable name displaying
 */
test("display variable name when style is template", assert=>{
    var v = new Variable({name: 'userId', style: 'template'});

    assert.equal(v.shape.children[0].child.type, 'text', 'set type of variable\'s child');
    assert.equal(v.shape.children[0].child.x, v.shape.x - v.shape.width, 'set x');
    assert.equal(v.shape.children[0].child.y, v.shape.y - DELTA_Y, 'set y');
    assert.equal(v.shape.children[0].child.text, '{template}', 'set text value');
});

test("display variable name when style is query", assert=>{
    var v = new Variable({name: 'userId', style: 'query'});

    assert.equal(v.shape.children[0].child.type, 'text', 'set type of variable\'s child');
    assert.equal(v.shape.children[0].child.x, v.shape.x - v.shape.width, 'set x');
    assert.equal(v.shape.children[0].child.y, v.shape.y - DELTA_Y, 'set y');
    assert.equal(v.shape.children[0].child.text, '{query?}', 'set text value');

});

test("display variable name when style is plain", assert=>{
    var v = new Variable({name: 'userId', style: 'plain'});

    assert.equal(v.shape.children[0].child.type, 'text', 'set type of variable\'s child');
    assert.equal(v.shape.children[0].child.x, v.shape.x - v.shape.width, 'set x');
    assert.equal(v.shape.children[0].child.y, v.shape.y - DELTA_Y, 'set y');
    assert.equal(v.shape.children[0].child.text, '{plain}', 'set text value');
});


/**
 * Tests related to mouseover event on the variable' shape
 */
test("add mouseover on the shape", assert=>{
    var v = new Variable({name: 'userId', style: 'plain'});
    assert.equal(typeof v.shape.events['mouseover'], 'function', 'mouseover defined');
});

test("Add mouseleave on the variable", assert => {
    var variable = new Variable();
    assert.equal(typeof variable.shape.events["mouseleave"], "function", "set mouseleave");
});


/**
 * Tests related to events callbacks on the resource
 */

test('mouseovercb() - set variable state to component', assert=>{
    var variable = new Variable();

    assert.equal(variable.state, undefined, 'state is undefined');
    varmouseovercb(variable);
    assert.equal(variable.state, 'component', 'state changed to component');
});

test('mouseleave() - set variable state to null', assert=>{
    var variable = new Variable();

    varmouseleavecb(variable);
    assert.equal(variable.state, null, 'state = null');
});

/**
 * Tests releted to creating the corresponding method when a mousedown has been applied on an action
 */
test("varactions.path(target) - create the path component as a child of the variable", assert=> {
    var variable = Variable();
    varactions.path(variable);

    assert.equal(variable.shape.children[0].child.type, 'path', 'path created');
});

test("varactions.variable(target) - create the variable component as a child of the variable", assert=> {
    var variable = Variable();
    varactions.variable(variable);

    assert.equal(variable.shape.children[0].child.type, 'variable', 'variable created');
});

test("varactions.resource(target) - create the resource component as a child of the variable", assert=> {
    var variable = Variable();
    varactions.resource(variable);

    assert.equal(variable.shape.children[0].child.type, 'resource', 'path created');
});

// test("varactions.remove(target) - delete the variable with its children", assert=> {
//     var variable = Variable();
//     varactions.remove(variable);

//     assert.equal(variable.shape.children.length, 0, 'variable deleted');
// });