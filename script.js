var arr = [
    {dp:"https://www.befunky.com/images/prismic/0d88c466-8c06-4ddc-8534-1047b109136d_features-background-remover4.png?auto=avif,webp&format=jpg&width=581",story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNN58XFDLxdqtwwWRSE924NjtuSryXFGxjg&s",story:"https://png.pngtree.com/background/20230410/original/pngtree-colorful-glowing-dreamy-background-with-butterflies-picture-image_2384112.jpg"},
    {dp:"https://buffer.com/resources/content/images/2024/11/Instagram-Image-size.png",story:"https://media.istockphoto.com/id/887927680/fr/photo/perroquet-color%C3%A9-dans-le-parc-des-oiseaux.jpg?s=1024x1024&w=is&k=20&c=fNgGom-nFI0nG-74h2xX15Bsu5_2ZY6M8NCEWVJR12w="},
    {dp:"https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMx1YSl88oADEMRGXIdsCXi0MeJqcUFwAIAQ&s"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZQrhuIwb9GhBxxkBeDW62uC7OD9MXUiL3FVLTyheySKfS4odEZFXiKHfFCDwOa35Vc0&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"},
]

var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story"><img id="${idx}" src="${elem.dp}" alt=""></div>`
});

stories.innerHTML = clutter

stories.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
});