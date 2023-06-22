import React, { useEffect, useState } from 'react'
import UserList from './UserList'
import Create from './Create';
 import {
  Routes,
  Route
} from "react-router-dom";
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 1813,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publicationYear: 1951,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    publicationYear: 1927,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    publicationYear: 1851,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publicationYear: 1954,
    genre: "Fantasy",
    price:"500"
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    publicationYear: 1847,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    publicationYear: 1997,
    genre: "Fantasy",
    price:"500"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publicationYear: 1937,
    genre: "Fantasy",
    price:"500"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    publicationYear: 1932,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "The Odyssey",
    author: "Homer",
    publicationYear: "8th century BCE",
    genre: "Epic",
  
  price:"500"},
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    publicationYear: 1890,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    publicationYear: 1818,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    publicationYear: 1605,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publicationYear: 1988,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    publicationYear: 2005,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    publicationYear: 1876,
    genre: "Fiction",
    price:"500"
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    publicationYear: 1943,
    genre:"Fiction",
    price:"500"
   
  }];

function App() {
  
const [users,setUsers]=useState(books);
const [update, setUpdate]=useState({
  status:false,
  id:null
});
  return (
    <div>
     <Routes>
      <Route path='/' element={<UserList setUsers={setUsers}  users={users} setUpdate={setUpdate}update={update}/>}/>
      </Routes> 

    </div>
  )
}

export default App