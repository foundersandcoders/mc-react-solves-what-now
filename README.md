# React Solves What?

## Introduction

Just imagine how much websites have changed in the past 10 years. We don't expect to be browsing static documents anymore. Requirements for our websites have changed. With ever increasing amounts of mobile users and more powerful desktop devices and fast internet connections the expectation is different; browsing the web should be an interactive experience with smooth animations and instant feedback. This means just server side rendering sites just won't cut it any more and more of the application logic needs to be delegated to the client side of your website/application.

Usually at this point of the course your sites DOM updates happen as side effects of reacting to DOM events, for example:

```javascript
  myDomElement.addEventListener("click", (event) => {
    if (/* some important data check */) {
      event.target.className === 'disabled'
      // etc...
    }
  });
```

As your application grows, you'll notice this pattern makes your front end logic hard to keep track of and difficult to debug as your logic is scattered around events with sometimes unpredictable side-effects.

Your application state is kept in the DOM, which can be difficult to manage as getting values from HTML into JS and back again is awkward. There are also some things you want to keep in JS, which means you have more than one source of truth for your state.

This is where front end frameworks get relevant! Most front end frameworks turn this pattern around and render your view logic based on data changes. They store all the application state in JS This makes your code clean, predictable and easier to test.

In this exercise we'll dig deeper into this pattern by writing some code that will update your component whenever the data is updated.

## Learning Objectives

* store state in JS
* render elements based on JS state
* update the DOM when state changed

## Let's go

Everything you need is provided in this repo. Go to `index.js` and get familiar with how the code works.

Your goal is to fill in the missing code so that the button correctly counts upwards when clicked.

You'll need to make the `setState` function update the state object, and when the state has been changed, update the DOM to reflect the new state.

<details>]
<summary><strong>Hint:</strong></summary>
Try not to think imperatively: if you find yourself describing a specific set of instructions to update something (like "get the button, then change the `textContent` to this value, then do this...") you're probably going down the wrong route.
</details>

At the end your button should work like this:

![btn](https://user-images.githubusercontent.com/17658189/39786010-74fda2ba-5316-11e8-8665-32efdfc359b1.gif)
