let newLink=["https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg",
"https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg",
"https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg",
"https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif",
"https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif",
"https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg",
"https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg"
];

    let newBtnl=document.querySelector("#newBtn1");
let newBtnr=document.getElementById("newBtn2");

let newState=0;
let newImage=document.querySelector(".new-crousel>img")

newBtnr.addEventListener("click",function(){
    newState++;
    if(newState===newLink.length){
        newState=0;
    }
    newImage.src=newLink[newState];
})

newBtnl.addEventListener("click",function(){
    newState--;
    if(newState<0){
        newState=newLink.length-1;
    }
    newImage.src=newLink[newState];
})
