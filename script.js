console.log("This is a script file hello");

const droparea = document.querySelector('#drop-area');
const inputfile = document.getElementById('input-file');
const uploadedImage = document.getElementById('uploadedImage');

inputfile.addEventListener('change', () => {
    let imgUrl = URL.createObjectURL(inputfile.files[0]);
    uploadedImage.style.backgroundImage = `url(${imgUrl})`;
    uploadedImage.style.backgroundSize = "100% 18em"
    uploadedImage.textContent = "";
})

const button = document.querySelector('button');
button.addEventListener('click' , () => {
    console.log("Button clicked");
})