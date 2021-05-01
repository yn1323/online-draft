import {
  SubscribeLogMessageRequestResponse,
  SubscribeUsersRequestResponse,
} from 'Response'
import { findAvatarPath } from 'src/helper'

export const formatUserInfoToStateObj = (
  obj: SubscribeUsersRequestResponse[]
) => {
  return obj.map(({ avatar, id, userName }) => ({
    avatar: findAvatarPath(avatar),
    userName,
    userId: id,
  }))
}

export const formatLogMessageToStateObj = (
  obj: SubscribeLogMessageRequestResponse[]
) => {
  return obj.map(({ date, groupId, userId, message }) => ({
    groupId,
    userId,
    message,
    date,
  }))
}
