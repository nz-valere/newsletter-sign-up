$(document).ready(function(){
    $(".form").on('submit', function(event){
        const email = $("#Email").val()
        console.log('hi');
        if (!email) {
            console.log('hello');
            event.preventDefault();
        }else{
            event.preventDefault();
        $('.big').hide()
        $('.msg').show()
        }
    })
    
    $('#btn1').on('click', function(){
        $('.msg').hide()
        $('.big').show()
    })
    
    // console.log(email);
})