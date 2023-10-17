import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import { Category } from "./Category";
import { SubCategory } from "./SubCategory";
import { ContentsTitle } from "./ContentsTitle";
import { ContentsContent } from "./ContentsContent";

export function Blog() {
    const [chosenCategoryID, setChosenCategory] = useState(null);
    const [chosenSubCategoryID, setChosenSubCategory] = useState(null);
    const [chosenContentTitleID, setChosenContentTitle] = useState(null);

    return (
        <>
            <div className='rectangles-container'>
            <Routes>
                <Route path="/" element={
                    <>
                        <Category
                            setChosenCategory={setChosenCategory}
                            setChosenSubCategory={setChosenSubCategory}
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={""} />
                        <SubCategory
                            setChosenSubCategory={setChosenSubCategory}
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={chosenCategoryID}
                            chosenSubCategoryID={""} />
                        <ContentsTitle
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={chosenCategoryID}
                            chosenSubCategoryID={chosenSubCategoryID}
                            chosenContentTitleID={chosenContentTitleID}/>
                    </>
                    }
                />
                <Route path="/:categoryIDPath" element={
                    <>
                        <Category
                            setChosenCategory={setChosenCategory}
                            setChosenSubCategory={setChosenSubCategory}
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={chosenCategoryID} />
                        <SubCategory
                            setChosenSubCategory={setChosenSubCategory}
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={chosenCategoryID}
                            chosenSubCategoryID={""} />
                        <ContentsTitle
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={chosenCategoryID}
                            chosenSubCategoryID={chosenSubCategoryID}
                            chosenContentTitleID={chosenContentTitleID}/>
                    </>
                    }
                />
                <Route path="/:categoryIDPath/:subCategoryIDPath" element={
                    <>
                        <Category
                            setChosenCategory={setChosenCategory}
                            setChosenSubCategory={setChosenSubCategory}
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={chosenCategoryID} />
                        <SubCategory
                            setChosenSubCategory={setChosenSubCategory}
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={chosenCategoryID}
                            chosenSubCategoryID={chosenSubCategoryID} />
                        <ContentsTitle
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={chosenCategoryID}
                            chosenSubCategoryID={chosenSubCategoryID}
                            chosenContentTitleID={chosenContentTitleID}/>
                    </>
                    }
                />
                <Route path="/:categoryIDPath/:subCategoryIDPath/:contentTitleIDPath" element={
                    <>
                        <Category
                            setChosenCategory={setChosenCategory}
                            setChosenSubCategory={setChosenSubCategory}
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={chosenCategoryID} />
                        <SubCategory
                            setChosenSubCategory={setChosenSubCategory}
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={chosenCategoryID}
                            chosenSubCategoryID={chosenSubCategoryID} />
                        <ContentsTitle
                            setChosenContentTitle={setChosenContentTitle}
                            chosenCategoryID={chosenCategoryID}
                            chosenSubCategoryID={chosenSubCategoryID}
                            chosenContentTitleID={chosenContentTitleID}/>
                        <ContentsContent
                            chosenContentTitleID={chosenContentTitleID}/>
                    </>
                    }
                />
            </Routes>
            </div>
        </>
    )
}