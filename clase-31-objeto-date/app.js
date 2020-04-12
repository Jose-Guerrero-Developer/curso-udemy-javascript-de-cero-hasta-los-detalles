var now = new Date()

Date.prototype.increaseDays = function (days) {
    this.setDate(this.getDate() + days)
    return this
}

console.log('var now = new Date()', now)
console.log('now.getDate()', now.getDate())
console.log('now.getMonth()', now.getMonth())
console.log('now.getHours()', now.getHours())
console.log('now.getMinutes()', now.getMinutes())
console.log('now.getSeconds()', now.getSeconds())
console.log('now.getMilliseconds()', now.getMilliseconds())
console.log('now.getFullYear()', now.getFullYear())

var startCounting  = new Date()
for (var i = 1; i <= 1500; i++) {
    console.log('execution process')
}
var finishCounting = new Date()

console.log(`${ ((finishCounting.getTime() - startCounting.getTime()) / 1000) } segundos`)

console.log(now)
console.log(now.increaseDays(2))