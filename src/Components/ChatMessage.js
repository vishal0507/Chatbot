import React from 'react';
import {Person,ChatDots} from 'react-bootstrap-icons'

const ChatMessage = (props) => {
  return (
    <div>
        <div className={` d-flex ${props.user && 'justify-content-end'}`}>
        {
            props.user ? (
                <span className='message_right'>
                    <span className='message_text'>{props.message}</span>
                    <Person className='message_icon'/>
                </span>
            ) : (
            <span className='message_left'>
                <ChatDots className='message_icon'/>
                <span className='message_text'>{props.message}</span>
            </span>
            )
        }
        </div>
    </div>
  )
}

export default ChatMessage