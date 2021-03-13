const images = document.querySelectorAll('img')
var imagesArr = Array.prototype.slice.call(images);
setTimeout(() => { 
    imagesArr.map(image =>{
        const height = image.clientHeight;
        const spans = Math.ceil(height / 10)
        image.style.gridRowEnd = `span ${spans} `
   })
}, 300);