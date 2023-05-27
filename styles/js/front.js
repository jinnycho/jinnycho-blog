let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const gridLength = 13;

window.onload = function() {
    // 1. Front text
    let frontTextContainer = document.getElementById('front-greeting');
    frontTextContainer.textContent = getFrontTextOptions();
    frontTextContainer.style.color = getRandomColor();

    // 2. Cursor graphics
    let gridContainer = document.getElementById('grid-container');
    for(let i = 0; i < viewportWidth/gridLength; i++){
        for (let j = 0; j < viewportHeight/gridLength; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-item");
            gridElement.style.backgroundColor = getRandomColor();
            gridContainer.appendChild(gridElement); 
        }
    }
}

function getFrontTextOptions() {
    const adjectives = [
        'Lovely',
        'Funny',
        'Indie',
        'Sunny',
        'Windy',
        'Calm',
        'Silver',
        'Golden',
        'Rainy',
        'Quiet',
        'Cloudy',
        'Vintage',
        'Soft',
        'Gentle',
        'Sweet',
        'Serene',
        'Joyful',
        'Iconic',
        'Idyllic',
        'Elysian',
        'Rustic',
        'Charming',
        'Romantic',
        'Lively',
        'Dazzling',
        'Sunny',
        'Warm',
        'Dreamy',
        'Cute',
        'Magical',
    ];
    const nouns = [
        'Place',
        'Room',
        'Record',
        'Space',
        'Sunset',
        'Sunrise',
        'Morning',
        'Afternoon',
        'Evening',
        'Balcony',
        'Bedroom',
        'Meadow',
        'Garden',
        'Walk',
        'Stroll',
        'Piano',
        'Violin',
        'Watch',
        'Winter',
        'Spring',
        'Autumn',
        'Summer',
        'Moment',
        'Breakfast',
        'Coffee',
        'Tea',
        'Pastry',
        'Chocolate',
        'Dream',
        'Pasture',
        'Field',
        'Farm',
        'Cottage',
        'Cabin',
        'Home',
        'Apartment',
        'Patina',
        'Teatime',
        'Soirée',
        'Guitar',
        'Day',
        'Month',
        'Year',
        'Decade',
        'Hour',
        'Bunny',
        'Kitty',
        'Puppy',
        'Forest',
    ];

    const adjectiveChosen =  adjectives[Math.floor(Math.random() * 30)];
    const nounChosen = nouns[Math.floor(Math.random() * 51)];
    let fullTextToReturn = '';
    
    if (isVowel(adjectiveChosen)) {
        fullTextToReturn += 'An ';
    } else {
        fullTextToReturn += 'A ';
    }
    fullTextToReturn += adjectiveChosen + '\n' + nounChosen;

    return fullTextToReturn;
}

function isVowel(myText) {
    const vowels = ("aeiouAEIOU"); 
    return vowels.indexOf(myText[0]) !== -1;
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}  