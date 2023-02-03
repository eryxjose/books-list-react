import { useState } from 'react';
import useBooksContext from '../hooks/use-hooks-context';

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const { handleEditBookById } = useBooksContext();

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