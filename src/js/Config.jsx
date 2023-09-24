import dreamingHouse001Text from '../writings/ideas/architecture/dreamHouse001.md';
import courageToBeDislikedText from '../writings/books/psychology/courageToBeDisliked.md';

const categoryIDToValue = {
    'ideas': 'Ideas',
    'books': 'Books'
};

const categoryIDTosubCategoriesIDs = {
    'ideas': ['architecture'],
    'books': ['psychology']
};

const subCategoryIDToValue = {
    'architecture': 'Architecture',
    'psychology': 'Psychology'
}

const subCategoryIDToTitleIDs = {
    'architecture': ['houseIdeas001'],
    'psychology': ['courageToBeDisliked']
}

const contentsTitleIDToValue = {
    'houseIdeas001': 'I Want To Build My Own House (0.0.1)',
    'courageToBeDisliked': 'Courage To Be Disliked'
}

const contentsTitleIDToContentsContentValue = {
    'houseIdeas001': dreamingHouse001Text,
    'courageToBeDisliked': courageToBeDislikedText
}

export {
    categoryIDToValue,
    categoryIDTosubCategoriesIDs,
    subCategoryIDToValue,
    subCategoryIDToTitleIDs,
    contentsTitleIDToValue,
    contentsTitleIDToContentsContentValue,
}