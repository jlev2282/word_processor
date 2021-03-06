$(document).ready(function(){

   var validKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l",
                    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
                    "y","z","1","2","3","4","5","6","7","8","9","0",",",".",";",
                    "'","[","]","-"
   ];
    //create array of keys to use
   var keys = [
       ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
       ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
       ["z","x","c","v","b","n","m"],
   ];

   var actionKeys = [
       [1,2,3,4,5,6,7,8,9,0,"-","=","BACKSPACE"],
       ["[","]","CLEAR"],
       [";","'","ENTER"],
       [",",".","SHIFT"],
       ["SPACE"]
   ];

   //create for loop that goes over array and calls function to make each row of keys
   for (i=0; i < keys.length; i++){
       var row = i+1;
       createKeys(keys[i], row);
   }

    for (i=0; i < actionKeys.length; i++){
        var row = i;
        createActionKeys(actionKeys[i], row);
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
       for ( k = 0; k < key2create.length; k++) {

           // if (row == 1) {
           //     continue;
           // }
           var button = $("<button>");
           button.attr({"data-key": key2create[k], "class": "key btn btn-warning"});
           button.text(key2create[k]);
           if (key2create[k] == "SPACE") {
               button.attr("style", "width: 300px;");
           }
           if (key2create[k] == "CLEAR") {
               button.attr("class", "key btn btn-danger")
           }
           $("#" + row).append(button);
       }
   }

   //event to print or not print key pressed to display when button clicked
   $(".key").click(function(){
       console.log($(this));
       //create instances to control for true action buttons
       if($(this)[0].innerText == "BACKSPACE" || $(this)[0].innerText == "ENTER" || $(this)[0].innerText == "SHIFT" || $(this)[0].innerText == "SPACE" || $(this)[0].innerText == "CLEAR" ) {
            if($(this)[0].innerText == "CLEAR" ){
                $("#display").empty();
            }
           return;
       } else {
           $("#display").append(this.innerText);
       }

   });

    $(document).keyup(function(event){
        if(validKeys.indexOf(event.key) >= 0) {
            $("#display").append(event.key);
        }
        if(event.key == "Enter"){
            var lineBreak = $("<br>");
            $("#display").append(lineBreak);
        }

        if(event.key == " "){
            console.log("you pressed the space bar");
            $("#display").append(" ");
        }
    });

    //event to print or not print key pressed to display when key pressed

    //loop over the row2create array
       //for each index
       //create a dom button
       //assign attribute data-key and set to row2create current index
       //assign row2create current index to text of dom button
       //append dom button to current row
});