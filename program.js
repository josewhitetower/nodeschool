//Hello World
// console.log("HELLO WORLD");

//Baby Steps
/*var array=process.argv;
var total=0;
for (var i = 2; i < array.length; i++) {
  total += +array[i];
}
console.log(total);*/

//My first I/O
// var fs= require('fs');
// var path= process.argv[2];
// var buffer = fs.readFileSync(path).toString();
// var array= buffer.split('\n');
// console.log(array.length - 1);

//My First Async I/O
/*var fs= require('fs');
var file = process.argv[2];

var content ="";
fs.readFile(file,(err,data)=>{
  if(err) throw err;
    var num =data.toString().split('\n').length -1;
    console.log(num);
});*/

/*//LSFiltrado
	var fs= require('fs');
	var p = require('path');
	var path= process.argv[2];
	var ext = '.' + process.argv[3];
	 fs.readdir(path,(err,list)=>{
	 	if (!err) {
	 		for (var i = 0; i < list.length; i++) {
	 		if (p.extname(list[i])===ext) {
	 			console.log(list[i]);
	 		}
	 	}
	 	}
	 	
	 });*/

//Hazlo modular
var filter  = require('./mymodule.js');
var dir     = process.argv[2];
var ext     = process.argv[3];

filter(dir, ext, function(err, filteredList) {

    for (var i = 0; i < filteredList.length; i++) {
        console.log(filteredList[i]);
    }

});