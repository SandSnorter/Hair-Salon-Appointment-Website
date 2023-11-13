let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let listSearch = document.querySelector('#search-list');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    listSearch.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    listSearch.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});



videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});


let formHeight = document.getElementById("buy-now-form").offsetHeight;
document.getElementById("buy-now-img").style.height = formHeight;

let contactUsFormHeight = document.getElementById("contact-us-form").offsetHeight;
document.getElementById("contact-img").style.height = contactUsFormHeight;

//load more function
let i=0;

function loadMore(){
  let x = document.getElementsByClassName("load-more");

  x[i].style.display = "inline-block";
  i++;
  x[i].style.display = "inline-block";
  i++;
  x[i].style.display = "inline-block";
  i++;

  if(i==27){
    let y = document.getElementById("load-more");

    y.innerText = "Close extra cards";

    y.onclick = function() {
      for(var j=0; j<27; j++){
      document.getElementsByClassName("load-more").style.display = "none";
      }
    }
  }
}


let j=0;
function searchList(){
  if(j%2 == 0){
  document.getElementById("search-list").style.display = "block";
  }
  else{
    document.getElementById("search-list").style.display = "none";
  }
  j++;
}


function searchFilter(){

  var filter = document.getElementById("search-bar").value.toUpperCase();

  var ul = document.getElementById("search-list");
  var li = ul.getElementsByTagName("li");

  var listItem, itemInfo, h2, a;
  for(var i=0; i< li.length; i++){
    listItem = li[i].getElementsByClassName("list-item");
    itemInfo = listItem[0].getElementsByClassName("item-info");
    h2 = itemInfo[0].getElementsByTagName("h2");
    a = h2[0].getElementsByTagName("a");

    if(a[0]){
      let textValue = a[0].text;

      if(textValue.toUpperCase().indexOf(filter) > -1){
        li[i].style.display = "";
      }
      else{
        li[i].style.display = "none";
      }
    }
  }


}



// Offer list

let xmlContent = '';
let tableEvents = document.getElementById('offer_sheet');
fetch('sujal.xml').then((response)=> {
response.text().then((xml)=>{
    xmlContent = xml;

        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let events = xmlDOM.querySelectorAll('offer');

        events.forEach(eventXmlNode => {
            let row = document.createElement('tr');

            let td = document.createElement('td');
            td.innerText = eventXmlNode.children[0 ].innerHTML;
            row.appendChild(td);

            td = document.createElement('td');
            td.innerText = eventXmlNode.children[1].innerHTML;
            row.appendChild(td);

            tableEvents.children[1].appendChild(row);
                
        });
    });
});

function offerList(){
  document.getElementById("offer-sheet").style.display = "block";
}


let offerBtn = document.querySelector('#offers');
let offerSheet = document.querySelector('#offer-sheet');
let offerClose = document.querySelector('#list-close');

window.onscroll = () =>{
  offerSheet.classList.remove('active');
}

offerBtn.addEventListener('click', () =>{
  offerSheet.classList.add('active');
});

offerClose.addEventListener('click', () =>{
  offerSheet.classList.remove('active');
});