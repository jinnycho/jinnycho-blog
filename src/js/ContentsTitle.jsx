import React from 'react';
import {
    subCategoryIDToTitleIDs,
    contentsTitleIDToValue,
} from "./Config";

export function ContentsTitle({setChosenContentTitle, chosenCategoryID, chosenSubCategoryID, chosenContentTitleID}) {
    const handleContentsTitleClick = (chosenContentTitleID) => {
        setChosenContentTitle(chosenContentTitleID);
    };

    return (
        <>
        {Object.keys(subCategoryIDToTitleIDs).map((subCategoryID) => {
            if (chosenSubCategoryID === subCategoryID && chosenContentTitleID == null) {
                const titleIDsGivenSubCategory = subCategoryIDToTitleIDs[chosenSubCategoryID];
                return (titleIDsGivenSubCategory.map((titleID) => {
                    const contentTitle = contentsTitleIDToValue[titleID];
                    return (
                        <div className='contents-rectangle' key = { titleID }>
                            <div className='content-title'
                                onClick={() => handleContentsTitleClick(titleID)}> {contentTitle}
                            </div>
                        </div>
                    );
                }));
            }
        })}
        { (chosenCategoryID === null || chosenSubCategoryID === null) ? <div className='contents-rectangle'/> :  "" }
        </>
    );
}