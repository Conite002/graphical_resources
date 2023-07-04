const {test} = QUnit;
QUnit.module("Layout");


test("Layout.init() - throw an exception when svg width is not precised", assert=>{
    assert.throws(()=>{
        Layout.init();
    }, 'parameters are missing');
});

test("Layout.init(svg_w) - throw an exception when svg height is not precised", assert=>{
    assert.throws(()=>{
        Layout.init(SVG_W);
    }, 'parameter is missing');
});

test("Layout.init(svg_w, svg_h) - set cell_w, cell_h, ncols, nligs and grid", assert=>{
    Layout.init(SVG_W, SVG_H);

    assert.equal(Layout.cellW, CELL_W, "set cell width");
    assert.equal(Layout.cellH, CELL_H, "set cell height");
    assert.equal(Layout.ncols, SVG_W/CELL_W, "set number of column");
    assert.equal(Layout.nligs, SVG_H/CELL_H, "set number of line");
    assert.equal(Layout.grid.length, Layout.ncols * Layout.nligs, "set number of line");
    Layout.grid.map((cell)=>{
        assert.equal(cell.ismark, false, "set cell availability to false");
    });
});


test("Layout.init(svg_w, svg_h) - determine the coordinate of each case", assert=>{
    Layout.init(SVG_W, SVG_H);

   for (var i = 0; i < Layout.nligs; i++){
    for (var j = 0; j < Layout.ncols; j++){
        assert.equal(Layout.grid[i * Layout.ncols + j].x, CELL_W * i, "set x coordinate");
        assert.equal(Layout.grid[i * Layout.ncols + j].y, CELL_H * j, "set y coordinate");
    }
   }
});

test("Layout.mark(col, lig) - throws an exception when the position index is out of range", assert=>{
    Layout.init(SVG_W, SVG_H);    

    assert.throws(()=>{
        Layout.mark(10000, 2);
    }, "The position index is out of range");
});

test("Layout.mark(col, lig) - mark a case", assert=>{
    Layout.init(SVG_W, SVG_H);    

    assert.equal(Layout.grid[2 * Layout.ncols + 1].ismark, false, "case was available");
    Layout.mark(1, 2);
    assert.equal(Layout.grid[2 * Layout.ncols + 1].ismark, true, "set case to unavailable");
});

test("Layout.unmark(col, lig) - throws an exception when the position index is out of range", assert=>{
    Layout.init(SVG_W, SVG_H);    

    assert.throws(()=>{
        Layout.unmark(1000, 2000);
    }, "the position index is out of range");
});

test("Layout.unmark(col, lig) - unmark a case", assert=>{
    Layout.init(SVG_W, SVG_H);    

    Layout.mark(1, 2);
    assert.equal(Layout.grid[2 * Layout.ncols + 1].ismark, true, "set case to unavailable");

    Layout.unmark(1, 2);
    assert.equal(Layout.grid[2 * Layout.ncols + 1].ismark, false, "set case to available");
});

test("Layout.getClosestPosition(col, lig) - return the first closest case from the specified position that is free when the specified case are not", assert=>{
    Layout.init(SVG_W, SVG_H);    
    var cell = Layout.getClosestPosition(200/Layout.cellW, 300/Layout.cellH);

    assert.equal(Layout.grid[(300/Layout.cellH) * Layout.ncols + (200/Layout.cellW)].ismark, true, 'case is not free');
    assert.equal(cell.ismark, false, 'case is free');
});
not
test("Layout.getClosestPosition(col, lig) - return the same case when the specified case is free", assert=>{
    Layout.init(SVG_W, SVG_H);    
    var cell = Layout.getClosestPosition(200/Layout.cellW, 300/Layout.cellH);

    assert.equal(Layout.grid[(300/Layout.cellH) * Layout.ncols + (200/Layout.cellW)].ismark, false, 'case is free');
    assert.equa(cell.ismark, false);
    assert.true(cell.x <= 200, "the point is inside the case");
    assert.true(cell.y >= 300, "the point is inside the case");
});

test("Layout.findChildrenPosition(parentX, parentY) - return a list of all positions that are free", assert=>{
    Layout.init(SVG_W, SVG_H);

    
});