import React from 'react'

const defaultContextValue = {
  data: {
    // set your initial data shape here
    siteTitle: 'Parkary',
    logo: null,
    currentPage: '',
  },
  set: () => {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class AppContext extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

const ResultsContext = React.createContext()

export { Consumer as default, AppContext, ResultsContext }
