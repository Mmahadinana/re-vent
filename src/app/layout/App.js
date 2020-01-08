import React, {Component, Fragment} from 'react';

// import firebase from '../../firebase';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

import { Container } from 'semantic-ui-react';

// firebase.firestore().collection('times').add({
//   tittle: 'Does it work',
//   time_seconds: 45
// })

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />

        <Container className="main">
          <EventDashboard />
        </Container>
      </Fragment>
      
        

        

     
    );
  }
}

export default App;
