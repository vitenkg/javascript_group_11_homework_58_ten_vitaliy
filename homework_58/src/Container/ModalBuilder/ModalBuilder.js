import React, {useState} from 'react';
import Modal from "../../Components/UI/Modal/Modal";
import InnerModal from "../../Components/InnerModal/InnerModal";

const ModalBuilder = () => {
    const [modalShow, setModalShow] = useState(false);

    const showModalHandle = () => {
        setModalShow(true);
    };

    const closeModalHandle = () => {
        setModalShow(false);
    };
    return (
        <div>
            <Modal
                show={modalShow}
                close={closeModalHandle}>
                <InnerModal
                    close={closeModalHandle}
                    textHeader={'Всяко разно'}
                    textBody={'То что должно быть выведенно'}
                />
            </Modal>

            <button type="button" onClick={showModalHandle} className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-dark">Dark</button>
        </div>
    );
};

export default ModalBuilder;