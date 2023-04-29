QUnit.module('Path');

/***************************** visual representation of a path *********************************/

QUnit.test("default visual representation of a path", assert =>{
	var p = new Path("/");

	assert.equal(p.shape.type, "circle", "the shape must be a circle");
	assert.equal(p.shape.form.r, 15, "the circle radius must be 15px");
	assert.equal(p.shape.form["stroke-width"], "2px", "the border width must be 2px");
	assert.equal(p.shape.form["stroke"], "green", "the border color must be green");
	assert.equal(p.shape.form["fill"], "gray", "the circle color must be gray");
});

QUnit.test("checking that the shape is effectively a circle", assert =>{
	
});


QUnit.test("throws an exception when the path attribute isn't defined", assert =>{

    assert.throws(function(){
    	new Path();
    },"path's creation requires a name");
});

QUnit.test("throws an exception when the first character of a path isn't a /", assert =>{
	
});

QUnit.test("throws an exception when it appears two consecutive / symbols", assert =>{
	
});

QUnit.test("throws an exception when the first character of a path isn't a /", assert =>{
	
});

QUnit.test("throws an exception when the first character of a path isn't a /", assert =>{
	
});

QUnit.test("throws an exception when uri portion doesn't respect REST specification", assert =>{
	
});
