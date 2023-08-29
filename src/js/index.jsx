import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import democratizeRoadsText from '../writings/ideas/democratize_roads.txt';

const categoriesIDToTitle = {
    'ideas': 'Ideas',
    'books': 'Books'
};

const categoriesIDTosubCategoriesID = {
    'ideas': ['urbanDesign'],
    'books': []
};

const subCategoriesIDToTitle = {
    'urbanDesign': 'Urban Design'
}

const contentsTitleIDToTitle = {
    'democratizeRoads': 'Democratize the roads'
}

function Category({setChosenCategory, setChosenSubCategory, setChosenContentTitle, chosenCategory}) {
    const handleCategoryClick = (category) => {
        setChosenCategory(category);
        setChosenSubCategory(null);
        setChosenContentTitle(null);
    };

    return (
        <div className="category-rectangle">
        {Object.keys(categoriesIDToTitle).map((categoryID) => {
            const categoryTitle = categoriesIDToTitle[categoryID];
            return(
                <div className="category-title" 
                    isselected={ chosenCategory === categoryID ?  "true" :  "false" }
                    key={ categoryID }
                    onClick={() => handleCategoryClick(categoryID)}> {categoryTitle} </div>
            );
        })}
        </div>
    );
}

function SubCategory({setChosenSubCategory, setChosenContentTitle, chosenCategory, chosenSubCategory}) {
    // If the person clicks subcategory, ChosenContentTitle should be back to null too
    const handleSubCategoryClick = (subCategory) => {
        setChosenSubCategory(subCategory);
        setChosenContentTitle(null);
    };

    return (
        <div className="subcategory-rectangle">
        {Object.keys(categoriesIDToTitle).map((categoryID) => {
            if (chosenCategory === categoryID) {
                const subCategoriesIDGivenACategory = categoriesIDTosubCategoriesID[categoryID];
                for (let subCategoryID of subCategoriesIDGivenACategory){
                    const subCategoryTitle = subCategoriesIDToTitle[subCategoryID];
                    return (
                        <div className="subcategory-title"
                            isselected={ chosenSubCategory === subCategoryID ?  "true" :  "false" }
                            key={subCategoryID}
                            onClick={() => handleSubCategoryClick(subCategoryID)}> {subCategoryTitle}    
                        </div>
                    );
                }
            }
        })}
        </div>
    );
}

function ContentsTitle({setChosenContentTitle, chosenSubCategory, chosenContentTitle}) {
    const handleContentsTitleClick = (chosenContentTitle) => {
        setChosenContentTitle(chosenContentTitle);
      };

    // It checks chosenContentTitle is null so we don't show so many columns
    if (chosenSubCategory === "urbanDesign" && chosenContentTitle === null) {
        return (
            <div className="contents-rectangle">
                <div className="content-title"
                    onClick={() => handleContentsTitleClick("democratizeRoads")}> Democratize the roads </div>
            </div>
        );    
    } else if (chosenContentTitle === null) {
        return (
            <div className="contents-rectangle"/>
        );
    }
}

function ContentsContent({chosenContentTitle}) {
    if (chosenContentTitle === "democratizeRoads") {
        return (
            <div className="contents-rectangle">
                <div className="content-title"
                    isselected="true">
                    Democratize the roads
                </div>
                <div className="content-actual" dangerouslySetInnerHTML={{__html: democratizeRoadsText}}/>
            </div>
        );
    } else {
        return <></>;
    }
}

function Blog() {
    const [chosenCategory, setChosenCategory] = useState(null);
    const [chosenSubCategory, setChosenSubCategory] = useState(null);
    const [chosenContentTitle, setChosenContentTitle] = useState(null);

    return (
        <div className="rectangles-container">
            <Category
                setChosenCategory={setChosenCategory}
                setChosenSubCategory={setChosenSubCategory}
                setChosenContentTitle={setChosenContentTitle}
                chosenCategory={chosenCategory}/>
            <SubCategory
                setChosenSubCategory={setChosenSubCategory}
                setChosenContentTitle={setChosenContentTitle}
                chosenCategory={chosenCategory}
                chosenSubCategory={chosenSubCategory}/>
            <ContentsTitle
                setChosenContentTitle={setChosenContentTitle}
                chosenSubCategory={chosenSubCategory}
                chosenContentTitle={chosenContentTitle}/>
            <ContentsContent
                chosenContentTitle={chosenContentTitle}/>
        </div>
    )
}

addEventListener("DOMContentLoaded", (event) => {
    const root = createRoot(document.querySelector('#root'));
    root.render(<Blog />);
});