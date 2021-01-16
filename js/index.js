import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
    //importera alla bockerna fron JSON
import books from '../assets/childrensbooks.json';
import Book from './book';
import BookInfo from './bookInfo'

function App(props){
    const[currentBook, setCurrentBook] = useState('');


useEffect(()=>{
    console.log('new book up')
}, [currentBook])


return(
    <section className="library">
        <div className="wrapper">
            <h1>Books</h1>
            {currentBook ? <BookInfo book={currentBook} close={setCurrentBook}/>:
                <main>
                    {props.books.map((book, index)=>{
                        return <Book book={book} moreInfo={setCurrentBook} key={index}/>
                    })}
                </main>
            }    
        </div>
    </section>
    )
}

ReactDom.render(<App books={books}/>, document.getElementById('root'));