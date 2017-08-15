$(document).ready(function(){
  var countBy = function(count, multiple) {
    if((count < 0) || (multiple < 0)){
      alert("please enter a positive number!");
      return 0;
    }
    if(count){
      var total = 0;
      for(var i = 0; i <= count; i += multiple){
        total = i;
      };
    return total;
    }else{
      alert("Enter a number!");
      return 0;
    }
  };
  $("#counting").submit(function(event) {
    event.preventDefault();
    var countInput = parseInt($("input#countTo").val());
    var multInput = parseInt($("input#multipleTo").val());
    console.log(countInput);
    console.log(multInput);

    alert("the final total is: " + countBy(countInput,multInput));
  });
});
