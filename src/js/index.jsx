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

function SubCategory({setChosenSubCategory, chosenCategory}) {
    if (chosenCategory === "art") {
        return (
            <div className="subcategory-rectangle">
                <div className="subcategory-title" onClick={() => setChosenSubCategory("art_1")}> Art 1 </div>
                <div className="subcategory-title" onClick={() => setChosenSubCategory("art_2")}> Art 2 </div>
            </div>
        );
    } else if (chosenCategory === "tech") {
        return (
            <div className="subcategory-rectangle">
                <div className="subcategory-title" onClick={() => setChosenSubCategory("tech_1")}> Tech 1 </div>
                <div className="subcategory-title" onClick={() => setChosenSubCategory("tech_2")}> Tech 2 </div>
            </div>
        );
    } else {
        return (
            <div className="subcategory-rectangle"/>
        );
    }
}

function ContentsTitle({setChosenContent, chosenSubCategory}) {
    if (chosenSubCategory === "art_1") {
        return (
            <div className="contents-rectangle">
                <div className="content-title" onClick={() => setChosenContent("flower1")}> flower 1 </div>
                <div className="content-title" onClick={() => setChosenContent("flower2")}> flower 2 </div>
            </div>
        );    
    } else if (chosenSubCategory === "art_2") {
        return (
            <div className="contents-rectangle">
                <div className="content-title" onClick={() => setChosenContent("pear1")}> pear 1 </div>
                <div className="content-title" onClick={() => setChosenContent("pear2")}> pear 2 </div>
            </div>
        );
    } else {
        return (
            <div className="contents-rectangle"/>
        );
    }
}

function Blog() {
    const [chosenCategory, setChosenCategory] = useState(null);
    const [chosenSubCategory, setChosenSubCategory] = useState(null);
    const [chosenContent, setChosenContent] = useState(null);

    return (
        <div className="rectangles-container">
            <Category setChosenCategory={setChosenCategory}/>
            <SubCategory setChosenSubCategory={setChosenSubCategory} chosenCategory={chosenCategory}/>
            <ContentsTitle setChosenContent={setChosenContent} chosenSubCategory={chosenSubCategory}/>
        </div>
    )
}

addEventListener("DOMContentLoaded", (event) => {
    const root = createRoot(document.querySelector('#root'));
    root.render(<Blog />);
});