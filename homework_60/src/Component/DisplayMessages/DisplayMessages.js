import './DisplayMessages.css';
import dayjs from "dayjs";
import React, {useEffect, useRef} from "react";

const DisplayMessages = (props) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [props.messages]);

    return (
        <div className="ContainerMessages">
            <div className="Message">
                {props.messages.map(mess => {
                    if (mess.author === 'Writer') {
                        return (
                            <fieldset
                                key={mess._id}
                                className={['MessField Owner', mess.id].join(' ')}
                            >
                                <legend>{mess.author}</legend>
                                <p className="Mess">{mess.message}</p>
                                <p className="Time">{dayjs(mess.datetime).format('DD-MMM HH:mm')}</p>
                            </fieldset>
                        )
                    } else {
                        return (
                            <fieldset
                                key={mess._id}
                                className={['MessField Foreign', mess.id].join(' ')}
                            >
                                <legend>{mess.author}</legend>
                                <p className="Mess">{mess.message}</p>
                                <p className="Time">{dayjs(mess.datetime).format('DD-MMM HH:mm')}</p>
                            </fieldset>
                        )
                    }

                }

                )}
            </div>
            <div ref={messagesEndRef} />
        </div>
    );
};
export default DisplayMessages;
