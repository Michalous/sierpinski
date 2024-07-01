document.addEventListener('DOMContentLoaded', function() {
    let triangleButton = document.getElementById('triangle')
    let carpetButton = document.getElementById('carpet')
    let fernButton = document.getElementById('fern')

    var canvas = document.getElementById('myCanvas')
    var ctx = canvas.getContext('2d')

    var carpetCanvas = document.getElementById('carpetCanvas')
    var carpetCtx = carpetCanvas.getContext('2d')

    var fernCanvas = document.getElementById('fernCanvas')
    var fernCtx = fernCanvas.getContext('2d')

    triangleButton.addEventListener('click', triangle)
    carpetButton.addEventListener('click', carpet)
    fernButton.addEventListener('click', fern)
    
    function fern() {
        fernCtx.clearRect(0, 0, canvas.width, canvas.height)
        fernButton.disabled = true
        var x = 0.0
        var y = 0.0
        var plotX = []
        var plotY = []

        const SIZE = 100000

        for (var i = 0; i < SIZE; i++) {
            var r = Math.random()
            if (r < 0.01) {
                var xn = 0.0
                var yn = 0.16 * y
            }
            else if (r < 0.86) {
                var xn = 0.85 * x + 0.04 * y
                var yn = -0.04 * x + 0.85 * y + 1.6
            }
            else if (r < 0.93) {
                var xn = 0.2 * x - 0.26 * y
                var yn = 0.23 * x + 0.22 * y + 1.6
            }
            else {
                var xn = -0.15 * x + 0.28 * y
                var yn = 0.26 * x + 0.24 * y + 0.44
            }
            plotX.push(xn)
            plotY.push(yn)
            x = xn
            y = yn
        }
    
        for (var i = 0; i < SIZE; i++) {
            (function(i) {
                setTimeout(function() {
                    drawFernDot((2.5 + plotX[i]) * 115, 600 - plotY[i] * 60, 1)
                    document.getElementById('fernIteration').innerHTML = i + 1
                    if (i == SIZE - 1) {
                        fernButton.disabled = false
                    }
                }, i * 0.2)
            })(i);
        }
    }
    
    function triangle() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        triangleButton.disabled = true
        var plotX = []
        var plotY = []

        const A = [400, 5]
        const B = [10, 500]
        const C = [530, 550]

        const SIZE = 20000

        var X = [500, 500]

        var choices = [A, B, C]
    
        for (var i = 0; i < SIZE; i++) {
            var randomIndex = Math.floor(Math.random() * choices.length)
            var xn = (choices[randomIndex][0] + X[0]) / 2
            var yn = (choices[randomIndex][1] + X[1]) / 2
            plotX.push(xn)
            plotY.push(yn)
            X = [xn, yn]
        }
        
        for (var i = 0; i < SIZE; i++) {
            (function(i) {
                setTimeout(function() {
                    drawDot(plotX[i], plotY[i], 2)
                    document.getElementById('iteration').innerHTML = i + 1
                    if (i == SIZE - 1) {
                        triangleButton.disabled = false
                    }
                }, i * 2)
            })(i)
        }
    }

    function carpet() {
        carpetCtx.clearRect(0, 0, canvas.width, canvas.height)
        carpetButton.disabled = true
        var plotX = [];
        var plotY = [];

        const A = [10, 10];
        const B = [1180, 10];
        const C = [10, 1180];
        const D = [1180, 1180];
        const ma = [590, 10];
        const mb = [590, 1180];
        const mc = [1180, 590];
        const md = [10, 590];

        const SIZE = 150000;

        var X = [500, 500];

        var choices = [A, B, C, D, ma, mb, mc, md];
    
        for (var i = 0; i < SIZE; i++) {
            var randomIndex = Math.floor(Math.random() * choices.length);
            var xn = (choices[randomIndex][0] + X[0]) / 3;
            var yn = (choices[randomIndex][1] + X[1]) / 3;
            plotX.push(xn);
            plotY.push(yn);
            X = [xn, yn];
        }
        
        for (var i = 0; i < SIZE; i++) {
            (function(i) {
                setTimeout(function() {
                    drawCarpetDot(plotX[i], plotY[i], 2)
                    document.getElementById('carpetIteration').innerHTML = i + 1
                    if (i == SIZE - 1) {
                        carpetButton.disabled = false
                    }
                }, i * 0.3)
            })(i)
        }
        
    }

    function drawCarpetDot(x, y, r) {
        var colour = 'white'
        if ((x > 199 && x < 395) && (y < 200)) {
            colour = 'blue'
        }
        if ((x > 395) && (y < 200)) {
            colour = 'red'
        }
        if ((x < 200) && (y > 200 && y < 400)) {
            colour = 'yellow'
        }
        if ((x > 395) && (y > 200 && y < 399)) {
            colour = 'green'
        }
        if ((x > 395) && (y > 399)) {
            colour = 'orange'
        }
        if ((x > 199 && x < 395) && y > 395) {
            colour = 'grey'
        }
        if ((x < 200) && (y > 395)) {
            colour = 'pink'
        }
        carpetCtx.beginPath();
        carpetCtx.arc(x, y, r, 0, 2 * Math.PI);
        carpetCtx.fillStyle = colour;
        carpetCtx.fill();
    }

    function drawFernDot(x, y, r) {
        fernCtx.beginPath();
        fernCtx.arc(x, y, r, 0, 2 * Math.PI);
        fernCtx.fillStyle = 'green';
        fernCtx.fill();
    }

    function drawDot(x, y, r) {
        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2 * Math.PI)
        ctx.fillStyle = 'white'
        ctx.fill()
    }
})