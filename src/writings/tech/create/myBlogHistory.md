# The Evolution of My Blogging Journey
## 2023/10/15
Believe it or not, my blogging history goes back 5 years, with changes almost every year. I wanted to share my likes, dislikes, and how I created my all-time favorite version.

### What I was looking for
1. I want my blog to look unique & well designed.
2. I want to write many blogs that are well organized.
3. I'd love to have full control to add or change things on my blog as I go. (e.g. subscription)

### Version 1 ★☆☆☆☆
I used a static site generator called [Hugo](https://gohugo.io/). It was very well-documented and easy to set up with many interesting templates to choose from. The blog itself was loaded fast too. 

However, it was quite tricky to customize anything (at least at that time). All the 'templates' they offered were quite boring as well, to be honest. I didn't feel attached to it and quickly grew bored over time; it felt more like mass-produced IKEA furniture rather than a handmade piece, if that makes sense.

![Blog version 2 alt ><](https://github.com/jinnycho/jinnycho.github.io/blob/main/src/assets/photos/blog1.jpeg?raw=true)


### Version 2 ★★☆☆☆
My second version was driven by my strong desire to have a very unique and artistic blog of my own. I just used good old javascript and CSS. I was largely inspired by early 2000s web style and I was a huge fan of pixel fonts. I also coded using [p5.js](https://p5js.org/) for the cool 3D effects on the front page because I liked the way it looks.

However, I instinctively felt that I really needed better content organization. I was like, 'Should I use tags? Should I add a search engine?' I was worried about what would happen if I had 100 blog posts, even though I had only written 4. I also found that the web aesthetics of the 2000s with chunky pixel fonts were a bit hard to read. It felt like avant-garde design furniture, yet it wasn't particularly comfortable.

![Blog version 2 alt ><](https://github.com/jinnycho/jinnycho.github.io/blob/main/src/assets/photos/blog2.png?raw=true)

### Version 3 ★★★☆☆
I focused a lot more on improving the content organization for the version 3. Charles inspired me to consider the mind map style and that's what I did. I continued to use javascript & CSS.

However, the mindmap style turned out to be quite challenging. First, positioning each circle was not easy. Plus, as I added more circles, things started to look messy and harder to navigate. It looked worse on the mobile or smaller screen.

![Blog version 3 alt ><](https://github.com/jinnycho/jinnycho.github.io/blob/main/src/assets/photos/blog3.png?raw=true)

### Version 3 ★★★★☆
So here we are, I did another major redesign & refacturing of the code. 

Firstly, I abandoned the conventional mindmap style and transitioned into a more tabular layout. Then I introduced the concept of categories and subcategories to efficiently organize my blogs. I still kept the 2000s web aesthetics with programmer fonts, but I dialed it back to make it less overwhelming.

Engineering-wise, I definitely built it from scratch using JavaScript and CSS. However, I used React to manage various states, from user interactions to URL routing. Using `react-router` was particularly satisfying because it allowed me to link to a particular post with a URL like https://jinnycho.github.io/ideas/architecture/houseIdeas001. I also added a `Subscribe` button using `react-modal` and Cloudflare worker to notify readers when I write new blogs, with the hope that many people will see them. :D

So far, I'm very satisfied. It finally feels like a good cozy handmade furniture that looks good and comfortable to me. But I want to give 4 stars because now I need to write more. Time to get to work!