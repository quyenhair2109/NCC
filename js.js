
function groupByLength (stringArray) {
    let stringLengths = {}
    for (let stringItem of stringArray) {
        let stringItemLength = stringItem.length
        if (!stringLengths[stringItemLength]) {
            stringItemLength[stringItemLength] = []
        }
        stringItemLength[stringItemLength].push(stringItem)
    }
    return stringLengths
}

function findStringRegex (stringItem, regex) {
    return stringItem.match(regex)
} 