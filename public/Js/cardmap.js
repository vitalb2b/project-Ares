



/*===== Card & map =====*/


const lat = -23.481826;
const long = -46.354408;




var swiper = new Swiper('.blog-slider', 
{
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	mousewheel: {
	  invert: false,
	},

	// autoHeight: true,
	pagination: {
	  el: '.blog-slider__pagination',
	  clickable: true,
	}
});


var map = L.map('map').setView([lat,long],18);
var marker = L.marker([lat,long]).addTo(map);
  
marker.bindPopup('Hello!').openPopup();
  
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=T6oZnlADC5elhmcbdfFj',
{
	  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a><a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }).addTo(map);

  function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
}



/*===== Upload image =====*/

const wrapper = document.querySelector(".wrapper");
const content = document.querySelector(".content");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const img = document.querySelector(".image img");


let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function defaultBtnActive(){
	defaultBtn.click();
}
defaultBtn.addEventListener("change", function(){
	const file = this.files[0];
	
	if(file){
		const reader = new FileReader();
		reader.onload = function(){
			const result = reader.result;
			img.src = result;
			wrapper.classList.add("active");
			content.classList.add("active");
		}
		cancelBtn.addEventListener("click", function(){
			img.src = "";
			wrapper.classList.remove("active");
			content.classList.remove("active");
	})
		reader.readAsDataURL(file);
	}
	if(this.value){
		let valueStore = this.value.match(regExp);
		fileName.textContent = valueStore;
	}
});




