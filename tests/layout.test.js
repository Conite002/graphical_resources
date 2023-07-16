const {test} = QUnit;
QUnit.module("Layout", {
    beforeEach: function () {   
        Layout.init(SVG_W, SVG_H);
        Layout.grid.map((cell)=>{
            cell.ismark = false;
        });
    }
});


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

    assert.equal(Layout.cellW, CELL_W, "set cell width");
    assert.equal(Layout.cellH, CELL_H, "set cell height");
    assert.equal(Layout.ncols, Math.floor(SVG_W/CELL_W), "set number of column");
    assert.equal(Layout.nligs, Math.floor(SVG_H/CELL_H), "set number of line");
    assert.equal(Layout.grid.length, Math.ceil(Layout.ncols * Layout.nligs), "set number of line");
});


test("Layout.init(svg_w, svg_h) - determine the coordinate of each case", assert=>{

    for (var ligne = 0; ligne < Layout.nligs; ligne++){
        for (var colonne = 0; colonne < Layout.ncols; colonne++){
            assert.equal(Layout.grid[ligne * Layout.ncols + colonne].x, Layout.cellW * colonne + (Layout.cellW * (colonne + 1) - Layout.cellW * colonne)/2, 'set case['+ligne+']['+colonne+'].x');
            assert.equal(Layout.grid[ligne * Layout.ncols + colonne].y, Layout.cellW * ligne + (Layout.cellH * (ligne + 1) - Layout.cellH * ligne)/2, 'set case['+ligne+']['+colonne+'].y');
        }
    }
});

test("Layout.mark(col, lig) - throws an exception when the position index is out of range", assert=>{

    assert.throws(()=>{
        Layout.mark(10000, 2);
    }, "The position index is out of range");
});

test("Layout.mark(col, lig) - mark a case", assert=>{

    assert.equal(Layout.grid[2 * Layout.ncols + 1].ismark, false, "case was available");
    Layout.mark(1, 2);
    assert.equal(Layout.grid[2 * Layout.ncols + 1].ismark, true, "set case to unavailable");
});

test("Layout.unmark(col, lig) - throws an exception when the position index is out of range", assert=>{

    assert.throws(()=>{
        Layout.unmark(1000, 2000);
    }, "the position index is out of range");
});

test("Layout.unmark(col, lig) - unmark a case", assert=>{

    Layout.mark(1, 2);
    assert.equal(Layout.grid[2 * Layout.ncols + 1].ismark, true, "set case to unavailable");

    Layout.unmark(1, 2);
    assert.equal(Layout.grid[2 * Layout.ncols + 1].ismark, false, "set case to available");
});


/**
 * 
 */

test("Layout.getClosestPosition(col, lig) - return the first closest case from the specified position that is free", assert=>{

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 2, 'check x');
    assert.equal(cell.y, 2, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the first closest case from the specified position that is free", assert=>{
    Layout.mark(2, 2);
    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 6, 'check x');
    assert.equal(cell.y, 2, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the second closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 6, 'check x');
    assert.equal(cell.y, 6, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the fourth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 2, 'check x');
    assert.equal(cell.y, 6, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the fifth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 2, 'check x');
    assert.equal(cell.y, 0, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the sixth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);
    Layout.mark(2, 0);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 4, 'check x');
    assert.equal(cell.y, 1, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the seventh closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);
    Layout.mark(2, 0);
    Layout.mark(4, 1);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 6, 'check x');
    assert.equal(cell.y, 0, 'check y');
});


test("Layout.getClosestPosition(col, lig) - return the eighth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);
    Layout.mark(2, 0);
    Layout.mark(4, 1);
    Layout.mark(6, 0);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 8, 'check x');
    assert.equal(cell.y, 2, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the eighth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);
    Layout.mark(2, 0);
    Layout.mark(4, 1);
    Layout.mark(6, 0);
    Layout.mark(8, 2);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 7, 'check x');
    assert.equal(cell.y, 4, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the eighth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);
    Layout.mark(2, 0);
    Layout.mark(4, 1);
    Layout.mark(6, 0);
    Layout.mark(8, 2);
    Layout.mark(7, 4);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 8, 'check x');
    assert.equal(cell.y, 6, 'check y');
});


test("Layout.getClosestPosition(col, lig) - return the eighth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);
    Layout.mark(2, 0);
    Layout.mark(4, 1);
    Layout.mark(6, 0);
    Layout.mark(8, 2);
    Layout.mark(7, 4);
    Layout.mark(8, 6);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 6, 'check x');
    assert.equal(cell.y, 8, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the eighth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);
    Layout.mark(2, 0);
    Layout.mark(4, 1);
    Layout.mark(6, 0);
    Layout.mark(8, 2);
    Layout.mark(7, 4);
    Layout.mark(8, 6);
    Layout.mark(6, 8);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 4, 'check x');
    assert.equal(cell.y, 7, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the eighth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);
    Layout.mark(2, 0);
    Layout.mark(4, 1);
    Layout.mark(6, 0);
    Layout.mark(8, 2);
    Layout.mark(7, 4);
    Layout.mark(8, 6);
    Layout.mark(6, 8);
    Layout.mark(4, 7);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 2, 'check x');
    assert.equal(cell.y, 8, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the eighth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);
    Layout.mark(2, 0);
    Layout.mark(4, 1);
    Layout.mark(6, 0);
    Layout.mark(8, 2);
    Layout.mark(7, 4);
    Layout.mark(8, 6);
    Layout.mark(6, 8);
    Layout.mark(4, 7);
    Layout.mark(2, 8);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 0, 'check x');
    assert.equal(cell.y, 6, 'check y');
});

test("Layout.getClosestPosition(col, lig) - return the eighth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);
    Layout.mark(2, 0);
    Layout.mark(4, 1);
    Layout.mark(6, 0);
    Layout.mark(8, 2);
    Layout.mark(7, 4);
    Layout.mark(8, 6);
    Layout.mark(6, 8);
    Layout.mark(4, 7);
    Layout.mark(2, 8);
    Layout.mark(0, 6);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 1, 'check x');
    assert.equal(cell.y, 4, 'check y');
});


test("Layout.getClosestPosition(col, lig) - return the eighth closest case from the specified position that is free when the specified case are not", assert=>{

    Layout.mark(2, 2);
    Layout.mark(6, 2);
    Layout.mark(6, 6);
    Layout.mark(2, 6);
    Layout.mark(2, 0);
    Layout.mark(4, 1);
    Layout.mark(6, 0);
    Layout.mark(8, 2);
    Layout.mark(7, 4);
    Layout.mark(8, 6);
    Layout.mark(6, 8);
    Layout.mark(4, 7);
    Layout.mark(2, 8);
    Layout.mark(0, 6);
    Layout.mark(1, 4);

    var cell = Layout.getClosestPosition(4, 4);

    assert.equal(cell.x, 0, 'check x');
    assert.equal(cell.y, 2, 'check y');
});
