import React, {useEffect, useState} from 'react';
import InputMessage from "../../Component/InputMessage/InputMessage";
import DisplayMessages from "../../Component/DisplayMessages/DisplayMessages";
import './Chat.css';
import axios from "axios";

const Chat = () => {
    const [error, setError] = useState(null);
    const [messages, setMessages] = useState([]);

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
        fetchData().catch();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            // let lastMsg = messages[10].datetime;
            let lastMsg = "2021-08-14T08:13:01.229Z";
            const urlNewMsg = 'http://146.185.154.90:8000/messages?datetime=' + lastMsg;
            const response = await axios.get(urlNewMsg);
            console.log(response);
            const post = response.data;
            console.log(messages);
            console.log(post);
            setMessages([...messages, post]);
        }
        fetchData().catch();
    }, []);


    return (
        <div className="Cont">
            <DisplayMessages
                messages={messages}
            />
            <InputMessage/>
        </div>
    );
};

export default Chat;