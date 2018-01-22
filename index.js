class Renderer {
  constructor(props) {
    this.root = props.root
  }

  createElement({ tagName, children = [], onclick = () => {} }) {
    const el = document.createElement(tagName)
    onclick ? (el.onclick = onclick) : null
    children.forEach(child => {
      el.appendChild(child)
    })
    this.root.appendChild(el)
  }

  clearElements() {
    while (this.root.hasChildNodes()) {
      this.root.removeChild(this.root.lastChild)
    }
  }
}

let state = { counter: 0 }

const renderer = new Renderer({ root: document.getElementById('root') })

renderer.createElement({
  tagName: 'button',
  children: [
    document.createTextNode(`Press me to count upwards! ${state.counter}`)
  ],
  onclick: () => console.log('👋')
})