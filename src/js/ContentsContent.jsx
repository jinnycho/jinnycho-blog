import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { marked } from 'marked';
import {
    contentsTitleIDToValue,
    contentsTitleIDToContentsContentValue,
} from "./Config";
import { Subscribe } from "./Subscribe";

export function ContentsContent({setChosenContentTitle, chosenContentTitleID}) {
    const { contentTitleIDPath } = useParams();
    useEffect(() => {
        if (contentTitleIDPath !== undefined) {
            setChosenContentTitle(contentTitleIDPath);
        }
      }, [contentTitleIDPath]);    

    return (
        <>
        <div className='contents-rectangle'>
        <Subscribe />
        {Object.keys(contentsTitleIDToContentsContentValue).map((contentTitleID) => {
            if (contentTitleID === chosenContentTitleID) {
                const contentTitle = contentsTitleIDToValue[contentTitleID];
                const contentValueGivenContentTitle = marked.parse(contentsTitleIDToContentsContentValue[contentTitleID]);

                return (
                    <div key={contentTitleID}>
                        <div className='content-title' isselected='true'>{contentTitle}</div>
                        <div className='content-actual' dangerouslySetInnerHTML={{ __html: contentValueGivenContentTitle }} />
                    </div>
                );
            }
        })}
        </div>
        </>
    );
}