import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from 'components/Header/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/" component={ContactsView} />
      </Switch>
    </Container>
  );
}
