import { useState} from 'react';
import useBooksContext from '../hooks/use-hooks-context';

function BookCreate() {
    const [title, setTitle] = useState('');
    const { handleCreateBook } = useBooksContext();

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