$(document).ready(function(){
    $(".form").on('submit', function(event){
        const email = $("#Email").val()
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        console.log('hi');
        if (!emailPattern.test(email)) {
            console.log('hello')
            $("#Email").addClass('error');
            $('#err').show()
            event.preventDefault();
        }else{
        event.preventDefault();
        $('.big').hide()
        $('.msg').show()
        $("#Email").removeClass('error');
        }
    })
    
    $('#btn1').on('click', function(){
        $('.msg').hide()
        $('.big').show()
    })
    
    // console.log(email);
})