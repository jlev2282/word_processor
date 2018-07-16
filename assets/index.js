$(document).ready(function(){

    //create array of keys to use
   var keys = [
       ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
       ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
       ["z","x","c","v","b","n","m"],
       ["SPACE"]
   ];

   var actionKeys = [
       ["[","]"],
       [";","'","ENTER",],
       [",",".","SHIFT"]
   ];

   //create for loop that goes over array and calls function to make each row of keys
   for (i=0; i < keys.length; i++){
       var row = i+1;
       createKeys(keys[i], row);
       createActionKeys(actionKeys, row);
   }

   //create function that creates each row
   function createKeys (row2create, row) {
       for (j = 0; j < row2create.length; j++) {
           var button = $("<button>");
           button.attr({"data-key": row2create[j], "class": "key btn btn-secondary"});
           button.text(row2create[j]);
           $("#" + row).append(button);

       }
   }

   //create the function that creates the actions keys
   function createActionKeys(key2create, row) {
       for (j = 0; j < key2create.length; j++) {
           var button = $("<button>");
           button.attr({"data-key": key2create[j], "class": "key btn btn-warning"});
           button.text(key2create[j]);
           $("#" + row).append(button);
       }
   }

   $(".key").click(function(){
       console.log(this);
       $("#display").append(this.innerText);
   })
       //loop over the row2create array
       //for each index
       //create a dom button
       //assign attribute data-key and set to row2create current index
       //assign row2create current index to text of dom button
       //append dom button to current row
});