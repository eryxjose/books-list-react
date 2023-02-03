import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const { handleEditBookById } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit();
        handleEditBookById(book.id, title);
    };

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Título</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">Salvar</button>
        </form>
    );
}

export default BookEdit;