import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { messageFromFriend } from '../redux/action/messages';

const UserCorrespondence = () => {
  const [value, setValue] = React.useState('');

  const { number } = useParams();
  const dispatch = useDispatch();
  const message = useSelector(({ messages }) => messages);
  const messageCurrentUser = message.find((el) => el.id === +number);

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onAddMessage = () => {
    const messageFriend = {
      name: messageCurrentUser.name,
      id: messageCurrentUser.id,
      text: value,
    };
    dispatch(messageFromFriend(messageFriend));
    setValue('');
  };

  if (!messageCurrentUser) {
    return <div className="wrapper-block">Такой переписки не существует</div>;
  }

  return (
    <div className="wrapper-block">
      <div>
        <Link to="/messages">
          <button className="btn btn-blue">Вернуться обратно</button>
        </Link>
      </div>
      <div>{messageCurrentUser.name}</div>
      {messageCurrentUser.text.map((item, index) => (
        <div key={`${item}_${index}`}>{item}</div>
      ))}
      <div>
        <input
          onChange={onChangeValue}
          value={value}
          placeholder="Напишите что-то"
          type="text"
        />
        <button onClick={onAddMessage} className="btn">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default UserCorrespondence;
