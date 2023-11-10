import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Article1 from './Component/Article1'
import Article2 from './Component/Article2'
import List from './Component/List'
import Microsoft from './Component/Microsoft'
export default function App() {
  return (
    <div className='app_body'>
      <header>
        <h2>Header</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/article1">Article 1</Link>
          <Link to="/article2">Article 2</Link>
          <Link to="/list">List Progam</Link>
        </nav>
      </header>
      <div className='app_page_body'>
          <Routes>
            <Route path='/' element={<>Home</>} />
            <Route path='/article1' element={<Article1 />} />
            <Route path='/article2' element={<Article2 />} />
            <Route path='/list' element={<List/>}>
            <Route path=':listName' element={<Microsoft/>}/>
          </Route>
          </Routes>
      </div>
      <footer>O day la footer</footer>
    </div>
  )
}
