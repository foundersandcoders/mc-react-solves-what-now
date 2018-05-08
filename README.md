# React Solves What?

## Introduction
Just imagine how much websites have changed in the past 10 years. We don't expect to be browsing static documents anymore. Requirements for our websites have changed. With ever increasing amount of mobile users and more powerful desktop devices and fast internet connection the expectation is different; browsing the web should be an interactive experience with smooth animations and instant feedback. This means just server side rendering sites just won't cut it any more and more of the application logic needs to be delegated to the client side of your website/application.

Usually at this point of the course your sites DOM updates happen as side effects of reacting to DOM events, for example: 

```javascript
  myDomElement.addEventListener("click", (event) => {
    if (/* some important data check */) {
      event.target.className === 'disabled'
      // etc...
    }
  });
```
As your application grows, you'll notice this pattern makes your front end logic hard to keep track of and difficult to debug as your logic is scattered around events with sometimes unpredictable side-effects. This is where front end frameworks get relevant! Most front end frameworks turn this pattern around and render your view logic based on data changes, this makes your code clean, predictable and easier to test.

In this excercise we'll dig deeper into this pattern by writing some code that will update your component whenever the data is updated.

## Learning Objectives
- Understanding a potential new flow for rendering content on page: render elements based on data changes
- What are challenges of this pattern
- Baseline level understanding of what your application state is

## Let's go
Everything you need is in provided in this repo. Go to `index.js` and get familiar with how the code works. 

Your goal is to "update" the button leveraginf the methods of the `Renderer` class. You'll want to create a function that updates the state object and when the state has been changed, update the DOM to reflect the new state.

At the end your button should work like this:

![btn](https://user-images.githubusercontent.com/17658189/39786010-74fda2ba-5316-11e8-8665-32efdfc359b1.gif)

If you don't want to clone this repo you can also complete the challenge in [this repl](https://repl.it/@sofiapoh/class-morning-challenge). Remember to fork it so you can save your solution!
