// Strike through 

$('li').click(function(){

  $(this).toggleClass('done')
})




// Deleting 

  $('span').click(function(event){

    $(this).parent().fadeOut(200, function(){

       $(this).remove()
    })
    event.stopPropagation()
  })



// Adding 