// const imgPreview = document.querySelector('.img-preview img');
const imgInput = document.querySelector('#img');
const imgPreview = document.querySelector('.img-preview');
let photo;


// const loadImg = function(input) {
//   if (input.files && input.files[0]) {
//     let reader = new FileReader();

//     reader.onload = function(e) {
//       imgPreview.src = e.target.result;
//     }
//     reader.readAsDataURL(input.files[0]);
//   }
//   console.dir(imgInput.files);
// }

// imgInput.onchange = function() {
//   loadImg(this);
// }

// console.dir(imgInput);

// second try/////////////////////////////////////////////////////////////////////////

// function handleFiles(files) {
//   for (let i = 0; i < files.length; i++) {
//     let file = files[i];

//     if (!file.type.startsWith('image/')){ continue }

//     let img = document.createElement("img");
//     img.classList.add("obj");
//     img.file = file;
//     imgPreview.appendChild(img); // Предполагается, что "preview" это div, в котором будет отображаться содержимое.

//     let reader = new FileReader();
//     reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
//     reader.readAsDataURL(file);
//   }
// }

// handleFiles(imgInput.files);

//third one /////////////////////////////////////////////////////////////////////////

const loadImg = function (files) {

  console.log(files)
  let localPhoto = localStorage.getItem('photo');
  // let parseLocalPhoto = JSON.parse(localPhoto);
  // console.log(parseLocalPhoto);

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    console.log(file)
    // photo.push(file);
    // console.log(photo)

    if (!file.type.startsWith('image/')){ continue }

    let img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    imgPreview.appendChild(img); // Предполагается, что "preview" это div, в котором будет отображаться содержимое.

    let reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) { aImg.src = e.target.result; };
    })(img);
    reader.readAsDataURL(file);
  }
      // console.log(parseLocalPhoto)

}

imgInput.onchange = function() {
  loadImg(this.files);
}
