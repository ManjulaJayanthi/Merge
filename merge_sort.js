const mergeSort = (arr) => {
    if (arr.length === 1)
        return arr;

    var midpoint = Math.floor(arr.length / 2);

    var a = arr.slice(0, midpoint);
    var b = arr.slice(midpoint, arr.length);    
    return merge(mergeSort(a), mergeSort(b));
}

const consume = (a, b) => a[0] <  b[0];

const merge = (a, b) => {
    let newArray = [];

    while (a && a.length > 0 && b && b.length > 0) {        
        if (consume(a,b)) {
            newArray.push(a[0]);
            a.shift();
        }
        else {
            newArray.push(b[0]);
            b.shift();
        }
    }    
    return newArray.concat(a, b);
}

module.exports = { mergeSort };