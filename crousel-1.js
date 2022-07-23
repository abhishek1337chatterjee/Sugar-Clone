let imageLink=["https://d32baadbbpueqt.cloudfront.net/Homepage/eedba493-c795-435f-b323-a026045a571b.gif",
"https://d32baadbbpueqt.cloudfront.net/Collection/572aa910-39d4-420b-81f5-c6e32b2f4500.jpg",
"https://d32baadbbpueqt.cloudfront.net/Homepage/be784c39-2c84-45d0-89c4-e79f72b380b0.jpg",
"https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg",
"https://d32baadbbpueqt.cloudfront.net/Collection/8a75c068-adeb-46f7-bbe5-ddab877eebe0.jpg",
"https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg",
"https://d32baadbbpueqt.cloudfront.net/Collection/dbba4049-83a4-4c63-a9bb-ee8843947f91.jpg",
"https://d32baadbbpueqt.cloudfront.net/Homepage/5dfdfad9-7419-46b3-85dc-1cde9429619d.gif"];

    let leftBtn=document.querySelector("#leftBtn1");
let rightBtn=document.getElementById("rightBtn2");

let imageState=0;
let crouselImage=document.querySelector(".crousel-1>img")

rightBtn.addEventListener("click",function(){
    imageState++;
    if(imageState===imageLink.length){
        imageState=0;
    }
    crouselImage.src=imageLink[imageState];
})

leftBtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState=imageLink.length-1;
    }
    crouselImage.src=imageLink[imageState];
})
