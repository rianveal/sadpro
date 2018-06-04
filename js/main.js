
// Initialization Autocomplete input
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.autocomplete');
  var instances = M.Autocomplete.init(elems, options);
});

// Initialization show modal
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});



// Function actual date
function actualDate(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if( dd < 10 ){
    dd = '0'+dd;
  }

  if( mm < 10 ){
    mm = '0'+mm;
  }

  today = dd + '/' + mm + '/' + yyyy; 
  $('#date').html(today)
};

$(document).ready(function(){

  actualDate();

  document.querySelector('.product-search').addEventListener('keypress', function (e){
    var key = e.which || e.keyCode
    if( key === 13 )
      M.toast({html: 'Campo no puede ser vacío', classes: 'rounded'})
      return false
  })

  document.querySelector('#quantity').addEventListener('keyup', function(e){
    var el = $(this).val()
    var price = $('#price').val()
    total = el * price
    $('#total').children('span').html("$"+total.toFixed(3))
  })

  document.getElementById('register-sale').addEventListener('click', function(e){
    var quantity = $('#quantity').val()
    if( quantity === '' )
      M.toast({html: 'Campo cantidad vacío', classes: 'rounded'})
      $('#quantity').focus()
      return false
  })

  // Autocomplete data input products
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
  });

  // EVENTS INITIALIZATION
  
  // Call modal
  $('.modal').modal();


});