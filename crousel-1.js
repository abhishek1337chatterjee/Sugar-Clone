let imageLink=["https://d32baadbbpueqt.cloudfront.net/Collection/fab6eeb5-cb56-45f3-93a8-bd86fd902f77.jpg",
"https://d32baadbbpueqt.cloudfront.net/Collection/572aa910-39d4-420b-81f5-c6e32b2f4500.jpg",
"https://d32baadbbpueqt.cloudfront.net/Collection/8a75c068-adeb-46f7-bbe5-ddab877eebe0.jpg",
"https://d32baadbbpueqt.cloudfront.net/Collection/dbba4049-83a4-4c63-a9bb-ee8843947f91.jpg"];

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
