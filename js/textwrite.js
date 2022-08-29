function typing(){
    content = "프론트엔드 개발자를 꿈꾸는 \n 박경태입니다.";    
    const text = document.querySelector(".text");
    // const content = "프론트엔드 개발자를 꿈꾸는 \n 박경태입니다.";
    // const text = document.querySelector(".text");
    let i = 0;
    
    function writing(){
        // const content = "프론트엔드 개발자를 꿈꾸는 \n 박경태입니다.";
        // const text = document.querySelector(".text");
        if (i < content.length) {
        let txt = content.charAt(i);
        text.innerHTML += txt=== "\n" ? "<br/>": txt;
        i++;
        }    
    }
    setInterval(writing, 200)
}
