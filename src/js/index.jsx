import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import democratizeRoadsText from '../writings/ideas/democratize_roads.txt';

const categoryIDToValue = {
    'ideas': 'Ideas',
    'books': 'Books'
};

const categoryIDTosubCategoriesIDs = {
    'ideas': ['urbanDesign'],
    'books': []
};

const subCategoryIDToValue = {
    'urbanDesign': 'Urban Design'
}

const subCategoryIDToTitleIDs = {
    'urbanDesign': ['democratizeRoads']
}

const contentsTitleIDToValue = {
    'democratizeRoads': 'Democratize the roads'
}

const contentsTitleIDToContentsContentValue = {
    'democratizeRoads': democratizeRoadsText
}

function Category({setChosenCategory, setChosenSubCategory, setChosenContentTitle, chosenCategoryID}) {
    const handleCategoryClick = (categoryID) => {
        setChosenCategory(categoryID);
        setChosenSubCategory(null);
        setChosenContentTitle(null);
    };

    return (
        <div className="category-rectangle">
        {Object.keys(categoryIDToValue).map((categoryID) => {
            const categoryTitle = categoryIDToValue[categoryID];
            return(
                <div className="category-title" 
                    isselected={ chosenCategoryID === categoryID ?  "true" :  "false" }
                    key={ categoryID }
                    onClick={() => handleCategoryClick(categoryID)}> {categoryTitle} </div>
            );
        })}
        </div>
    );
}

function SubCategory({setChosenSubCategory, setChosenContentTitle, chosenCategoryID, chosenSubCategoryID}) {
    // If the person clicks subcategory, ChosenContentTitle should be back to null too
    const handleSubCategoryClick = (subCategoryID) => {
        setChosenSubCategory(subCategoryID);
        setChosenContentTitle(null);
    };

    return (
        <div className="subcategory-rectangle">
        {Object.keys(categoryIDToValue).map((categoryID) => {
            if (chosenCategoryID === categoryID) {
                const subCategoriesIDGivenACategory = categoryIDTosubCategoriesIDs[categoryID];
                for (let subCategoryID of subCategoriesIDGivenACategory){
                    const subCategoryTitle = subCategoryIDToValue[subCategoryID];
                    return (
                        <div className="subcategory-title"
                            isselected={ chosenSubCategoryID === subCategoryID ?  "true" :  "false" }
                            key={ subCategoryTitle }
                            onClick={() => handleSubCategoryClick(subCategoryID)}> {subCategoryTitle}
                        </div>
                    );
                }
            }
        })}
        </div>
    );
}

function ContentsTitle({setChosenContentTitle, chosenCategoryID, chosenSubCategoryID, chosenContentTitleID}) {
    const handleContentsTitleClick = (chosenContentTitleID) => {
        setChosenContentTitle(chosenContentTitleID);
    };

    return (
        <>
        {Object.keys(subCategoryIDToTitleIDs).map((subCategoryID) => {
            if (chosenSubCategoryID === subCategoryID && chosenContentTitleID == null) {
                const titleIDsGivenSubCategory = subCategoryIDToTitleIDs[chosenSubCategoryID];
                for (let titleID of titleIDsGivenSubCategory){
                    const contentTitle = contentsTitleIDToValue[titleID];
                    return (
                        <div className='contents-rectangle' key = { titleID }>
                            <div className='content-title'
                                onClick={() => handleContentsTitleClick(titleID)}> {contentTitle}
                            </div>
                        </div>
                    );
                }
            } else if (chosenContentTitleID == null || chosenCategoryID == null) {
                return (
                    <div className='contents-rectangle' 
                        key = { 1 }
                    />
                );
            }
        })}
        </>
    );
}

function ContentsContent({chosenContentTitleID}) {
    return (
        <>
        {Object.keys(contentsTitleIDToContentsContentValue).map((contentTitleID) => {
            if (contentTitleID === chosenContentTitleID) {
                const contentTitle = contentsTitleIDToValue[contentTitleID];
                const contentValueGivenContentTitle = contentsTitleIDToContentsContentValue[contentTitleID];
                return (
                    <div className='contents-rectangle'>
                        <div className='content-title'
                            isselected='true'> { contentTitle }
                        </div>
                        <div className="content-actual" dangerouslySetInnerHTML={{__html: contentValueGivenContentTitle}}/>
                    </div>
                );
            } else {
                return (<></>);
            }
        })}
        </>
    );

    // if (chosenContentTitleID === "democratizeRoads") {
    //     return (
    //         <div className="contents-rectangle">
    //             <div className="content-title"
    //                 isselected="true">
    //                 Democratize the roads
    //             </div>
    //             <div className="content-actual" dangerouslySetInnerHTML={{__html: democratizeRoadsText}}/>
    //         </div>
    //     );
    // } else {
    //     return <></>;
    // }
}

function Blog() {
    const [chosenCategoryID, setChosenCategory] = useState(null);
    const [chosenSubCategoryID, setChosenSubCategory] = useState(null);
    const [chosenContentTitleID, setChosenContentTitle] = useState(null);

    return (
        <div className="rectangles-container">
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

addEventListener("DOMContentLoaded", () => {
    const root = createRoot(document.querySelector('#root'));
    root.render(<Blog />);
});