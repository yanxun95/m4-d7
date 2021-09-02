import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom'
import Register from './components/Register'

const App = () => {
  return (
    <Router>

      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">
              <div className={Location.pathname === '/' ? 'nav-lick active' : 'nav-link'}>Home</div>
            </Link>
            <Link to="/register">
              <div className={Location.pathname === '/register' ? 'nav-lick active' : 'nav-link'}>Register</div>
            </Link>
          </Nav>
        </Navbar>
        <header className="App-header">
          {/* <WarningSign text="Watch out again!" /> */}
          {/* <MyBadge text="NEW!!" color="info" /> */}
          {/* <SingleBook book={fantasyBooks[0]} /> */}
          {/* <BookList books={fantasyBooks} /> */}
          <Route path="/" exact render={(routerProps) => <BookList books={fantasyBooks} />} />
          <Route path="/register" exact render={(routerProps) => <Register />} />
        </header>
      </div>
    </Router>

  )
}

export default App
