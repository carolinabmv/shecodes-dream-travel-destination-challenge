const imgsNature = document.querySelectorAll('img.nature');
const btnsNature = document.querySelectorAll('.btn-nature');
const imgsCulture = document.querySelectorAll('img.culture');
const btnsCulture = document.querySelectorAll('.btn-culture');
const imgsFood = document.querySelectorAll('img.food');
const btnsFood = document.querySelectorAll('.btn-food');

function showImage(imgCollection, imgIndex) {
  imgCollection.forEach(function (image) {
    if (!image.classList.contains('hidden')) image.classList.add('hidden');
  });
  imgCollection[imgIndex].classList.remove('hidden');
}

for (let i = 0; i < btnsNature.length; i++) {
  btnsNature[i].addEventListener('click', function () {
    showImage(imgsNature, i);
    // console.log(btnsNature);
  });
}
for (let i = 0; i < btnsCulture.length; i++) {
  btnsCulture[i].addEventListener('click', function () {
    showImage(imgsCulture, i);
  });
}
for (let i = 0; i < btnsFood.length; i++) {
  btnsFood[i].addEventListener('click', function () {
    showImage(imgsFood, i);
  });
}
