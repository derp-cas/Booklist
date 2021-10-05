import React from "react";
import ReactDom from "react-dom";
//css ./ means in the same folder
import "./index.css";
import books from "./books";
import Book from "./Book";
//stateless functional component
//always return JSX
//you allways have to return atleast something, even if its an empty html tag

//setup vars

function Booklist() {
    return (
        <section className="booklist">
            {books.map((book) => {
                //{...book} spreads all properties that we have the book object
                return <Book key={book.id} {...book}></Book>;
            })}
        </section>
    );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
