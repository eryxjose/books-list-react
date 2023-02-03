import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookCreate() {
    const [title, setTitle] = useState('');
    const { handleCreateBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        handleCreateBook(title);
        setTitle('');
    }

    return (
        <div className='book-create'>
            <form onSubmit={handleSubmit}>
                <label>Título: </label>
                <input className='input' value={title} onChange={handleChange} />
                <button className='button'>Adicionar</button>
            </form>
        </div>
    );
}

export default BookCreate;