module.exports = function(dir, ext, callback) {
   var fs = require('fs'),
       path = require('path'),
       ext = '.' + ext,
       list = [];

   fs.readdir(dir, function(err, data) {
      if (err) {
         return callback(err);
      }

      list = data.filter(function(file) {
         return path.extname(file) === ext;
      });

      return callback(null, list);
   });
};