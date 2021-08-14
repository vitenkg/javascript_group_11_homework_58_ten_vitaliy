import './DisplayMessages.css';
import dayjs from "dayjs";

const DisplayMessages = (props) => {
    return (
        <div className="ContainerMessages">
            <div className="Message">
                {props.messages.map(mess => (
                        <fieldset
                            key={mess._id}
                            className={['MessField Foreign', mess.id].join(' ')}
                        >
                            <legend>{mess.author}</legend>
                            <p className="Mess">{mess.message}</p>
                            <p className="Time">{dayjs(props.messages.datetime).format('DD-MMM HH:MM')}</p>
                        </fieldset>
                    )
                )}
            </div>
        </div>
    );
};
export default DisplayMessages;
