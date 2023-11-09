import React from 'react';
import { marked } from 'marked';
import {
    contentsTitleIDToValue,
    contentsTitleIDToContentsContentValue,
} from "./Config";
import { Subscribe } from "./Subscribe";

export function ContentsContent({chosenContentTitleID}) {
    return (
        <>
        <div className='contents-rectangle'>
        <Subscribe />
        {Object.keys(contentsTitleIDToContentsContentValue).map((contentTitleID) => {
            if (contentTitleID === chosenContentTitleID) {
                const contentTitle = contentsTitleIDToValue[contentTitleID];
                const contentValueGivenContentTitle = marked.parse(contentsTitleIDToContentsContentValue[contentTitleID]);
                return (
                        <><div className='content-title'
                        isselected='true'> {contentTitle}
                    </div><div className='content-actual'
                        dangerouslySetInnerHTML={{ __html: contentValueGivenContentTitle }} /></>
                );
            }
        })}
        </div>
        </>
    );
}