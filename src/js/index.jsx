import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Category({setChosenCategory, setChosenSubCategory, setChosenContentTitle, chosenCategory}) {
    const handleCategoryClick = (category) => {
        setChosenCategory(category);
        setChosenSubCategory(null);
        setChosenContentTitle(null);
    };

    return (
        <div className="category-rectangle">
            <div className="category-title" 
                isselected={ chosenCategory == "art" ?  "true" :  "false" }
                onClick={() => handleCategoryClick("art")}> Art </div>
        </div>
    );
}

function SubCategory({setChosenSubCategory, setChosenContentTitle, chosenCategory, chosenSubCategory}) {
    // If the person clicks subcategory, ChosenContentTitle should be back to null too
    const handleSubCategoryClick = (subCategory) => {
        setChosenSubCategory(subCategory);
        setChosenContentTitle(null);
      };
    
    if (chosenCategory === "art") {
        return (
            <div className="subcategory-rectangle">
                <div className="subcategory-title"
                    isselected={ chosenSubCategory == "art_1" ?  "true" :  "false" }
                    onClick={() => handleSubCategoryClick("art_1")}> Art 1 </div>
                <div className="subcategory-title"
                    isselected={ chosenSubCategory == "art_2" ?  "true" :  "false" }
                    onClick={() => handleSubCategoryClick("art_2")}> Art 2 </div>
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
    if (chosenSubCategory === "art_1" && chosenContentTitle == null) {
        return (
            <div className="contents-rectangle">
                <div className="content-title"
                    onClick={() => handleContentsTitleClick("flower_1")}> flower 1 </div>
                <div className="content-title"
                    onClick={() => handleContentsTitleClick("flower_2")}> flower 2 </div>
            </div>
        );    
    } else if (chosenContentTitle === null) {
        return (
            <div className="contents-rectangle"/>
        );
    }
}

function ContentsContent({chosenContentTitle}) {
    if (chosenContentTitle == "flower_1") {
        return (
            <div className="contents-rectangle">
                <div className="content-title"
                    isselected="true">
                    FLOWERR 1
                </div>
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