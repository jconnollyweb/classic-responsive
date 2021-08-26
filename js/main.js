var i = 0;
var images = [];
var time = 4000;


images[0] = 'images/001.jpg';
images[1] = 'images/002.jpg';
images[2] = 'images/003.jpg';
images[3] = 'images/004.jpg';
images[4] = 'images/005.jpg';
images[5] = 'images/006.jpg';


function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;











const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click',function(){
    if (searchBox.style.top=='150px'){
        searchBox.style.top = '24px';
        searchBox.style.pointerEvents = 'none';
    } else{
        searchBox.style.top = '150px';
        searchBox.style.pointerEvents = 'auto';
    }
});

menuIcon.addEventListener('click',function(){
    if(slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none';
    } else{
        slideoutMenu.style.opacity ='1';
        slideoutMenu.style.pointerEvents = 'auto';
    }
});