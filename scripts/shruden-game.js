Crafty.init(480, 320, document.getElementById('game'));

Crafty.e('2D, DOM, Color, Fourway')
    .attr({x: 0, y: 0, w: 100, h: 100})
    .color('#F00')
    .fourway(200);