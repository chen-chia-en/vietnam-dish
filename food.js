let section = document.querySelectorAll('.section');
let section_index = 0;
let bg = document.getElementById('bg');
let background = [
    'image/bun-bo-bg.png',
    'image/goi-cuon-bg.jpg',
    'image/pho-ga-bg.png'
]
/*querySelectorAll 選取多個， NodeList的方式被傳回，可以用forEach()
.qeurySelector() 只會針對元素的第一筆資料，其他並不會被選入 */

let showSlide = (index) => {
    section.forEach(e => e.classList.remove('active'))
    section[index].classList.add('active')
    bg.style.backgroundImage = `url(${background[index]})`
} 
/* section.forEach(e => e.classList.remove('active'))
尚且無法解釋!!!

*/
/*note:
bg.style.backgroundImage = `url(${background[index]})`的寫法
or 
bg.style.backgroundImage = "url('example.jpg')"
*/
showSlide(section_index)


let item = document.querySelectorAll('#item');
item.forEach((item,index)=>{
    item.addEventListener('click', () => 
        showSlide(index)
    )
})

let close = document.getElementById('close');
let open = document.getElementById('open');
let nav = document.querySelector('nav');

open.addEventListener("click", function(){
    nav.style.top = "0";
})
close.addEventListener("click", function(){
    nav.style.top= "-100vh";
})
