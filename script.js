
const paperPrintedPerDay = 4800
const paperPrintedPerWeek = paperPrintedPerDay * 7
var stats = "<p>" + "Paper printed per day: " + paperPrintedPerDay + "<br>" + "Paper printed per week: " + paperPrintedPerWeek + "</p>"

function showStats() {
    document.getElementById["stats"].innerhtml = stats
}

function onloadToDo() {
    showStats()
}