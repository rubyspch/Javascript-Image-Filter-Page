const buttons= document.querySelectorAll('button.selection');

const allImages= document.querySelectorAll('main .image-selections .images');

let filterSearch=document.querySelector('input[name="filter"]');

let filterButton= document.querySelector('button.filter-button');

function toggleImages(dataImage){
    if(dataImage=='all'){
        allImages.forEach(function(image){ //cycle through all images...
            image.style.display="flex"; // ...and show them all
        });
    } else {
        allImages.forEach(function(image){ //cycle through images again...
            if (dataImage==image.dataset.class){// ...and if the button data matches image data...
                image.style.display="flex"; // ... then display the image.
            } else{ // but if the data doesn't match...
                image.style.display="none"; //... don't show them
            }
        });
    }
}
// End of toggleImages

function toggleActiveClass(active){
    
 buttons.forEach(function(button){ // cycle over buttons
     button.classList.remove('active'); // remove active class from it
 });
 active.classList.add('active'); // add active class to the button that is clicked
}
//End of toggleActiveClass


buttons.forEach(function(button){ //for every button...
 button.addEventListener('click', function(){ // when you click...
     toggleImages(button.dataset.class); // run the code. Could put dataImage instead.

     toggleActiveClass(button); // give ALL the info about the clicked button to the toggleActiveClass function
 });
});