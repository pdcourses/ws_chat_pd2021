import { strictEqual } from 'assert';
import axios from 'axios';
import { io } from 'socket.io-client';
import { newMessageSuccess, newMessageError } from '../actions/actionCreators';
import store from '../store';

const baseURL = 'ws://127.0.0.1:3000';
const socket = io(baseURL);

const CHAT_EVENTS = {
  NEW_MESSAGE: 'NEW_MESSAGE',
  ERROR_NEW_MASSAGE: 'ERROR_NEW_MASSAGE',
};

socket.on(CHAT_EVENTS.NEW_MESSAGE, (msg) => {
  const data = JSON.parse(msg);
  store.dispatch(newMessageSuccess(data));
});

socket.on(CHAT_EVENTS.ERROR_NEW_MASSAGE, (err) => {
  const error = JSON.parse(err);
  store.dispatch(newMessageError(error));
});

export const sendMessage = (data) => {
  socket.emit(CHAT_EVENTS.NEW_MESSAGE, JSON.stringify(data));
};

//http 127.0.0.1:3000/api
const baseAPI = axios.create({ baseURL: 'http://127.0.0.1:3000/api' });
export const getMessages = () => baseAPI.get('/messages');
