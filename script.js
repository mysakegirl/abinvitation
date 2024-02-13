$(document).ready(function(){
    let _isOpen = false;
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
        },
        function(){
            $(this).removeClass('by').addClass('bn');
            $(this).text('No')

            $('#b1').removeClass('bn').addClass('by');
            $('#b1').text('Yes')
        }
    )


    $('#b1').on('click', function(){
        $('.card').css({"background-image":"url(./image/glob.gif)"})
        $('.card-content').html('<img src="./image/yes.gif"/>')
    })
});


function removeFront(){
    $('.cb-content').html('');
    $('.coverBack').css({'background-image': 'unset'});
}

function undoFront(){
    $('.cb-content').html('<h1>An invitation from</h1><h1>AB</h1><button class="btn" id="open">Open</button>');
    $('.coverBack').css({'background-image': 'url(./image/hearts.png)'});
}