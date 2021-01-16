import React from 'react';

function Book({book, moreInfo}){
    return (
        <article className='loneBook' style={{ backgroundColor : book.color}} onClick={()=>moreInfo(book)}>
            <aside></aside>
            <section className='about'> 
                <h2>{book.title}</h2>
                <h2>{book.author}</h2>
            </section>
        </article>
    )
}

export default Book;