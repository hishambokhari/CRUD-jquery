// Strike through 

$('ul').on('click','li',function(){

  $(this).toggleClass('done')
})




// Deleting 

  $('ul').on('click','span',function(event){

    $(this).parent().fadeOut(200, function(){

       $(this).remove()
    })
    event.stopPropagation()
  })



// Adding 

  $('input').keypress(function(event){

    if(event.which === 13){

      var task = $('input').val()
      $('ul').append("<li><span> ~ </span>" + task + "</li>")
      $('input').val("")
    }


  })