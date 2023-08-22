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
    if (chosenCategory === 'art') {
        return (
            <div className="subcategory-rectangle">
                <div className="subcategory-title" onClick={() => setChosenSubCategory("art 1")}> Art 1 </div>
                <div className="category-title" onClick={() => setChosenSubCategory("art 2")}> Art 2 </div>
            </div>
        );
    } else {
        return (
            <div className="subcategory-rectangle">
                <div className="subcategory-title" onClick={() => setChosenSubCategory("tech 1")}> Tech 1 </div>
                <div className="category-title" onClick={() => setChosenSubCategory("tech 2")}> Tech 2 </div>
            </div>
        );
    
    }
}

function Blog() {
    const [chosenCategory, setChosenCategory] = useState(null);
    const [chosenSubCategory, setChosenSubCategory] = useState(null);
    return (
        // TODO <SubCateogory />, <Contents />
        <div className="rectangles-container">
            <Category setChosenCategory={setChosenCategory}/>
            <SubCategory setChosenSubCategory={setChosenSubCategory} chosenCategory={chosenCategory}/>
        </div>
    )
}

addEventListener("DOMContentLoaded", (event) => {
    const root = createRoot(document.querySelector('#root'));
    root.render(<Blog />);
});