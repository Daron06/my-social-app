import React from 'react';
import avatar from '../assets/img/avatar.jpg';

import { useSelector, useDispatch } from 'react-redux';
import { addPosts, deletePosts } from '../redux/action/posts';

const Home = () => {
  const [areaValue, setAreaValue] = React.useState('');

  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts);

  const onHandleTextArea = (e) => {
    setAreaValue(e.target.value);
  };

  const onCreatePost = () => {
    if (areaValue !== '') dispatch(addPosts(areaValue));
    setAreaValue('');
  };

  const onDeletePosts = (index) => {
    dispatch(deletePosts(index));
  };

  return (
    <div className="home">
      <div className="home_left_column">
        <div className="avatar_info wrapper-block">
          <img alt="avatar" className="home-avatar" src={avatar} />
        </div>
      </div>

      <div className="home_rigth_column">
        <div className=" wrapper-block">
          <div className="home_start_info">
            <div>
              <h1 className="home_name">Daron Mora</h1>
              <p className="current_text">Оставь надежду всяк сюда входящий</p>
            </div>
            <p className="home_status">Online</p>
          </div>
        </div>

        <div className="wrapper-block">
          <div className="home_posts">
            <textarea
              onChange={onHandleTextArea}
              value={areaValue}
              className="home_textarea"
              placeholder="что у вас нового?"
              name="text"
            ></textarea>

            <input
              className="btn btn-blue"
              onClick={onCreatePost}
              type="submit"
              value="Опубликовать"
            />
          </div>
        </div>

        {posts.map((posts) => (
          <div className="wrapper-block" key={posts.id}>
            <div> {posts.text}</div>
            <button
              className="btn btn-blue"
              onClick={() => onDeletePosts(posts.id)}
            >
              Удалить пост
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
