function createElement({ tagName, text, onClick }) {
  const element = document.createElement(tagName);
  element.textContent = text;
  element.onclick = onClick;
  return element;
}

let state = { count: 0 };

function Button() {
  return createElement({
    tagName: 'button',
    text: `Count ${state.count}`,
    onClick: () => console.log('👋🏼'), // might need to change this
  });
}

function render(/* mysterious params */) {
  // finish me
}

function setState(newState) {
  // definitely need something in here
}

render(/* something might go here */);
