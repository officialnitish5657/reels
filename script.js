let user = [
	{
		profilePic: 'https://fictionhorizon.com/wp-content/uploads/2021/09/30-Best-Ninja-Movies-of-All-Time-RANKED-00.jpg',
		bgimage: "https://i.pinimg.com/736x/da/c8/2b/dac82bc336f3ad404c7571be866b2a4e--d-art-art-illustrations.jpg",
		pandingmassiges: 4,
		name: "ninja",
		age: 25,
		location: "delhi, india",
		interist: [{
			item: `<i class="ri-music-2-line"></i>`,
			in: "music"
		},
		{
			item: `<i class="ri-quill-pen-line"></i>`,
			in: "panting"
		},
		{
			item: `<i class="ri-video-chat-line"></i>`,
			in: "video"
		},
		],
		bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nobis?Lorem ipsum dolor sit amet.onsectetur adipisicing elit. Sed, nobis?",
		isfriend: ''
	},
	{
		profilePic: 'https://clipground.com/images/cartoon-ninja-clipart-13.jpg',
		bgimage: "https://conceptartempire.com/images/02/4585/01-ninja-tereza-toskova.jpg",
		pandingmassiges: 7,
		name: "john",
		age: 35,
		interist: [{
			item: `<i class="ri-music-2-line"></i>`,
			in: "music"
		},
		{
			item: `<i class="ri-quill-pen-line"></i>`,
			in: "panting"
		},
		{
			item: `<i class="ri-video-chat-line"></i>`,
			in: "video"
		},
		],
		location: "delhi, india",
		bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nobis?Lorem ipsum dolor sit amet.onsectetur adipisicing elit. Sed, nobis?",
		isfriend: ''
	},
	{
		profilePic: 'https://avatarfiles.alphacoders.com/247/thumb-1920-247118.jpg',
		bgimage: "https://th.bing.com/th/id/OIP.xf_1Qg-gRaPMKFYt_HC8AAHaHa?w=1800&h=1800&rs=1&pid=ImgDetMain",
		pandingmassiges: 8,
		name: "noob",
		age: 28,
		interist: [{
			item: `<i class="ri-music-2-line"></i>`,
			in: "music"
		},

		{
			item: `<i class="ri-video-chat-line"></i>`,
			in: "video"
		},
		],
		location: "chandighad, india",
		bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nobis?Lorem ipsum dolor sit amet.onsectetur adipisicing elit. Sed, nobis?",
		isfriend: ''
	}
]
let index = 0;
let isanimat = true;
function select(item) {
	return document.querySelector(item);
}

function setdata(index){
	select(".profilePic img").src = user[index].profilePic;
	select(".location h6").textContent = user[index].location;
	select(".messiges h6").textContent = user[index].pandingmassiges;
	select(".name h1:nth-child(1)").textContent = user[index].name;
	select(".name h1:nth-child(2)").textContent = user[index].age;
	select(".bio p").textContent = user[index].bio;
	let a = '';
	user[index].interist.forEach((e) => {
		a += `<div class="music">
		${e.item}
		<span>${e.in}</span></div>`
	})
	select(".interest").innerHTML = a;
}

(function setinitial() {


	select(".maincard img").src = user[index].bgimage;
	select(".incomingcard img").src = user[index + 1]?.bgimage;
	setdata(index)
	// if (index === user.length)
	//     index = 0;

	index = 2;
})();

function imageChange() {

	let tl = gsap.timeline({
		onComplete: function () {
			let main = select(".maincard");
			let incom = select(".incomingcard");
			main.style.zIndex = "2";
			incom.style.zIndex = "3";
			incom.classList.remove("incomingcard");
			incom.classList.add("maincard");
			main.classList.remove("maincard")
			main.classList.add("incomingcard")
			gsap.to(main, {
				scale: 1,
				opacity: 1
			})
			if (index === user.length)
				index = 0;
			select(".incomingcard img").src = user[index].bgimage
			index++;
			isanimat = true;

		}
	});

	tl.to(".maincard", {
		scale: 1.4,
		opacity: 0,
		duration: .6,
		ease: Circ
	}, "a")
	tl.from(".incomingcard", {
		scale: 1,
		opacity: 0,
		duration: .4,
		ease: Power3
	}, "a")


}


(function createElement(){
   document.querySelectorAll(".element").forEach((e)=>{
	// e.style.overflow="hidden";
	let div = document.createElement("div");
	div.classList.add(`${e.classList[1]}container`,'over')
	div.appendChild(e);
	select(".details").appendChild(div);


   }) 
})();


document.querySelector("#reject").addEventListener("click",function(){
	if(isanimat){
		isanimat=false
		imageChange()
	}
	setdata(index-1)
	gsap.from(".details .element",{
		y:"140%",
		// opeacty:0,
		stagger:.04,
		ease:Power4.inOut,
		duration:.6
	})
})
document.querySelector("#accept").addEventListener("click",function(){
	if(isanimat){
		isanimat=false
		imageChange()
	}
	setdata(index-1)
	gsap.from(".details .element",{
		y:"140%",
		// opeacty:0,
		stagger:.1,
		ease:Circ,
		duration:1
	})
})
