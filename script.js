document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('myCanvas')
    var ctx = canvas.getContext('2d')

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
            }, i * 2)
        })(i)
    }

    function drawDot(x, y, r) {
        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2 * Math.PI)
        ctx.fillStyle = 'white'
        ctx.fill()
    }
});
