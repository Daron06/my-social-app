import { combineReducers } from 'redux';

import messages from './messages';
import posts from './posts';
import friends from './friends';

export const rootReducer = combineReducers({ messages, posts, friends });
