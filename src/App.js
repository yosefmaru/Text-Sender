import React, {Component} from 'react'
import Form from './Form'
import { Helmet } from 'react-helmet'

const TITLE = 'Verse Sender'

class App extends Component {

    render() {
        return (
            <div className="container">
              <Form />
              <>
                <Helmet>
                  <title>{ TITLE }</title>
                </Helmet>
              </>
            </div>
          )
      }
}

export default App