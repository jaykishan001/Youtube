import React, { useEffect, useState } from 'react'
import { ChatMessage } from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { appendMessage } from '../utils/liveChatSlice';
import { generateRandomName } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const ChatsMessage = useSelector((store) => store.chat.messages)
    const [textChat, settextChat] = useState("");

    useEffect(() => {

        const i = setInterval(() => {
            dispatch(appendMessage(
                {
                    name: generateRandomName(),
                    message: "Heyyy buddy"
                }
            ));
        }, 1000)

        return () => clearInterval(i)

    }, [])

    return (
        <div className=''>

            {ChatsMessage.map((c, index) => <ChatMessage
                name={c.name}
                text={c.message}
                key={index} />)}
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(appendMessage({
                    name: "david",
                    message: textChat
                }))
                settextChat("")
            }}>
                <input type="text" className='text-lg font-thin'
                    value={textChat}
                    onChange={(e) => { settextChat(e.target.value) }}>
                </input>
                <button> send</button>
            </form>
        </div>
    )
}

export default LiveChat;