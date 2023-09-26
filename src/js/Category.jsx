import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import {
    categoryIDToValue,
} from "./Config";

export function Category({setChosenCategory, setChosenSubCategory, setChosenContentTitle, chosenCategoryID}) {
    const { categoryIDPath } = useParams();
    useEffect(() => {
        if (categoryIDPath !== undefined) {
            setChosenCategory(categoryIDPath);
            setChosenSubCategory(null);
            setChosenContentTitle(null);
        }
    }, [categoryIDPath]);    

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
                <Link
                    to={`/${categoryID}`}
                    key={ categoryID }
                >
                <div className='category-title' 
                    isselected={ chosenCategoryID === categoryID ?  'true' :  'false' }
                    onClick={() => handleCategoryClick(categoryID)}> 
                        {categoryTitle}
                </div>
                </Link>
            );
        })}
        </div>
    );
}