const imgPreview = document.querySelector('.img-preview img');

const loadImg = function(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      imgPreview.src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }
}

document.querySelector('#img').onchange = function() {
  loadImg(this);
}
