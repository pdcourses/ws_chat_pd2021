import ACTION_TYPES from './types';

export const getMessagesAction = () => ({
  type: ACTION_TYPES.GET_MESSAGES_ACTION,
});
export const getMessagesRequest = () => ({
  type: ACTION_TYPES.GET_MESSAGES_REQUEST,
});
export const getMessagesSuccess = (data) => ({
  type: ACTION_TYPES.GET_MESSAGES_SUCCESS,
  data: { data },
});
export const getMessagesError = (err) => ({
  type: ACTION_TYPES.GET_MESSAGES_ERROR,
  data: { error: err },
});

export const newMessageAction = (data) => ({
  type: ACTION_TYPES.NEW_MESSAGE_ACTION,
  data: { data },
});
export const newMessageRequest = () => ({
  type: ACTION_TYPES.NEW_MESSAGE_REQUEST,
});
export const newMessageSuccess = (data) => ({
  type: ACTION_TYPES.NEW_MESSAGE_SUCCESS,
  data: { data },
});
export const newMessageError = (err) => ({
  type: ACTION_TYPES.NEW_MESSAGE_ERROR,
  data: { error: err },
});
