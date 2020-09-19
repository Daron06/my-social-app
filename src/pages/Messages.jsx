import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Messages = () => {
  const message = useSelector(({ messages }) => messages);
  return (
    <div className="messages wrapper-block">
      {message.length === 0 ? (
        <div className="text-center">У вас нет переписок</div>
      ) : (
        message.map((item) => (
          <Link key={item.id} to={`/messages/${item.id}`}>
            <div className="messages_user btn" className="messages_user">
              <div className="messages_avatar"></div>
              <div className="messages_info">
                <h4>{item.name}</h4>
                <p>{item.text[item.text.length - 1]}</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Messages;
