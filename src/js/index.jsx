import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import democratizeRoadsText from '../writings/ideas/democratize_roads.txt';

const categories = {
    ideas: 'Ideas',
    books: 'Books'
}

function Category({setChosenCategory, setChosenSubCategory, setChosenContentTitle, chosenCategory}) {
    const handleCategoryClick = (category) => {
        setChosenCategory(category);
        setChosenSubCategory(null);
        setChosenContentTitle(null);
    };

    return (
        <div className="category-rectangle">
            <div className="category-title" 
                isselected={ chosenCategory === "ideas" ?  "true" :  "false" }
                onClick={() => handleCategoryClick("ideas")}> Ideas </div>
        </div>
    );
}

function SubCategory({setChosenSubCategory, setChosenContentTitle, chosenCategory, chosenSubCategory}) {
    // If the person clicks subcategory, ChosenContentTitle should be back to null too
    const handleSubCategoryClick = (subCategory) => {
        setChosenSubCategory(subCategory);
        setChosenContentTitle(null);
      };
    
    if (chosenCategory === "ideas") {
        return (
            <div className="subcategory-rectangle">
                <div className="subcategory-title"
                    isselected={ chosenSubCategory === "urban_design" ?  "true" :  "false" }
                    onClick={() => handleSubCategoryClick("urban_design")}> Urban Design </div>
            </div>
        );
    } else {
        return (
            <div className="subcategory-rectangle"/>
        );
    }
}

function ContentsTitle({setChosenContentTitle, chosenSubCategory, chosenContentTitle}) {
    const handleContentsTitleClick = (chosenContentTitle) => {
        setChosenContentTitle(chosenContentTitle);
      };

    // It checks chosenContentTitle is null so we don't show so many columns
    if (chosenSubCategory === "urban_design" && chosenContentTitle === null) {
        return (
            <div className="contents-rectangle">
                <div className="content-title"
                    onClick={() => handleContentsTitleClick("democratize_roads")}> Democratize the roads </div>
            </div>
        );    
    } else if (chosenContentTitle === null) {
        return (
            <div className="contents-rectangle"/>
        );
    }
}

function ContentsContent({chosenContentTitle}) {
    if (chosenContentTitle === "democratize_roads") {
        return (
            <div className="contents-rectangle">
                <div className="content-title"
                    isselected="true">
                    Democratize the roads
                </div>
                <div dangerouslySetInnerHTML={{__html: democratizeRoadsText}}/>
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