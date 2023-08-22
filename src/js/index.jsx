import React, { useState } from 'react';
import { ReactDOM, createRoot } from 'react-dom/client';

function Category({setChosenCategory}) {
    return (
        // TODO if clicked, change the property
        <div className="category-rectangle">
            <div className="category-title" onClick={() => setChosenCategory("art")}> Art </div>
            <div className="category-title" onClick={() => setChosenCategory("tech")}> Tech </div>
        </div>
    );
}

function SubCategory({setChosenSubCategory, setChosenContentTitle, chosenCategory}) {
    // If the person clicks subcategory, ChosenContentTitle should be back to null too
    const handleSubCategoryClick = (subCategory) => {
        setChosenSubCategory(subCategory);
        setChosenContentTitle(null);
      };
    
    if (chosenCategory === "art") {
        return (
            <div className="subcategory-rectangle">
                <div className="subcategory-title" onClick={() => handleSubCategoryClick("art_1")}> Art 1 </div>
                <div className="subcategory-title" onClick={() => handleSubCategoryClick("art_2")}> Art 2 </div>
            </div>
        );
    } else if (chosenCategory === "tech") {
        return (
            <div className="subcategory-rectangle">
                <div className="subcategory-title" onClick={() => handleSubCategoryClick("tech_1")}> Tech 1 </div>
                <div className="subcategory-title" onClick={() => handleSubCategoryClick("tech_2")}> Tech 2 </div>
            </div>
        );
    } else {
        return (
            <div className="subcategory-rectangle"/>
        );
    }
}

function ContentsTitle({setChosenContentTitle, chosenSubCategory, chosenContentTitle}) {
    console.log("chosenContentTitle: " + chosenContentTitle);
    if (chosenSubCategory === "art_1" && chosenContentTitle === null) {
        return (
            <div className="contents-rectangle">
                <div className="content-title" onClick={() => setChosenContentTitle("flower1")}> flower 1 </div>
                <div className="content-title" onClick={() => setChosenContentTitle("flower2")}> flower 2 </div>
            </div>
        );    
    } else if (chosenSubCategory === "art_2" && chosenContentTitle === null) {
        return (
            <div className="contents-rectangle">
                <div className="content-title" onClick={() => setChosenContentTitle("pear1")}> pear 1 </div>
                <div className="content-title" onClick={() => setChosenContentTitle("pear2")}> pear 2 </div>
            </div>
        );
    } else if (chosenContentTitle === null) {
        return (
            <div className="contents-rectangle"/>
        );
    }
}

function ContentsContent({chosenContentTitle}) {
    if (chosenContentTitle == "flower1") {
        return (
            <div className="contents-rectangle">
                <div className="content-title"> FLOWERR 1 </div>
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
                setChosenCategory={setChosenCategory}/>
            <SubCategory
                setChosenSubCategory={setChosenSubCategory}
                setChosenContentTitle={setChosenContentTitle}
                chosenCategory={chosenCategory}/>
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