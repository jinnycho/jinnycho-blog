import dreamingHouse001Text from '../writings/ideas/architecture/dreamHouse001.md';
import courageToBeDislikedText from '../writings/books/psychology/courageToBeDisliked.md';
import myFirstTableText from '../writings/create/woodworking/myFirstTable.md';

const categoryIDToValue = {
    'ideas': 'Ideas',
    'books': 'Books',
    'create': 'Create',
};

const categoryIDTosubCategoriesIDs = {
    'ideas': ['architecture'],
    'books': ['psychology'],
    'create': ['woodworking'],
};

const subCategoryIDToValue = {
    'architecture': 'Architecture',
    'psychology': 'Psychology',
    'woodworking': 'Woodworking',
}

const subCategoryIDToTitleIDs = {
    'architecture': ['houseIdeas001'],
    'psychology': ['courageToBeDisliked'],
    'woodworking': ['myFirstTable'],
}

const contentsTitleIDToValue = {
    'houseIdeas001': 'I Want To Build My Own House (0.0.1)',
    'courageToBeDisliked': 'Courage To Be Disliked',
    'myFirstTable': 'The First Table I Made'
}

const contentsTitleIDToContentsContentValue = {
    'houseIdeas001': dreamingHouse001Text,
    'courageToBeDisliked': courageToBeDislikedText,
    'myFirstTable': myFirstTableText,
}

export {
    categoryIDToValue,
    categoryIDTosubCategoriesIDs,
    subCategoryIDToValue,
    subCategoryIDToTitleIDs,
    contentsTitleIDToValue,
    contentsTitleIDToContentsContentValue,
}