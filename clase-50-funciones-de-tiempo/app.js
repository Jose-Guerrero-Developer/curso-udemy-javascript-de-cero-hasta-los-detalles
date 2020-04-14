setTimeout(function () {
    console.log('set time out, 5 second')
}, 5000)

var second   = 0
var interval = setInterval(function () {
    console.log('set interval second,', ++second)
    if (second === 10)
        clearInterval(interval)
}, 1000)

/**
set interval second, 1
set interval second, 2
set interval second, 3
set interval second, 4
set time out, 5 second
set interval second, 5
set interval second, 6
set interval second, 7
set interval second, 8
set interval second, 9
set interval second, 10
 */
