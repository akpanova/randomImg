// const robotImg = document.getElementsByClassName(".robots_img"),
//       robotBtn = document.getElementById("#btn_robot");

// robotBtn.addEventListener('click', () => {
    
//     fetch("https://robohash.org/2")
//     .then(response => response.json())
//     .then( data => {
//         robotImg.innerHtml += 
//         `
//         <img scr = "${data.file}">
//         `;
//     })
// });


let randomImage = new Array();
randomImage[0] = "https://robohash.org/1";
randomImage[1] = "https://robohash.org/2";
randomImage[2] = "https://robohash.org/3";
randomImage[3] = "https://robohash.org/4";
randomImage[4] = "https://robohash.org/5";

// robotBtn.addEventListener('click', (getRandomImage) => {
//     let number = Math.floor(Math.random()*randomImage.length);
//     document.write('<img src="'+randomImage[number]+'" />');
// })
// getRandomImage()
function getRandomImage(){
    let number = Math.floor(Math.random()*randomImage.length);
    document.write('<img src="'+randomImage[number]+'" />');
}

getRandomImage();
