function convert(bin, x, y){
    const conv = parseInt(bin, x).toString(y);
    return conv;
}

function run(){
 var val = document.getElementById("input").value
 var x = document.getElementById('from').value
 var y = document.getElementById('to').value
 var answer = convert(val, x, y);
 document.getElementById('output').value = answer
}

// var bins = document.getElementById('input').value
// var x = document.getElementById('from').value
// var y = document.getElementById('to').value


// var output = document.getElementById('output')
// var answer = convert(bins, x, y);
// output.value = bins