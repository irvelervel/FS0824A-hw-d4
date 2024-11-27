import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import bookJson from './data/horror.json'
// bookJson è un ARRAY DI LIBRI

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        {/* <SingleBook book={bookJson[35]} /> */}
        <BookList books={bookJson} />
      </main>
    </div>
  )
}

export default App
