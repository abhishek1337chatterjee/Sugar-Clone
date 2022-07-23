let beautyLink=["https://d32baadbbpueqt.cloudfront.net/Homepage/64f2889d-e2d9-4047-82cd-e0e820230a77.jpg",
"https://d32baadbbpueqt.cloudfront.net/Homepage/36e44ab4-2b5b-4b5c-b35a-fb56a9c59f1a.jpg",
"https://d32baadbbpueqt.cloudfront.net/Homepage/fb3fbeba-23b1-42cf-946d-d69c2a3f393f.jpg",
];

    let beautyBtnl=document.querySelector("#beautyBtn1");
let beautyBtnr=document.getElementById("beautyBtn2");

let beautyState=0;
let beautyImage=document.querySelector(".beauty-crousel>img")

beautyBtnr.addEventListener("click",function(){
    beautyState++;
    if(beautyState===beautyLink.length){
        beautyState=0;
    }
    beautyImage.src=beautyLink[beautyState];
})

beautyBtnl.addEventListener("click",function(){
    beautyState--;
    if(beautyState<0){
        beautyState=beautyLink.length-1;
    }
    beautyImage.src=beautyLink[beautyState];
})
