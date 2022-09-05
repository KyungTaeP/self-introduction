$(function(){
    let intv = setInterval(function () {
        nextAni()
    }, 3000)

    function nextAni() {
        $('.txt_wrap').not(':animated').animate({

        },0,function(){
            $('.txt_wrap div').eq(0).appendTo('.txt_wrap')
        })
    }
})

