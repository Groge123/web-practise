const img=document.querySelectorAll("img")
    const btn=document.querySelector(".btn")
    let i=0;
    function rotate()
    {
        img.forEach(item => {
            i=i+1;
            
            if(item.className!="flip-img")
                item.style.transform=`rotateY(${i}deg)`
            else{
                item.style.transform=`rotateY(${180-i}deg)`
            }
        })
    }
    var id=setInterval(rotate,50);
    btn.addEventListener("mouseover",()=>{
        img.forEach(item => {
            if(item.className!="flip-img")
                {
                    item.style.left=`45%`
                    item.style.transform=`rotateY(0deg)`
                }
            else{
                item.style.left=`38%`
                item.style.transform=`rotateY(180deg)`
                }
            clearInterval(id)
            i=0;
        })
    })
    btn.addEventListener("mouseleave",()=>{
        img.forEach(item => {
            if(item.className!="flip-img")
                {
                    item.style.left=`20%`
                }

            else{
                item.style.left=`65%`
            }
            clearInterval(id)
            id=setInterval(rotate,50);
        })
    })