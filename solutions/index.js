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
    onClick: () => setState({ count: state.count + 1 }), // increment the state on click
  });
}

// render takes a component and a root node to render it into
function render(Component, root) {
  root.innerHTML = ''; // clear the DOM so we can render our updated component
  return root.appendChild(Component()); // call the component function to get the latest version
}

function setState(newState) {
  Object.assign(state, newState); // will update state with newState
  render(Button, document.getElementById('root')); // re-render the app every time state changes
}

render(Button, document.getElementById('root')); // initial render
