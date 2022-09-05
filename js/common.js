const logo = document.getElementsByClassName('logo')[0];
const html = document.getElementsByClassName('html')[0];
const css = document.getElementsByClassName('css')[0];
const jquery = document.getElementsByClassName('jquery')[0];
const javascript = document.getElementsByClassName('javascript')[0];
const react = document.getElementsByClassName('react')[0];
const photoshop = document.getElementsByClassName('photoshop')[0];
const xd = document.getElementsByClassName('xd')[0];
const illustrator = document.getElementsByClassName('illustrator')[0];

const htmlTxt = document.getElementsByClassName('html_txt')[0];
const cssTxt = document.getElementsByClassName('css_txt')[0];
const jqueryTxt = document.getElementsByClassName('jquery_txt')[0];
const javascriptTxt = document.getElementsByClassName('javascript_txt')[0];
const reactTxt = document.getElementsByClassName('react_txt')[0];
const photoshopTxt = document.getElementsByClassName('photoshop_txt')[0];
const xdTxt = document.getElementsByClassName('xd_txt')[0];
const illustratorTxt = document.getElementsByClassName('illustrator_txt')[0];

const proOne = document.getElementsByClassName('pro_one')[0];
const proTwo = document.getElementsByClassName('pro_two')[0];
const proThree = document.getElementsByClassName('pro_three')[0];
const proFour = document.getElementsByClassName('pro_four')[0];
const proFive = document.getElementsByClassName('pro_five')[0];

const oneTxt = document.getElementsByClassName('one_txt')[0];
const twoTxt = document.getElementsByClassName('two_txt')[0];
const threeTxt = document.getElementsByClassName('three_txt')[0];
const fourTxt = document.getElementsByClassName('four_txt')[0];
const fiveTxt = document.getElementsByClassName('five_txt')[0];

const home  = document.getElementsByClassName('home')[0];
const my = document.getElementsByClassName('my')[0];
const por = document.getElementsByClassName('por')[0];

const proClose = document.querySelectorAll('.pro_close');


console.log(proClose);

proClose.addEventListener('click', ()=>{
    proOne.classList.remove('on');
    proTwo.classList.remove('on');
    proThree.classList.remove('on');
    proFour.classList.remove('on');
    proFive.classList.remove('on');
    oneTxt.classList.remove('on');
    twoTxt.classList.remove('on');
    threeTxt.classList.remove('on');
    fourTxt.classList.remove('on');
    fiveTxt.classList.remove('on');
    
})

home.addEventListener('click', ()=>{
    home.classList.add('on');
    my.classList.remove('on');
    por.classList.remove('on');
    proOne.classList.remove('on');
    proTwo.classList.remove('on');
    proThree.classList.remove('on');
    proFour.classList.remove('on');
    proFive.classList.remove('on');
    oneTxt.classList.remove('on');
    twoTxt.classList.remove('on');
    threeTxt.classList.remove('on');
    fourTxt.classList.remove('on');
    fiveTxt.classList.remove('on');
})

my.addEventListener('click', ()=>{
    home.classList.remove('on');
    my.classList.add('on');
    por.classList.remove('on');
    typing();
    proOne.classList.remove('on');
    proTwo.classList.remove('on');
    proThree.classList.remove('on');
    proFour.classList.remove('on');
    proFive.classList.remove('on');
    oneTxt.classList.remove('on');
    twoTxt.classList.remove('on');
    threeTxt.classList.remove('on');
    fourTxt.classList.remove('on');
    fiveTxt.classList.remove('on');
})

por.addEventListener('click', ()=>{
    home.classList.remove('on');
    my.classList.remove('on');
    por.classList.add('on');
    proOne.classList.remove('on');
    proTwo.classList.remove('on');
    proThree.classList.remove('on');
    proFour.classList.remove('on');
    proFive.classList.remove('on');
    oneTxt.classList.remove('on');
    twoTxt.classList.remove('on');
    threeTxt.classList.remove('on');
    fourTxt.classList.remove('on');
    fiveTxt.classList.remove('on');
})

html.addEventListener('click', ()=>{
    htmlTxt.classList.toggle('on');
    cssTxt.classList.remove('on');
    jqueryTxt.classList.remove('on');
    javascriptTxt.classList.remove('on');
    reactTxt.classList.remove('on');
    photoshopTxt.classList.remove('on');
    xdTxt.classList.remove('on');
    illustratorTxt.classList.remove('on');
})

css.addEventListener('click', ()=>{
    htmlTxt.classList.remove('on');
    cssTxt.classList.toggle('on');
    jqueryTxt.classList.remove('on');
    javascriptTxt.classList.remove('on');
    reactTxt.classList.remove('on');
    photoshopTxt.classList.remove('on');
    xdTxt.classList.remove('on');
    illustratorTxt.classList.remove('on');
})

jquery.addEventListener('click', ()=>{
    htmlTxt.classList.remove('on');
    cssTxt.classList.remove('on');
    jqueryTxt.classList.toggle('on');
    javascriptTxt.classList.remove('on');
    reactTxt.classList.remove('on');
    photoshopTxt.classList.remove('on');
    xdTxt.classList.remove('on');
    illustratorTxt.classList.remove('on');
})

javascript.addEventListener('click', ()=>{
    htmlTxt.classList.remove('on');
    cssTxt.classList.remove('on');
    jqueryTxt.classList.remove('on');
    javascriptTxt.classList.toggle('on');
    reactTxt.classList.remove('on');
    photoshopTxt.classList.remove('on');
    xdTxt.classList.remove('on');
    illustratorTxt.classList.remove('on');
})

react.addEventListener('click', ()=>{
    htmlTxt.classList.remove('on');
    cssTxt.classList.remove('on');
    jqueryTxt.classList.remove('on');
    javascriptTxt.classList.remove('on');
    reactTxt.classList.toggle('on');
    photoshopTxt.classList.remove('on');
    xdTxt.classList.remove('on');
    illustratorTxt.classList.remove('on');
})

photoshop.addEventListener('click', ()=>{
    htmlTxt.classList.remove('on');
    cssTxt.classList.remove('on');
    jqueryTxt.classList.remove('on');
    javascriptTxt.classList.remove('on');
    reactTxt.classList.remove('on');
    photoshopTxt.classList.toggle('on');
    xdTxt.classList.remove('on');
    illustratorTxt.classList.remove('on');
})

xd.addEventListener('click', ()=>{
    htmlTxt.classList.remove('on');
    cssTxt.classList.remove('on');
    jqueryTxt.classList.remove('on');
    javascriptTxt.classList.remove('on');
    reactTxt.classList.remove('on');
    photoshopTxt.classList.remove('on');
    xdTxt.classList.toggle('on');
    illustratorTxt.classList.remove('on');
})

illustrator.addEventListener('click', ()=>{
    htmlTxt.classList.remove('on');
    cssTxt.classList.remove('on');
    jqueryTxt.classList.remove('on');
    javascriptTxt.classList.remove('on');
    reactTxt.classList.remove('on');
    photoshopTxt.classList.remove('on');
    xdTxt.classList.remove('on');
    illustratorTxt.classList.toggle('on');
})

proOne.addEventListener('click', ()=>{
    proOne.classList.add('on');
    proTwo.classList.remove('on');
    proThree.classList.remove('on');
    proFour.classList.remove('on');
    proFive.classList.remove('on');
    oneTxt.classList.add('on');
})

proTwo.addEventListener('click', ()=>{
    proOne.classList.remove('on');
    proTwo.classList.add('on');
    proThree.classList.remove('on');
    proFour.classList.remove('on');
    proFive.classList.remove('on');
    twoTxt.classList.add('on');
})

proThree.addEventListener('click', ()=>{
    proOne.classList.remove('on');
    proTwo.classList.remove('on');
    proThree.classList.add('on');
    proFour.classList.remove('on');
    proFive.classList.remove('on');
    threeTxt.classList.add('on');
})

proFour.addEventListener('click', ()=>{
    proOne.classList.remove('on');
    proTwo.classList.remove('on');
    proThree.classList.remove('on');
    proFour.classList.add('on');
    proFive.classList.remove('on');
    fourTxt.classList.add('on');
})

proFive.addEventListener('click', ()=>{
    proOne.classList.remove('on');
    proTwo.classList.remove('on');
    proThree.classList.remove('on');
    proFour.classList.remove('on');
    proFive.classList.add('on');
    fiveTxt.classList.add('on');
})

