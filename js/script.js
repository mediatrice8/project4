$(document).ready(function () {
  $("#pizz").click(function () {
    $("#bold").slideToggle("slow");
  });
  $(".sendOrder").click(function () {
    $(".ordedPizza").slideToggle("slow");
  });
});
function Pizza(size, crust, toppings, sizePrice, crustPrice, toppingsPrice, numberPizza) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.sizePriceS = sizePrice;
  this.crustPriceS = crustPrice;
  this.toppingsPriceS = toppingsPrice;
  this.numberPizzaS = numberPizza;
}
Pizza.prototype.piza1 = function () {
  return (this.sizePriceS + this.crustPriceS + this.toppingsPriceS) * this.numberPizzaS;
}
var costDeliv = 500;
Pizza.prototype.piza2 = function () {
  return this.piza1() + costDeliv;
}

$(document).ready(function () {
  $(".addmore").click(function () {
    $("#bold").append('<div class="col-md-12" id="bold">' +
      '<div class="pizzaSize">' +
      '<select class="form-control" id="select1">' +
      '<option value="pizzaSize">Pizza size </option>' +
      '<option value="1500">small price 1500Rwf</option>' +
      '<option value="2000">medium price 2000Rwf</option>' +
      '<option value="3000">large price 3000Rwf</option>' +
      '</select>' +
      '</div><br></br>' +
      '<div class=" cruster">' +
      '<select class="form-control form-control-s" id="select2">' +
      '<option value="kind of cruster">crust</option>' +
      '<option value="300">crispy price 300Rwf</option>' +
      '<option value="500">stuffed price 500Rwf</option>' +
      '<option value="700">Gluten-free price 700Rwf</option>' +
      '<option value="400">New haven style 400Rwf</option>' +
      '<option value="800">Naepoliatan 800Rwf</option>' +
      '<option value="700">Dertroit 700 Rwf</option>' +
      '<option value="900">vegan-friend haven 900Rwf </option>' +
      '<option value="1000">Deep dish pizza 1000Rwf</option>' +
      '<option value="600">sicilian pizza 600Rwf</option>' +
      '<option value="500">cheese-stuffed 500rwf</option>' +
      '<option value="400">Bagel 400Rwf</option>' +
      '<option value="300">flat bread 300Rwf</option>' +
      '<option value="400">fast food 400Rwf</option>' +
      '<option value="500"> white manna 500Rwf</option>' +
      '<option value="600">brother bruno 600Rwf</option>' +
      '<option value="700"> sogno 700Rwf</option>' +
      '<option value="800">hackensack 800Rwf</option>' +
      '</select>' +
      '</div><br>' +
      '<div class="toppings">' +
      '<select class="form-control" id="select3">' +
      '<option value="toppings">toppings</option>' +

      '<option value="100">bacon price 100rwf</option>' +
      '<option value="600">papperoni 600rwf</option>' +
      '<option value="800">Mushrooms800rwf</option>' +
      '<option value="500">Sausage 500Rwf</option>' +
      '<option value="400">Onions 400Rwf</option>' +
      '<option value="500">Bacon 500Rwf</option>' +
      '<option value="400">extra-cheese 400rwf</option>' +
      '<option value="450">peppers 450Rwf</option>' +
      '<option value="600">Black olives 600Rwf</option>' +
      '<option value="700">Chicken 700Rwf</option>' +
      '<option value="500">Pineapple 500rwf</option>' +
      '<option value=" 800"> spianch 800Rwf</option>' +
      '<option value="550">Fresh basil 550Rwf</option>' +
      '<option value="700"> Hami 700Rwf</option>' +
      '<option value="900">Beef 900Rwf</option>' +
      '<option value="600">Pesto 600Rwf</option>' +
      '</select>' +
      '</div>' +
      '<br>' +
      '<br>' +
      '<div class="numberSize">' +
      '<select name="numberSize" class="form-control form-control-s" id="select">' +
      '<option value="numberSize">numberPizza</option>' +
      '<option value="1">1</option>' +
      '<option value="2">2</option>' +
      '<option value="3">3</option>' +
      '<option value="4">4</option>' +
      '<option value="5">5</option>' +
      '<option value="6">6</option>' +
      '<option value="7">7</option>' +
      '<option value="8"> 8</option>' +
      '<option value="9">9</option>' +
      '<option value="10">10</option>' +
      '</select><br>' +
      '</div>')
  });
  $('#price').hide();
  $('#delivery').hide();
  $('#total').hide();
  $('.sendOrder').click(function () {
    var inputPizzasize = $('#select1 option:selected').text();
    var inputCrust = $('#select2 option:selected').text();
    var inputToppings = $('#select3 option:selected').text();
    var quaNumber = parseInt($('#select option:selected').val());
    var sizePrice = parseInt($('#select1 option:selected').val());
    var crustPrice = parseInt($('#select2 option:selected').val());
    var toppingsPrice = parseInt($('#select3 option:selected').val());
    var newPizzaSize = new Pizza(inputPizzasize, inputCrust, inputToppings, sizePrice, crustPrice, toppingsPrice, quaNumber);
    $('.card').show();
    $('#one').text(newPizzaSize.size);
    $('#two').text(newPizzaSize.crust);
    $('#three').text(newPizzaSize.toppings);
    $('#four').text(newPizzaSize.numberPizza);
    $('#five').text(newPizzaSize.piza1());
    $('.total').text(newPizzaSize.piza2());
    $('.deliv').text('500');
    $('.checkout').click(function () {
      $('.delived').show();
      $('#price').show();
      $('.pickup').show();
      $('.delived').click(function () {
        var delived = prompt('enter your location: ');
        alert('your order will be delively to ' + delived);
        $('#deliv').show();
        $('#total').show();
      })
    })
  })
  $('.pickup').click(function () {
    alert('thank you  for  shopping!!!!');
  })
});



















































































































// --------------------Draft-----------------
  // var pizza = function(element){
  //   return document.querySelector(element);
  // }
  // const getCheckOutData = ()=>{
  //   pizza('[details]').style.display = 'block';
  //   pizza('span.size').innerHTML = pizza('#quantitySize').value;
  //   pizza('span.crust').innerHTML = pizza('#crust').value;
  //   pizza('span.topping').innerHTML = pizza('#topping').value;
  //   pizza('span.numbr').innerHTML = pizza('#numberSize').value;
  //   pizza('span.total').innerHTML = pizza('#moneyToPay').value;
  // }
  // var pizza = function(size ,crust,topping, number,total) {
  //   this.size=size;
  //   this.crust=crust;
  //   this.topping=topping;
  //   this.number=number;
  //   this.total=total;
  //   return document.querySelector(size,crust,number,total);
  // }
  // const getCheckOutData = ()=>{
  //   pizza('[details]').style.display = 'block';
  //   pizza('span.size').innerHTML = pizza('#quantitySize').value;
  //   pizza('span.crust').innerHTML = pizza('#crust').value;
  //   pizza('span.topping').innerHTML = pizza('#topping').value;
  //   pizza('span.number').innerHTML = pizza('#numberSize').value;
  //   pizza('span.total').innerHTML = pizza('#moneyToPay').value;
  // }
