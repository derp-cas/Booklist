const Book = ({ img, title, author }) => {
    //atribute, eventHandler
    //onClick, onMouseOver
    const clickHandler = () => {
        alert("Hello Motherfucker");
    };
    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
                Click Me!
            </button>
        </article>
    );
};

export default Book;
