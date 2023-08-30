import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import democratizeRoadsText from '../writings/ideas/democratize_roads.txt';

const categoryIDToValue = {
    'ideas': 'Ideas',
    'books': 'Books'
};

const categoryIDTosubCategoriesIDs = {
    'ideas': ['urbanDesign'],
    'books': []
};

const subCategoryIDToTitle = {
    'urbanDesign': 'Urban Design'
}

const subCategoryIDToTitleIDs = {
    'urbanDesign': ['democratizeRoads']
}

const contentsTitleIDToTitle = {
    'democratizeRoads': 'Democratize the roads'
}

const contentsTitleIDToContentsContent = {
    'democratizeRoads': democratizeRoadsText
}

function Category({setChosenCategory, setChosenSubCategory, setChosenContentTitle, chosenCategoryID}) {
    const handleCategoryClick = (categoryID) => {
        setChosenCategory(categoryID);
        setChosenSubCategory(null);
        setChosenContentTitle(null);
    };

    return (
        <div className="category-rectangle">
        {Object.keys(categoryIDToValue).map((categoryID) => {
            const categoryTitle = categoryIDToValue[categoryID];
            return(
                <div className="category-title" 
                    isselected={ chosenCategoryID === categoryID ?  "true" :  "false" }
                    key={ categoryID }
                    onClick={() => handleCategoryClick(categoryID)}> {categoryTitle} </div>
            );
        })}
        </div>
    );
}

function SubCategory({setChosenSubCategory, setChosenContentTitle, chosenCategoryID, chosenSubCategoryID}) {
    // If the person clicks subcategory, ChosenContentTitle should be back to null too
    const handleSubCategoryClick = (subCategoryID) => {
        setChosenSubCategory(subCategoryID);
        setChosenContentTitle(null);
    };

    return (
        <div className="subcategory-rectangle">
        {Object.keys(categoryIDToValue).map((categoryID) => {
            if (chosenCategoryID === categoryID) {
                const subCategoriesIDGivenACategory = categoryIDTosubCategoriesIDs[categoryID];
                for (let subCategoryID of subCategoriesIDGivenACategory){
                    const subCategoryTitle = subCategoryIDToTitle[subCategoryID];
                    return (
                        <div className="subcategory-title"
                            isselected={ chosenSubCategoryID === subCategoryID ?  "true" :  "false" }
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

function ContentsTitle({setChosenContentTitle, chosenSubCategoryID, chosenContentTitleID}) {
    const handleContentsTitleClick = (chosenContentTitle) => {
        setChosenContentTitle(chosenContentTitle);
      };

    // It checks chosenContentTitle is null so we don't show so many columns
    if (chosenSubCategoryID === "urbanDesign" && chosenContentTitleID === null) {
        return (
            <div className="contents-rectangle">
                <div className="content-title"
                    onClick={() => handleContentsTitleClick("democratizeRoads")}> Democratize the roads </div>
            </div>
        );    
    } else if (chosenContentTitleID === null) {
        return (
            <div className="contents-rectangle"/>
        );
    };
}

function ContentsContent({chosenContentTitleID}) {
    console.log("HERRRR: " + JSON.stringify(chosenContentTitleID) );
    if (chosenContentTitleID === "democratizeRoads") {
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
    const [chosenCategoryID, setChosenCategory] = useState(null);
    const [chosenSubCategoryID, setChosenSubCategory] = useState(null);
    const [chosenContentTitleID, setChosenContentTitle] = useState(null);

    return (
        <div className="rectangles-container">
            <Category
                setChosenCategory={setChosenCategory}
                setChosenSubCategory={setChosenSubCategory}
                setChosenContentTitle={setChosenContentTitle}
                chosenCategoryID={chosenCategoryID}/>
            <SubCategory
                setChosenSubCategory={setChosenSubCategory}
                setChosenContentTitle={setChosenContentTitle}
                chosenCategoryID={chosenCategoryID}
                chosenSubCategoryID={chosenSubCategoryID}/>
            <ContentsTitle
                setChosenContentTitle={setChosenContentTitle}
                chosenSubCategoryID={chosenSubCategoryID}
                chosenContentTitleID={chosenContentTitleID}/>
            <ContentsContent
                chosenContentTitleID={chosenContentTitleID}/>
        </div>
    )
}

addEventListener("DOMContentLoaded", () => {
    const root = createRoot(document.querySelector('#root'));
    root.render(<Blog />);
});