$('a[href*="#"]').on('click',function(e){
        
    e.preventDefault();

    $('html, body').animate({

        scrollTop :$($(this).attr('href')).offset().top,

    },
    500,
    'linear'
    );

});

$('img[data-enlargable]').addClass('img-enlargable').click(function(){
    var src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
});