$(document).ready(function(){

    //create array of keys to use
   var keys = [
       ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
       ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
       ["z","x","c","v","b","n","m"],
       ["SPACE"]
   ];

   //create for loop that goes over array and calls function to make each row of keys
   for (i=0; i < keys.length; i++){
       var row = i+1;
       createKeys(keys[i], row);
       console.log(keys.length);
   }

   //create function that creates each row
   function createKeys (row2create, row) {
       for (j = 0; j < row2create.length; j++) {
           var button = $("<button>");
           button.attr({"data-key": row2create[j], "class": "key"});
           button.text(row2create[j]);
           $("#" + row).append(button);

       }
   }
       //loop over the row2create array
       //for each index
       //create a dom button
       //assign attribute data-key and set to row2create current index
       //assign row2create current index to text of dom button
       //append dom button to current row
});