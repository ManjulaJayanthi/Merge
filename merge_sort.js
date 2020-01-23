const { curry } = require('crocks/helpers')

const mergeSort = (arr) => {
    if (arr.length === 1)
        return arr;

    var midpoint = Math.floor(arr.length / 2);

    var a = arr.slice(0, midpoint);
    var b = arr.slice(midpoint, arr.length);

    return merge(consume(a[0], b[0]), mergeSort(a), mergeSort(b));
}

const consume = (a, b) => a < b;

const merge = (consumes, a, b) => {
    var newArray = [];

    if (a.length < 1)
        return b;

    else if (b.length < 1)
        return a;

    if (consumes) {
        newArray.push(a[0]);
        a.shift();
    }    
    else {
        newArray.push(b[0]);
        b.shift();
    }

    return newArray.concat(merge(consume(a[0], b[0]), a, b));
}

module.exports = { mergeSort };