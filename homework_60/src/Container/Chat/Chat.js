import React, {useEffect, useState} from 'react';
import InputMessage from "../../Component/InputMessage/InputMessage";
import DisplayMessages from "../../Component/DisplayMessages/DisplayMessages";
import './Chat.css';
import axios from "axios";
import ring from '../../audio/u_edomlenie.mp3';


const Chat = () => {
    const [error, setError] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const url = 'http://146.185.154.90:8000/messages';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const posts = response.data;
                setMessages(posts);
            } catch (e) {
                console.log(e.response);
                setError('Error: ' + e.response.status);
            }
        }
        fetchData().catch(e => console.log(e));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            let lastMsg = messages[messages.length - 1].datetime;
            const urlNewMsg = 'http://146.185.154.90:8000/messages?datetime=' + lastMsg;
            const response = await axios.get(urlNewMsg);
            try {
                if (messages.length !== 0) {
                    const audio = new Audio(ring);
                    const post = response.data;
                    if (post.length > 0) {
                        setMessages([...messages.concat(post)]);
                        await audio.play();
                    }
                }
            } catch (e) {
                setError('Error: ' + e.response);
                console.log(e.response);
            }
        }

        const interval = setInterval (()=> {
            fetchData().catch(e => console.log(e));
        }, 3000);

        fetchData().catch(e => console.log(e));
        return () => clearInterval(interval);
    }, [messages]);

    const inputSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const data = new URLSearchParams();
            data.set('message', newMessage);
            data.set('author', 'Writer');
            await axios.post(url, data);
            setNewMessage('');
            setMessages([...messages]);
        } catch (e) {
            setError('Error send message: ' + e.response)
        }

    };

    return (
        <>
            {error && (
                <div style={{padding: '10px', background: 'red', color: 'white'}}>
                    {error}
                </div>
            )}
            <div className="Cont">
                <DisplayMessages
                    messages={messages}
                />
                <InputMessage
                    onSubmitForm={(e) => inputSubmitForm(e)}
                    newMessage={newMessage}
                    onChangeInput={e => setNewMessage(e.target.value)}
                />
            </div>
        </>

    );
};

export default Chat;