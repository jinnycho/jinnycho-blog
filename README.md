## Welcome to my website

Fast and beautiful static website for me

### Local development
```
cd jinnycho.github.io
caddy file-server
```

or 
```
cd jinnycho.github.io
python3 -m http.server 8000
```

### Write a new blog post
1. Choose what category it will go under
    - For example, let's say you want to add a book review. Then it will go under `notes` (and further `books` category).
2. Update the corresponding `index.html`(s) based on #1 and related CSS
    - Then update `index.html`s of both `notes` and `books` to contain this new addition
3. Create a new folder that has the new post
4. Add `index.html` inside this new folder and add what you wrote
    - [Example](https://github.com/jinnycho/jinnycho.github.io/blob/main/notes/anti-cars/index.html)

### Write a new mindmap blob
1. If you want to add a new mindmap blob, it depends on the size of the category.
    - If it's a big category that will have smaller blobs, use `mindmap-1`
    - If it's a small category that is part of the already existing big category, use `mindmap-2`
2. Update the first [index.html](https://github.com/jinnycho/jinnycho.github.io/blob/main/index.html)
3. Update the related [css](https://github.com/jinnycho/jinnycho.github.io/blob/main/styles/css/basic.css)
4. Add a new folder and insert `index.html` that contains the category and its related CSS
    - [Example](https://github.com/jinnycho/jinnycho.github.io/blob/main/notes/index.html)