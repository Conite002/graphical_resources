class Layout{
    static init(SVG_W, SVG_H){
        if (!SVG_W || !SVG_H)
            throw new Error('parameters are missing');
        Layout.cellW = CELL_W;
        Layout.cellH = CELL_H;
        Layout.ncols = Math.floor(SVG_W/CELL_W);
        Layout.nligs = Math.floor(SVG_H/CELL_H);
        Layout.grid = new Array();
        for (var ligne = 0; ligne < Layout.nligs; ligne++){
            for (var colonne = 0; colonne < Layout.ncols; colonne++){
                Layout.grid.push({
                    ismark: false, 
                    x: Layout.cellW * colonne + (Layout.cellW * (colonne + 1) - Layout.cellW * colonne)/2, 
                    y: Layout.cellW * ligne + (Layout.cellH * (ligne + 1) - Layout.cellH * ligne)/2
                });
            }
        }
    }

    static mark(col, lig){
        if (Layout.grid[lig * Layout.ncols + col] == undefined)
            throw new Error('The position index is out of range');

        Layout.grid[lig * Layout.ncols + col].ismark = true;
    }

    static unmark(col, lig){
        if (Layout.grid[lig * Layout.ncols + col] == undefined)
            throw new Error('The position index is out of range');

        Layout.grid[lig * Layout.ncols + col].ismark = false;
    }

    static getClosestPosition(col, lig){
        let childrenPosition =  [
            {x: -1, y: -3},
            {x: 3, y: -2},
            {x: 1, y: 3},
            {x: -3, y: 1},
            {x: -4, y: -2},
            {x: -2, y: 4},
            {x: 4, y: 1},
            {x: 2, y: -5},
        ];
        let obj = {};
        for (var index = 0; index < 8; index++){
            obj.x  = col + childrenPosition[index].x;
            obj.y = lig + childrenPosition[index].y;
            if (Layout.grid[obj.y * Layout.ncols + obj.x].ismark)
                continue;
            return obj;
        }
    }
};