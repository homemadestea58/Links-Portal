function log()
{
    if (typeof console != "undefined") {
        console.log.apply(console, arguments);
    }
}

$(document).ready(function () {
    var board = $('#board');
    var cells = [];

    function Figure(code, check_fn) {
        this.code = code;
        this.check_fn = check_fn;
    };

    var current_player = 0;

    var get_figure = function (x, y) {
        if (x == null || y == null) return null;
        if (x < 0 || x > 7 || y < 0 || y > 7) return null;
        var result = cells[y][x].children('.figure');
        return result.length ? result : null;
    };

    var default_checker = function (x, y, nx, ny) {
        var fig = get_figure(nx, ny);
        return fig && fig.data('owner') == current_player;
    };

    var king_checker = function (x, y, nx, ny) {
        var fig = get_figure(nx, ny);
        return fig && fig.data('owner') == current_player && fig.data('figure') == 'king';
    }

    var check = default_checker;
    var fx, fy;

    var check_cell = function (cell) {
        return check(fx, fy, cell.data('x'), cell.data('y'));
    };

    var cell_free = function (x, y) {
        return !get_figure(x, y);
    };

    var cell_owned_by = function (x, y, owner) {
        var figure = get_figure(x, y);
        if (!figure) return false;
        return figure.data('owner') == owner;
    };

    var cell_dangerous = function (x, y, owner) {
        var result = false;
        board.find('.figure').each(function (i, el) {
            var f = $(el);
            var cfx = f.parent().data('x'), cfy = f.parent().data('y');
            var cf_check = figures[f.data('figure')].check_fn;
            if (f.data('owner') != owner) {
                var old_cob = cell_owned_by; // pawn fix
                cell_owned_by = function (hx, hy, owner) {
                    if (hx == x && hy == y) return true;
                    return old_cob(hx, hy, owner);
                };

                if (!(f.data('figure') == 'pawn' && cfx == x))
                    if (cf_check(cfx, cfy, x, y))
                        result = true;
                cell_owned_by = old_cob;

            }
        });
        return result;
    };

    var update = function () {
        board.find('.cell').removeClass('available')
            .each(function (i, cell) {
                if (check_cell($(cell))) {
                    var cx = $(cell).data('x'), cy = $(cell).data('y');
                    var f  = get_figure(fx, fy);
                    var f2 = get_figure(cx, cy);
                    if (f && f2 && (f.data('owner') == f2.data('owner')
                        || f2.data('figure') == 'king')) return;

                    if (f && f.data('figure') == 'king'
                        && cell_dangerous(cx, cy, f.data('owner'))) {
                        return;
                    }

                    $(cell).addClass('available');
                }
            });
    };

    var sign = function (v) {
        return (v > 0) ? 1 : (v < 0 ? -1 : 0);
    };

    var segment_free = function (x1, y1, x2, y2) {
        var dx = sign(x2 - x1), dy = sign(y2 - y1);
        x2 -= dx; y2 -= dy;
        while (x1 != x2 || y1 != y2) {
            x1 += dx; y1 += dy;
            if (!cell_free(x1, y1)) return false;
        }
        return true;
    };

    var figures = {
        king: new Figure(0, function (x, y, nx, ny) {
            return Math.abs(x - nx) <= 1 && Math.abs(y - ny) <= 1;
        }),
        queen: new Figure(1, function (x, y, nx, ny) {
            return figures['bishop'].check_fn(x, y, nx, ny) ||
                   figures['rook'].check_fn(x, y, nx, ny);
        }),
        rook: new Figure(2, function (x, y, nx, ny) {
            if (x == nx || y == ny) return segment_free(x, y, nx, ny);
        }),
        bishop: new Figure(3, function (x, y, nx, ny) {
            if (Math.abs(x - nx) == Math.abs(y - ny))
                return segment_free(x, y, nx, ny);
        }),
        knight: new Figure(4, function (x, y, nx, ny) {
            return (Math.abs(x - nx) == 1 && Math.abs(y - ny) == 2) ||
                   (Math.abs(x - nx) == 2 && Math.abs(y - ny) == 1) ;
        }),
        pawn: new Figure(5, function (x, y, nx, ny) {
            var f = get_figure(x, y);

            var owner = f.data('owner');
            var dy = [-1, 1][owner];
            var py = y + dy;

            if (nx == x) {
                if (ny == py && cell_free(x, py))
                    return true;
                else if (y == 5*(1-owner) + 1 && ny == py + dy)
                    return cell_free(x, py) && cell_free(x, py + dy);
            } else if (Math.abs(nx - x) == 1 && ny == py)
                return cell_owned_by(nx, ny, !owner);

            return false;
        })
    };

    var place = function (x, y, figure, owner) {
        // 9812-9817 - white(0)
        // 9818-9823 - black(1)
        var fig = $('<div>')
            .html('&#' + (9812 + 6 * owner + figures[figure].code) + ';')
            .addClass('figure')
            .addClass(owner ? 'black' : 'white')
            .addClass(figure)
            .data({
                figure: figure,
                owner: owner
            })
            .draggable({
                revert: 'invalid',
                containment: board
            });
        cells[y][x].empty().append(fig);
    };

    board.find('.figure')
        .live('dragstart', function (ev, ui) {
            var cell = $(this).parent()
            if (!check_cell(cell)) return false;

            fx = cell.data('x');
            fy = cell.data('y');

            check = figures[$(this).data('figure')].check_fn;
            update();
            $(this).parent().removeClass('available');
        })
        .live('dragstop', function (ev, ui) {
            fx = fy = null;

            var king = $('.figure.king.' + (current_player ? 'black' : 'white'));
            var kx = king.parent().data('x'), ky = king.parent().data('y');
//            if (cell_dangerous(kx, ky, current_player)) {
//                log('check');
//                check = king_checker;
//                update();

//                if ($('.available').length == 0) log('checkmate');
//            } else {
                check = default_checker;
                update();
//            }
        });

    for (var i = 0; i < 8; i++) {
        var line = $('<div>').addClass('line').appendTo(board);

        cells.push([]);
        for (var j = 0; j < 8; j++) {
            cells[i][j] = $('<div>')
                            .addClass('cell')
                            .addClass((i + j) % 2 ? 'even' : 'odd')
                            .data({x: j, y: i})
                            .droppable({
                                accept: function () { return $(this).hasClass('available'); },
                                drop: function (ev, ui) {
                                    if ($(this).find(ui.draggable).length == 0)
                                        current_player = !current_player;
                                    $(this).children().not(ui.draggable).remove();

                                    ui.draggable
                                        .appendTo($(this))
                                        .css({ left: 0, top: 0 });
                                }
                            })
                            .appendTo(line);
        }
    }

    var figs = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 8; j++) {
            place(j, 5*(1-i) + 1, 'pawn', i);
            place(j, 7*(1-i), figs[j], i);
        }
    }

    update();
});
