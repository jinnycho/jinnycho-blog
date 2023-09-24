import React, { useState } from 'react';
import { Category } from "./Category";
import { SubCategory } from "./SubCategory";
import { ContentsTitle } from "./ContentsTitle";
import { ContentsContent } from "./ContentsContent";

export function Blog() {
    const [chosenCategoryID, setChosenCategory] = useState(null);
    const [chosenSubCategoryID, setChosenSubCategory] = useState(null);
    const [chosenContentTitleID, setChosenContentTitle] = useState(null);

    return (
        <div className='rectangles-container'>
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
                chosenCategoryID={chosenCategoryID}
                chosenSubCategoryID={chosenSubCategoryID}
                chosenContentTitleID={chosenContentTitleID}/>
            <ContentsContent
                chosenContentTitleID={chosenContentTitleID}/>
        </div>
    )
}