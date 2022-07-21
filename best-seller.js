    let imageLink=["https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1644399711",
"https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1657257149",
"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-arrested-for-overstay-waterproof-eyeliner-01-i-ll-be-black-black-12784884973651.jpg?v=1619101912",
"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412"];
let products = ["Kohl Of Honour Intense Kajals","Blend The Rules Eyeshadow Palette",
"Base Of Glory Pore Minimizing Primer","Contour De Force Face Palette","Contour De Force Face Palette",
"Arrested For Overstay Waterproof Eyeliner - 01 I'll Be Black (Black)","All Set To Go Banana Powder",
"Tipsy Lips Moisturizing Balm"];

let priceLink=["₹ 249","₹ 1999","₹ 799","₹ 799","₹ 799","₹ 899","₹ 599","₹ 199"];

let leftBtn=document.querySelector("#seller-btn-l");
let rightBtn=document.getElementById("seller-btn-r");

let imageState=3;

let crouselImage1=document.querySelector(".items-1>img");
let crouselImage2=document.querySelector(".items-2>img");
let crouselImage3=document.querySelector(".items-3>img");
let crouselImage4=document.querySelector(".items-4>img");

rightBtn.addEventListener("click",function(){
    imageState++;
    if(imageState==imageLink.length){
        imageState = 0;
    }
    crouselImage1.src=imageLink[imageState];
    imageState++;
    if(imageState==imageLink.length){
        imageState = 0;
    }
    crouselImage2.src=imageLink[imageState];
    imageState++;
    if(imageState==imageLink.length){
        imageState = 0;
    }
    crouselImage3.src=imageLink[imageState];
    imageState++;
    if(imageState==imageLink.length){
        imageState = 0;
    }
    crouselImage4.src=imageLink[imageState];
});

leftBtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState = imageLink.length-1;
    }else if(imageState<3){

    }    
    crouselImage1.src=imageLink[imageState];
    imageState--;
    if(imageState<0){
        imageState= imageLink.length-1;
    };
    crouselImage2.src=imageLink[imageState];
    imageState--;
    if(imageState<0){
        imageState = imageLink.length-1;
    }
    crouselImage3.src=imageLink[imageState];
    imageState--;
    if(imageState<0){
        imageState = imageLink.length-1;
    };
    crouselImage4.src=imageLink[imageState];
});
