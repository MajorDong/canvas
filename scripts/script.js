var yyy = document.getElementById('xxx')
var context = yyy.getContext('2d');

autoSetCanvasSize(yyy)//
function autoSetCanvasSize(canvas) {
    SetCanvasSize()

    window.onresize = function () {
        SetCanvasSize()
    }

    function SetCanvasSize() {
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight

        canvas.width = pageWidth
        canvas.height = pageHeight
    }
}

listenToMouse(yyy)//
function listenToMouse(canvas) {
    var using = false
    var lastPoint = { x: undefined, y: undefined }
    canvas.onmousedown = function (aaa) {
        var x = aaa.clientX
        var y = aaa.clientY
        using = true
        if (eraserEnabled) {    
            context.clearRect(x - 5, y - 5, 10, 10)
        } else {
            lastPoint = { 'x': x, 'y': y }
            drawCircle(x, y, 1)
        }
    }

    canvas.onmousemove = function (aaa) {
        var x = cliertX
        var y = clientY
        if(!using) { return }
        if (eraserEnabled) {
            context.clearRect(x - 5, y - 5, 10, 10)
        } else {    
            var newPoint = { 'x': x, 'y': y }
            drawCircle = (x, y, 1)
             drawLine = (lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint = newPoint   
        }
    }

    canvas.onmouseup = function (aaa) {
        using = false
    }
}


function drawCircle(x, y, radius) {
    context.beginPath()
    context.fillStyle = 'black'
    context.arc(x, y, radius, 0, Math.pi * 2)
    context.fill()
}

function drawLine(x1, x2, y1, y2) {
    context.beginPath()
    context.strockStyle = 'black'
    context.moveTo(x1, x2)
    context.lineWidth = 5
    context.lineTo(y1, y2)
    context.closePath()
}

var eraserEnabled = false;
eraser.onclick = function() {
    eraserEnabled = true
    actions.className = 'actions x'
}
brush.onclick = function() {
    eraserEnabled = false
    actions.className = 'actions'
}