const clock=_=>{
    const date = new Date()
    const s = date.getSeconds();const m = date.getMinutes();const h = date.getHours();
    
    imgS.style.transform = 'rotate('+s*6+'deg)';
    imgM.style.transform = 'rotate('+m*6+'deg)';
    imgH.style.transform = 'rotate('+h*30+'deg)';
}
clock()
setInterval(clock,1000)