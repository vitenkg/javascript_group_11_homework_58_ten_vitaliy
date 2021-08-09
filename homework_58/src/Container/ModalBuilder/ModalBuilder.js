import React, {useState} from 'react';
import Modal from "../../Components/UI/Modal/Modal";
import InnerModal from "../../Components/InnerModal/InnerModal";
import Alert from "../../Components/UI/Alert/Alert";

const ModalBuilder = () => {
    const [modalShow, setModalShow] = useState(false);

    const [alertShow, setAlertShow] = useState(false);

    const [selected, setSelected] = useState('open');

    const [inputForm, setInputForm] = useState('');

    const showModalHandle = () => {
        setModalShow(true);
    };

    const closeModalHandle = () => {
        setModalShow(false);
    };

    const continuedHandler = () => {
        alert('all is super');
    };

    const inputHandle = value =>{
        setInputForm(value);
    };

    const selectedHandleSubmit = e => {
        e.preventDefault();
        setAlertShow(true);
    };

    const selectedHandleChange = value => {
        setSelected(value);
    };

    const closeAlertHandle = () =>{
        setAlertShow(false);
    };

    return (
        <div>
            <Modal
                show={modalShow}
                close={closeModalHandle}>
                <InnerModal
                    close={closeModalHandle}
                    continued={continuedHandler}
                    textHeader='Всяко разно'
                    textBody='То что должно быть выведенно'
                />
            </Modal>

            <Alert
                show={alertShow}
                type={selected}
                // dismiss={}
                close={closeAlertHandle}
            >
                {inputForm}
            </Alert>

            <p>
                <button
                    type="button"
                    onClick={showModalHandle}
                    className="btn btn-primary"
                >
                    Modal
                </button>
            </p>
            <form onSubmit={selectedHandleSubmit}>
                <label>
                    Input message
                    <input
                        type="text"
                        className="form-control"
                        onChange={e => inputHandle(e.target.value)}
                    />
                </label>
                <label>
                    input type of alert
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={selected}
                        onChange={e => selectedHandleChange(e.target.value)}
                    >
                        <option value="open">Open this select menu</option>
                        <option value="Primary">Primary</option>
                        <option value="Success">Success</option>
                        <option value="Danger">Danger</option>
                        <option value="Warning">Warning</option>
                    </select>
                </label>
                <button type="submit" className="btn btn-secondary">OK</button>
            </form>
        </div>
    );
};

export default ModalBuilder;