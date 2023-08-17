

function Modal(props) {
    return (
        <div className="modal">
            <div>Im a modal dialog</div>
            <button onClick={props.onClose}>Close</button>
        </div>
    );
}


export default Modal;