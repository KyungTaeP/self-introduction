$(function(){
    let intv = setInterval(function () {
        nextAni()
    }, 4000)

    function nextAni() {
        $('.txt_wrap').not(':animated').animate({

        },0,function(){
            $('.txt_wrap div').eq(0).appendTo('.txt_wrap')
        })
    }
})

