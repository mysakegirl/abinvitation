$(document).ready(function(){
    let _isOpen = false;
    $('.secret-content').hide();

    $(document).on('click', '#open', function(){
        $('.cover').css({'transform': 'rotateY(-120deg)'});
        _isOpen = true;
        setTimeout(() => {
            removeFront();
        }, 400);
    });

    $(document).click(function (e) {
        if ($(e.target).parents(".p1").length === 0) {
            if(_isOpen == true){
                $('.cover').css({'transform': 'rotateY(0deg)'});
                _isOpen = false;
                setTimeout(() => {
                    undoFront();
                    reset();
                }, 200);
            }
        }
    });


    $('#b2').hover(
        function(){
            $(this).removeClass('bn').addClass('by');
            $(this).text('Yes')

            $('#b1').removeClass('by').addClass('bn');
            $('#b1').text('No')
            
            // showHearts();
        },
        function(){
            $(this).removeClass('by').addClass('bn');
            $(this).text('No')

            $('#b1').removeClass('bn').addClass('by');
            $('#b1').text('Yes')
            // removeHearts();
        }
    )


    $('#b1').on('click', function(){
        // $('.card').css({"background-image":"url(./image/glob.gif)"})
        // $('.card-content').append('<img src="./image/yes.gif"/>')
        $('.card-content').fadeOut(1000);
        setTimeout(() => {
            $('.secret-content').html('<h1 class="sc">Happy Valentine\'s Day!</h1><h1 class="sc">See ya later</h1><h1 class="sc">I love you ♥</h1><h1 class="sc">-AB</h1>')
            $('.secret-content').fadeIn(1000);
        }, 1000);
    })

    $('#b2').on('click', function(){
        $('.card-content').fadeOut(1000);
        setTimeout(() => {
            $('.secret-content').html('<h1 class="sc">Happy Valentine\'s Day!</h1><h1 class="sc">See ya later</h1><h1 class="sc">I love you ♥</h1><h1 class="sc">-AB</h1>')
            $('.secret-content').fadeIn(1000);
        }, 1000);
    });

        
    // const textToType = "February 14, 2024";
    // let index = 0;
    // const typedTextElement = document.getElementById('d-txt');

    // function typeText() {
    //     if (index < typedTextElement.innerHTML.length) {
    //         typedTextElement.textContent += textToType.charAt(index);
    //         index++;
    //         setTimeout(typeText, 200); // Adjust the typing speed (milliseconds)
    //     }
    // }

    // typeText();
});


function removeFront(){
    $('.cb-content').html('');
    $('.coverBack').css({'background-image': 'unset'});
}

function undoFront(){
    $('.cb-content').html('<h1>From your beloved</h1><h1>AB</h1><button class="btn" id="open">Open</button>');
    $('.coverBack').css({'background-image': 'url(./image/hearts.png)'});
}

function showHearts(){
    $('.card').css({"background-image":"url(./image/heartsgif.gif)"})
}
function removeHearts(){
    $('.card').css({"background-image":"unset"})
}

function reset(){
    $('.card-content').fadeIn(1000);
    $('.secret-content').html('');
}