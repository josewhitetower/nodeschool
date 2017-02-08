/*//Hello World
console.log("HELLO WORLD");

//Baby Steps
var array=process.argv;
var total=0;
for (var i = 2; i < array.length; i++) {
  total += +array[i];
}
console.log(total);*/

//My first I/O
/*var fs= require('fs');
var path= process.argv[2];
var buffer = fs.readFileSync(path).toString();
var array= buffer.split('\n');
console.log(array.length - 1);*/

//My First Async I/O
var fs= require('fs');
var file = process.argv[2];

var content ="";
fs.readFile(file,function(err,data){
  if(err) throw err;
    var num =data.toString().split('\n').length -1;
    console.log(num);
})


