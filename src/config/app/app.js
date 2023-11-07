let lists = document.querySelector('.slide');
let item = document.querySelectorAll('.slide_item');
let left = document.getElementById('prev-slide');
let right = document.getElementById('next-slide');
let dot = document.querySelectorAll('.current-slide_item');
let active = 0;
let lengthItem = item.length - 1;
let auto = setInterval(() => {right.click()}, 4000)
right.onclick = function(){
    if(active + 1 > item.length){
        active=0
    }else{
        active+=1
    }
    Reload()
}
left.onclick = function() {
    if(active - 1 < 0){
        active = lengthItem;
    }else{
        active-=1;
    }
    Reload();
}
dot.forEach((li,key)=>{
    li.addEventListener('click', function(){
        active = key;
        Reload();
    })
})
function Reload() {
    let checkLeft = item[active].offsetLeft;
    lists.style.left = -checkLeft +'px'
    let lastActive = document.querySelector('.active-slide')
    lastActive.classList.remove('active-slide')
    dot[active].classList.add('active-slide')
    clearInterval(auto);
    auto = setInterval(() => {right.click()}, 4000)
}



