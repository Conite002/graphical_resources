QUnit.module('Variable');

/****visual representation of a variable****/

QUnit.test("default creation of a variable", assert =>{
	var v = new Variable();
	assert.equal(v.name, "dummy", "the name must be dummy");
	assert.equal(v.style, "template", "the style must be template");
});

QUnit.test("throws an exception when style attribute isn't correct", assert =>{
	assert.throws(function(){
		new Variable({style:"qwerty"});
	}, "the style must be a correct style");	
});

QUnit.test("creation of a variable with parameters", assert =>{
	var v = new Variable({name: "dummy", style:"template"});
	assert.equal(v.name, "dummy", "the name must be dummy");
	assert.equal(v.style, "template", "the style must be template");	
});

QUnit.test("visual representation of a variable", assert =>{ 
	var v = new Variable();
    assert.equal(v._shape.type, "lozenge", "the shape must be a lozenge");
	assert.equal(v._shape.shape.width, 10, "the lozenge width must be 10px");
	assert.equal(v._shape.shape.height, 15, "the lozenge height must be 15px");
	assert.equal(v._shape.shape["strokewidth"], "2px", "the border width must be 2px");
	assert.equal(v._shape.shape["stroke"], "black", "the border color must be black");
	assert.equal(v._shape.shape["fill"], "yellow", "the circle lozenge must be yellow");
}); 

QUnit.test("setting the position of the name of the variable",assert =>{
	var v = new Variable();
	assert.equal(v._shape.shape.children[0].child.type,"text","the name must be a text");
	assert.equal(v._shape.shape.children[0].child.offsetX, 0, "set offsetX");
	assert.equal(v._shape.shape.children[0].child.offsetY, -10, "set offsetY");
});

/********************* panel of possible actions *************************/

/*QUnit.test("ensure that we define an hover event on a variable component", assert =>{
	var paramsObj = {name:"someName" ,style:"template"};
	var v = new Variable(paramsObj);
	var ev = null;
	for(e of v.shape.events)
		if(e["mouseover"])
			ev = e;
	assert.ok(ev, "mouseover event is defined");	    
});

QUnit.test("open an empty panel when we hover over a variable", assert =>{
	var paramsObj = {name:"someName" ,style:"template"};
	var v = new Variable(paramsObj);
    
    v.addPanel(); 
    assert.ok(v.shape.form.children.length, "the shape has a child"); 
    assert.equal(v.shape.form.children[1].child.type, "rectangle", "panel has a rectangle as support");
    assert.equal(v.shape.form.children[1].child.form["stroke-width"], "0px", "the border width must  be 2 px");
});

/*QUnit.test("add all action on the panel when we hover over it", assert =>{

});

/*QUnit.test("actions are display on two columns", assert =>{

});

QUnit.test("panel must be deleted when we leaving it", assert =>{

});

QUnit.test("panel must be deleted when leaving on variable", assert =>{

});

QUnit.test("panel must stay opened when mouse is moving from variable to panel", assert =>{

});

QUnit.test("adding mousedown on every actions in the panel", assert =>{

});

/************ variable configuration ************\/
QUnit.test("set the name of a variable", assert =>{
});

QUnit.test("set the style of a variable", assert =>{
});*/


