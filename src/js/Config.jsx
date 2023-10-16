import dreamingHouse001Text from '../writings/ideas/architecture/dreamHouse001.md';
import courageToBeDislikedText from '../writings/books/psychology/courageToBeDisliked.md';
import myFirstTableText from '../writings/hobbies/woodworking/myFirstTable.md';
import myBlogHistoryText from '../writings/tech/create/myBlogHistory.md';

const categoryIDToValue = {
    'ideas': 'Ideas',
    'books': 'Books',
    'hobbies': 'Hobbies',
    'tech': 'Tech',
};

const categoryIDTosubCategoriesIDs = {
    'ideas': ['architecture'],
    'books': ['psychology'],
    'hobbies': ['woodworking'],
    'tech': ['create'],
};

const subCategoryIDToValue = {
    'architecture': 'Architecture',
    'psychology': 'Psychology',
    'woodworking': 'Woodworking',
    'create': 'Create',
}

const subCategoryIDToTitleIDs = {
    'architecture': ['houseIdeas001'],
    'psychology': ['courageToBeDisliked'],
    'woodworking': ['myFirstTable'],
    'create': ['myBlogHistory'],
}

const contentsTitleIDToValue = {
    'houseIdeas001': 'I Want To Build My Own House (0.0.1)',
    'courageToBeDisliked': 'Courage To Be Disliked',
    'myFirstTable': 'The First Table I Made',
    'myBlogHistory': 'The Evolution of My Blogging Journey',
}

const contentsTitleIDToContentsContentValue = {
    'houseIdeas001': dreamingHouse001Text,
    'courageToBeDisliked': courageToBeDislikedText,
    'myFirstTable': myFirstTableText,
    'myBlogHistory': myBlogHistoryText,
}

export {
    categoryIDToValue,
    categoryIDTosubCategoriesIDs,
    subCategoryIDToValue,
    subCategoryIDToTitleIDs,
    contentsTitleIDToValue,
    contentsTitleIDToContentsContentValue,
}