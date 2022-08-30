$(function(){
    $('.txt_wrap > div')




    function nextAni() {
        $('.txt_wrap').not(':animated').animate(
            function () {
            $('.txt_wrap div').eq(0).appendTo('.txt_wrap')
            $('.txt_wrap').css({
                
            })
            $('.text_slide div').eq(0).appendTo('.text_slide')
            $('.slide_count span').eq(0).appendTo('.slide_count')
        })
    }
})