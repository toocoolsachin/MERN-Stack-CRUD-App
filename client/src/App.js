import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ListPosts from './components/ListPosts';
import './App.css';
import AddPost from './components/AddPost';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={ListPosts} />
          <Route path='/add-post' exact component={AddPost} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
