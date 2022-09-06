// const home  = document.getElementsByClassName('home')[0];
// const my = document.getElementsByClassName('my')[0];
// const por = document.getElementsByClassName('por')[0];

// const PorZip = document.querySelector('.pro_zip > div');
// const SubZip = document.querySelector('.sub_Txt');

// const Txt = document.querySelector('.skill_txt > div');

$(function(){
    let $skill = $('.skill>div');
    let $txt = $('.skill_txt > div');

    $('.skill>div').on('click',function(){
        var idx = $(this).index();
        $txt.removeClass('on');
        $('.skill_txt > div').eq(idx).addClass('on');
    });
})

$(function(){
    $('.pro_zip>div').click(function(){
        $('.pro_zip>div').removeClass('on');
        $('.sub_Txt').removeClass('on');
        $(this).addClass('on');
        $(this).children('.sub_Txt').addClass('on');
    })

    $('.pro_close').click(function(e){
        e.stopImmediatePropagation()
        $('.pro_zip>div').removeClass('on')
        $('.sub_Txt').removeClass('on')
    })
})

$(function(){
    $('.home').on('click',function(){
        $('.home').addClass('on');
        $('.my').removeClass('on');
        $('.por').removeClass('on');
        $('.pro_zip>div').removeClass('on');
        $('.sub_Txt').removeClass('on');
        $('.skill_txt > div').removeClass('on');
    })

    $('.my').on('click',function(){
        $('.home').removeClass('on');
        $('.my').addClass('on');
        $('.por').removeClass('on');
        $('.pro_zip>div').removeClass('on');
        $('.sub_Txt').removeClass('on');
        $('.skill_txt > div').removeClass('on');
    })

    $('.por').on('click',function(){
        $('.home').removeClass('on');
        $('.my').removeClass('on');
        $('.por').addClass('on');
        $('.pro_zip>div').removeClass('on');
        $('.sub_Txt').removeClass('on');
        $('.skill_txt > div').removeClass('on');
    })
})
