import { createPortal } from 'react-dom';
//import Modal from './Modal';

import { useState, Fragment } from 'react';

function HandleModal() {

    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false)
    }

    return (
        <Fragment>
            <button onClick={openModal}>
                Create Post
            </button>
            {showModal && createPortal(<Modal onClose={closeModal} />,
                document.body
            )}
        </Fragment>
    );
}

export default HandleModal;