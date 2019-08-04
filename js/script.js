$(document).ready(function(){
    $("#pizz").click(function(){
      $("#form").slideToggle("slow");
    });
    $("#submit").click(function(){
        $("#show-contact").slideToggle("slow");
      });
  });

  var pizza = (element) => {
    return document.querySelector(element);
  }
  const getCheckOutData = ()=>{
    pizza('[details]').style.display = 'block';
    pizza('span.size').innerHTML = pizza('#quantitySize').value;
    pizza('span.crust').innerHTML = pizza('#crust').value;
    pizza('span.topping').innerHTML = pizza('#topping').value;
    pizza('span.numbr').innerHTML = pizza('#numberSize').value;
    pizza('span.total').innerHTML = pizza('#moneyToPay').value;
  }
