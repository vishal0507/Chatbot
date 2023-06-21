import { Button } from 'bootstrap'
import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { analyze } from './utils';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            message: "Hi, May I know your name ?"
        },
    ]);

    const [text,setText] = useState('');
    const onSend = ()=>{
        let list = [...messages, {message: text ,user: true}]
        if(list.length>2){
            const reply = analyze(text);
            list = [
                ...list,
                {message:reply}
            ]
        }else{
            list=[
                ...list,
                {
                    message: `Hi, ${text}`
                },
                {
                    message:"How can i hlp you?",
                },

            ];
        }
        setMessages(list);
        setText("");
        setTimeout(()=>{
            document.querySelector("#copyright").scrollIntoView();
        },1)
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <img src='https://tse4.mm.bing.net/th?id=OIP.lY5-Fq39Ccy5xCKHkTiHbgHaHa&pid=Api&P=0&h=180'
                    alt='logo' height={300} width={200}></img>
                <h2 className='text-primary'>Chatbot</h2>
            </div>

            <div className='chat_Message'>
                {
                    messages.length > 0 && messages.map((data) =>
                        <ChatMessage {...data}/>
                    )

                }
                <div className="d-flex mt-2">
                    <input type='text' className='form-control' value={text} onChange={(e)=> setText(e.target.value)}></input>
                    <button class="btn btn-primary ms-3" type="button" onClick={onSend}>Send</button>
                </div>
                <div id="copyright" className='mt-3'>Copyrights reserved Vishall.</div>
            </div>
        </div>
    )
}

export default Chatbot