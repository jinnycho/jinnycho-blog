import React, { useState } from 'react';
import {
    categoryIDToValue,
} from "./Config";

export function Category({setChosenCategory, setChosenSubCategory, setChosenContentTitle, chosenCategoryID}) {
    const handleCategoryClick = (categoryID) => {
        setChosenCategory(categoryID);
        setChosenSubCategory(null);
        setChosenContentTitle(null);
    };

    return (
        <div className='category-rectangle'>
        {Object.keys(categoryIDToValue).map((categoryID) => {
            const categoryTitle = categoryIDToValue[categoryID];
            return(
                <div className='category-title' 
                    isselected={ chosenCategoryID === categoryID ?  'true' :  'false' }
                    key={ categoryID }
                    onClick={() => handleCategoryClick(categoryID)}> {categoryTitle} </div>
            );
        })}
        </div>
    );
}