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

or 
```
ruby -rsinatra -e'set :public_folder, "."; set :port, 8000; not_found { File.read "index.html" }'
```

And then

```
npm run watch
```