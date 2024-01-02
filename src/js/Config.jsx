// Ideas
import dreamingHouse001Text from '../writings/ideas/architecture/dreamHouse001.md';
import joshuaTreeText from '../writings/ideas/travel/joshuaTree.md';

// Books
import courageToBeDislikedText from '../writings/books/psychology/courageToBeDisliked.md';
import companyOfOneText from '../writings/books/entrepreneur/companyOfOne.md';

// Hobbies
import myFirstTableText from '../writings/hobbies/woodworking/myFirstTable.md';
import powertools101Text from '../writings/hobbies/woodworking/powertools101.md';
import jinhaeText from '../writings/hobbies/gallivanting/jinhae.md';

// Tech
import myBlogHistoryText from '../writings/tech/create/myBlogHistory.md';

// Fun Fact
import platypusText from '../writings/funfact/animals/platypus.md';
import honeyBadgerText from '../writings/funfact/animals/honeybadger.md';


const categoryIDToValue = {
    'ideas': 'Ideas',
    'books': 'Books',
    'hobbies': 'Hobbies',
    'tech': 'Tech',
    'funfacts': 'Fun Facts',
};

const categoryIDTosubCategoriesIDs = {
    'ideas': ['architecture', 'culture'],
    'books': ['psychology', 'entrepreneur'],
    'hobbies': ['woodworking', 'gallivanting'],
    'tech': ['create'],
    'funfacts': ['animals'],
};

const subCategoryIDToValue = {
    // Ideas
    'architecture': 'Architecture',
    'culture': 'Culture',

    // Books
    'psychology': 'Psychology',
    'entrepreneur': 'Entrepreneur',

    // Hobbies
    'woodworking': 'Woodworking',
    'gallivanting': 'Gallivanting',

    // Tech
    'create': 'Create',

    // Fun Facts
    'animals': 'Animals',
}

const subCategoryIDToTitleIDs = {
    // Ideas
    'architecture': ['houseIdeas001'],
    'culture': ['joshuaTree'],

    // Books
    'psychology': ['courageToBeDisliked'],
    'entrepreneur': ['companyOfOne'],

    // Hobbies
    'woodworking': ['myFirstTable', 'powertools101'],
    'gallivanting': ['jinhae'],

    // Tech
    'create': ['myBlogHistory'],

    // Fun Facts
    'animals': ['platypus', 'honeybadger'],
}

const contentsTitleIDToValue = {
    // Ideas
    'houseIdeas001': 'I Want To Build My Own House (0.0.1)',
    'joshuaTree': 'Joshua.. Tree?',

    // Books
    'courageToBeDisliked': 'Courage To Be Disliked',
    'companyOfOne': 'Company Of One',

    // Hobbies
    'myFirstTable': 'The First Table I Made',
    'powertools101': 'Power Tools 101',
    'jinhae': 'Possibly The Best City in South Korea',

    // Tech
    'myBlogHistory': 'The Evolution of My Blogging Journey',

    // Fun Facts
    'platypus': 'An Animal Without A Stomach?!',
    'honeybadger': 'A True Spartan'
}

const contentsTitleIDToContentsContentValue = {
    // Ideas
    'houseIdeas001': dreamingHouse001Text,
    'joshuaTree': joshuaTreeText,

    // Books
    'courageToBeDisliked': courageToBeDislikedText,
    'companyOfOne': companyOfOneText,

    // Hobbies
    'myFirstTable': myFirstTableText,
    'powertools101': powertools101Text,
    'jinhae': jinhaeText,

    // Tech
    'myBlogHistory': myBlogHistoryText,

    // Fun Facts
    'platypus': platypusText,
    'honeybadger': honeyBadgerText,
}

export {
    categoryIDToValue,
    categoryIDTosubCategoriesIDs,
    subCategoryIDToValue,
    subCategoryIDToTitleIDs,
    contentsTitleIDToValue,
    contentsTitleIDToContentsContentValue,
}