import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import dreamingHouse001Text from '../writings/ideas/architecture/dreamHouse001.md';
import courageToBeDislikedText from '../writings/books/psychology/courageToBeDisliked.md';
import { marked } from 'marked';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Blog from "./Blog";

addEventListener('DOMContentLoaded', () => {
    const root = createRoot(document.querySelector('#root'));
    root.render(<Blog />);
});