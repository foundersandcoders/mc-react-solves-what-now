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

class StatefulRenderer extends Renderer {
  constructor(props) {
    super(props)

    this.state = props.state || {}
    this.componentMakers = props.componentMakers || {}
  }

  setState(newState) {
    Object.assign(this.state, newState)
    this.clearElements()
    this.createElement(this.componentMakers(this, this.state))
  }
}

const statefulRenderer = new StatefulRenderer({
  root: document.getElementById('root'),
  componentMakers: (context, state) => {
    return {
      tagName: 'button',
      onclick: () => context.setState({ counter: state.counter + 1 }),
      children: [
        document.createTextNode(`Press to count upwards ${state.counter}`)
      ]
    }
  }
})

statefulRenderer.setState({ counter: 1 })
//First render happens on initialising state, this is a reactive rendering pattern
