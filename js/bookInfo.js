import React from 'react';
import Book from './book';

function BookInfo({book, close}){
    return(
        <article className='darkBg'>
            <header>
                <a href='#' onClick={()=> close('')}>X</a>
            </header>
            <section className='bookInfo'>
                <article className='loneBook' style={{backgroundColor: book.color}}>
                    <aside></aside>
                    <section className='about'>
                        <h2 className='black'>{book.title}</h2>
                        <h2 className='black'>{book.author}</h2>
                    </section>
                </article>
                <article>
                    <h2  >{book.title}</h2>
                    <h2 >{book.author}</h2>
                    <p>{book.plot}</p>
            </article>            
            </section>
        </article>
        
    )
}

export default BookInfo;