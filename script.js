var previous=document.querySelector("#previous");
var next=document.querySelector("#next");
var image=document.querySelector("#image");

console.log(next);
var index=0;

// ======storage======
var storage=[{imagesource:"./images/slider/1.jpg"},
{imagesource:"./images/slider/2.jpg"},
{imagesource:"./images/slider/3.jpg"}
]
// =======previous=======
previous.addEventListener("click",()=>{
    
image.src=storage[index].imagesource;
index=(index-1+storage.length)%storage.length;

});
// =======next=========
next.addEventListener("click",()=>{
    
    image.src=storage[index].imagesource;
    index=(index+1+storage.length)%storage.length;
    
    });