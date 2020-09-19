import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend, deleteFriend } from '../redux/action/friends';
import { messageFromFriend } from '../redux/action/messages';

const Friends = () => {
  const people = useSelector(({ friends }) => friends.people);
  const friends = useSelector(({ friends }) => friends.friends);

  const dispatch = useDispatch();

  const onAddFriend = (item) => {
    dispatch(addFriend(item));
  };
  const onDeleteFriend = (item) => {
    dispatch(deleteFriend(item));
  };

  const onMessageFriend = (item) => {
    const messageToFriend = prompt('Напишите своему другу', '');
    if (messageToFriend !== null && messageToFriend !== '') {
      const messageFriend = {
        name: item.name,
        id: item.id,
        text: messageToFriend,
      };

      dispatch(messageFromFriend(messageFriend));
    }
  };

  return (
    <div className="friends">
      <div className="friends_left_block wrapper-block">
        {friends.length !== 0 ? (
          friends.map((item) => (
            <div
              className="wrapper-block text-center"
              key={`${item.id}_${item.name}`}
            >
              <div>{item.name}</div>
              <div>
                <button
                  onClick={() => onDeleteFriend(item)}
                  className="btn btn-red"
                >
                  Удалить друга
                </button>
                <button
                  onClick={() => onMessageFriend(item)}
                  className="btn btn-red"
                >
                  Написать
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="wrapper-block-center">
            <p className="friends_text_no">У вас нет друзей :(</p>
          </div>
        )}
      </div>

      <div className="friends_rigth_block wrapper-block">
        {people.map((item) => (
          <div key={item.id} className="wrapper-block text-center">
            {item.name}
            <div>
              <button onClick={() => onAddFriend(item)} className="btn btn-red">
                Добавить друга
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
