import { Switch, Route } from 'react-router-dom';
import ContactsView from './views/ContactsView';
import AppBar from './components/AppBar';
import Container from './components/Container';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        {/* <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} /> */}
        <Route path="/" component={ContactsView} />
      </Switch>
    </Container>
  );
}
