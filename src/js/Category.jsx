import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import {
    categoryIDToValue,
} from "./Config";

export function Category({setChosenCategory, setChosenSubCategory, setChosenContentTitle, chosenCategoryID}) {
    const { categoryID } = useParams();

    useEffect(() => {
        console.log('categoryID from useParams():', categoryID);
      }, [categoryID]);    
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
                <Link to={`/${categoryID}`}>
                <div className='category-title' 
                    isselected={ chosenCategoryID === categoryID ?  'true' :  'false' }
                    key={ categoryID }
                    onClick={() => handleCategoryClick(categoryID)}> 
                        {categoryTitle}
                </div>
                </Link>
            );
        })}
        </div>
    );
}