import { useState, useContext } from 'react';
import BooksContext from '../context/books';
import BookEdit from './BookEdit';

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { handleDeleteBookById } = useContext(BooksContext);

    const handleDeleteClick = () => {
        handleDeleteBookById(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }

    return <div className="book-show">
        <img alt="livros" src={`https://picsum.photos/seed/${book.id}/300/200`} />
        <div>{content}</div>
        <div className="actions">
            <button className='edit' onClick={handleEditClick}>Editar</button>
            <button className="delete" onClick={handleDeleteClick}>Excluir</button>
        </div>
    </div>;
}

export default BookShow;