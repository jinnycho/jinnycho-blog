import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import {
    categoryIDToValue,
    categoryIDTosubCategoriesIDs,
    subCategoryIDToValue,
} from "./Config";

export function SubCategory({setChosenSubCategory, setChosenContentTitle, chosenCategoryID, chosenSubCategoryID}) {
    const { categoryID, subCategoryID } = useParams();
    useEffect(() => {
        console.log('subCategoryID from useParams():', subCategoryID);
      }, [subCategoryID]);    

    // If the person clicks subcategory, ChosenContentTitle should be back to null too
    const handleSubCategoryClick = (subCategoryID) => {
        setChosenSubCategory(subCategoryID);
        setChosenContentTitle(null);
    };

    return (
        <div className='subcategory-rectangle'>
        {Object.keys(categoryIDToValue).map((categoryID) => {
            if (chosenCategoryID === categoryID) {
                const subCategoriesIDGivenACategory = categoryIDTosubCategoriesIDs[categoryID];
                return ( subCategoriesIDGivenACategory.map((subCategoryID) => {
                    const subCategoryTitle = subCategoryIDToValue[subCategoryID];
                    return (
                        <Link to={`/${categoryID}/${subCategoryID}`}>
                        <div className='subcategory-title'
                            isselected={ chosenSubCategoryID === subCategoryID ?  'true' :  'false' }
                            key={ subCategoryTitle }
                            onClick={() => handleSubCategoryClick(subCategoryID)}> {subCategoryTitle}
                        </div>
                        </Link>
                    );
                }));
            }
        })}
        </div>
    );
}