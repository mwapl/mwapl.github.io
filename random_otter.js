// JavaScript to randomly select an image from a folder
document.addEventListener("DOMContentLoaded", function() {
    // Folder path for the images
    const folder = 'random_otter/'; // Modify this to your folder

    // Array of image filenames (you can add as many as you have)
    const images = [
        'pexels-anntarazevich-6796618.jpg', 
	'pexels-chris-spain-1559126760-27274115.jpg', 
	'pexels-chris-spain-1559126760-28224586.jpg',
	'pexels-davidohboy-6468061.jpg',
	'pexels-ellie-burgin-1661546-11870767.jpg',
	'pexels-ellie-burgin-1661546-11870771.jpg',
	'pexels-ellie-burgin-1661546-19492342.jpg',
	'pexels-gmheinlein-7932283.jpg',
	'pexels-klajdi-cena-308722718-13765828.jpg',
	'pexels-luke-seago-20457134-12227431.jpg',
	'pexels-pixabay-53510.jpg',
	'pexels-pixabay-55754.jpg',
	'pexels-pixabay-57466.jpg',
	'pexels-shaosong-sun-503031340-16171084.jpg'
];

    // Get a random index
    const randomIndex = Math.floor(Math.random() * images.length);

    // Get the image element by ID
    const imgElement = document.getElementById('randomImage');

    // Set the src attribute to the randomly selected image from the folder
    imgElement.src = folder + images[randomIndex];
});
