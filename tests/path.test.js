const {test} = QUnit;
QUnit.module('Path');


/**
 * Tests related to path creation
 */
test("default path creation", assert=>{
    var path = new Path();
    assert.equal(path.path, '/', 'set path');
});

test("visual representation of a path", assert=>{
    var path = new Path();
    assert.equal(path.path, '/', 'set path');
    assert.equal(path.shape.type, 'circle', 'set aya shape');
    assert.equal(path.shape.x, 0, 'set x');
    assert.equal(path.shape.y, 0, 'set y');
    assert.equal(path.shape.r, P_RADIUS, 'set radius');
    assert.equal(path.shape['fill'], P_FILL, 'set fill');
    assert.equal(path.shape['stroke'], P_STROKE, 'set stroke');
    assert.equal(path.shape['strokeWidth'], P_STROKEWIDTH, 'set stroke-width');

});


/**
 * Tests related to path name displaying
 */
test("display path name", assert=>{
    var path = new Path({path: 'api/v1'});
    assert.equal(path.path, 'api/v1', 'set path');
    assert.equal(path.shape.children[0].child.type, 'text', 'path name as a child');
    assert.equal(path.shape.children[0].child.x, path.shape.x - path.shape.r, 'set x');
    assert.equal(path.shape.children[0].child.y, path.shape.y - path.shape.r - DELTA_Y, 'set y');
    assert.equal(path.shape.children[0].child.text, 'api/v1', 'set text value');
});


test("Path position on x_axis and y_axis.", function(assert){
    var path = new Path({x: 10, y: 5 });
    assert.equal(path.shape.x, 10);
    assert.equal(path.shape.y, 5);
});


/**
 * Tests related to setPath() method
 */
test("setPath() - set path attribut", assert=>{
    var path = new Path();

    path.setPath('api/v1');
    assert.equal(path.path, 'api/v1', 'set path');
});



/**
 * Tests related to mouseover event on the path' shape
 */
test("add mouseover on the shape", assert=>{
    var path = new Path();
    assert.equal(typeof path.shape.events['mouseover'], 'function', 'mouseover defined');

});



/**
 * Tests related to mouseleave event on the path shape
 */

test("add mouseleave on the shape", assert=>{
    var path = new Path();
    assert.equal(typeof path.shape.events["mouseleave"], "function", "set mouseleave");

});


/**
 * Tests related to mouseover on the panel
 */

test('mouseovercb() - set path state to component', assert=>{
    var path = new Path();

    assert.equal(path.state, undefined, 'state is undefined');
    pathmouseovercb(path);
    assert.equal(path.state, 'component', 'state changed to component');
});

test('mouseleave() - set path state to null', assert=>{
    var path = new Path();

    pathmouseleavecb(path);
    assert.equal(path.state, null, 'state = null');
});


/**
 * Tests releted to creating the corresponding method when a mousedown has been applied on an action
 */
test("pathactions.path(target) - create the path component as a child of the path", assert=> {
    var path = new Path();
    pathactions.path(path);

    assert.equal(path.children[0].type, 'path', 'path created');
});

test("pathactions.path(target) - create the variable component as a child of the path", assert=> {
    var path = new Path();
    pathactions.variable(path);

    assert.equal(path.children[0].type, 'variable', 'variable created');
});

test("pathactions.resource(target) - create the resource component as a child of the path", assert=> {
    var path = new Path();
    pathactions.resource(path);

    assert.equal(path.children[0].type, 'resource', 'path created');
});

// test("pathactions.remove(target) - delete the path with its children", assert=> {
//     var path = new Path();
//     pathactions.remove(path);

//     assert.equal(path.shape.children.length, 0, 'path deleted');
// });