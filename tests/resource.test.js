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

 QUnit.test('methods is array', assert => {
    var res = new Resource({name: "ozepo", x: 350, y: 330, r: 34, methods: ["GET", "PUT", "POST"], startAngle: 50});
    assert.ok(Array.isArray(res.methods), 'methods is array');
  });
  
  QUnit.test('startAngle is a number', assert => {
    var res = new Resource({name: "ozepo", x: 350, y: 330, r: 34, methods: ["GET", "PUT", "POST"], startAngle: 50});
    assert.ok(Number.isInteger(res.startAngle), 'startAngle is a number');
  });


// QUnit.test("L'arc se transforme en point lors d'un mousedown", function(assert) {
//     var ressource = new Ressource(radius=10, color="black", name="Restaurant");
//     var type = ["GET", "POST", "PUT", "DELETE"];
//     var verb = ressource.getVerb(type[0]);
//     var arc = verb.toArc();
    
//     assert.strictEqual(arc.points.lenght, 4, "Les points sont égales à quatre");

// })


// QUnit.test("Les verbes HTTP sont dessinés autour du cercle lors d'un survol de la ressource", function (assert) {
//     var ressource = new Ressource(radius=10, color="black", name="Restaurant")
//     var ressourceElement = ressource.toSvg();
//     var dimensionSVG = {
//         height: 100,
//         width: 100
//     }
//     var dimensionVerb = {
//         centerX : 50,
//         centerY : 50,
//         radius : 10,
//         angle : Math.PI
//     }
//     var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     var event = MouseEvent("mouseover");
    
//     svg.setAttribute("width", dimensionSVG.width);
//     svg.setAttribute("height", dimensionSVG.height);
//     svg.appendChild(ressourceElement);
//     svg.dispatchEvent(event);

//     var verbSelector = ".verbes-http";
//     verbElements = document.querySelectorAll(verbSelector);
    
//     //calcul d'aire
//     var verbsSurface = verbElements.map(verb => {
//         //calcul d'aire de la forme de chaque verb
//         //stockage de ces aires comme des clés 
        
//     });

//     //assert

// })