import { findAvatarPath } from '@/helpers/common'
import {
  SubscribeLogMessageRequestResponse,
  SubscribeUsersRequestResponse,
} from 'Response'

export const formatUserInfoToStateObj = (
  obj: SubscribeUsersRequestResponse[]
) => {
  return obj.map(({ avatar, id, userName }) => ({
    userId: id,
    userName,
    avatar: findAvatarPath(avatar),
    avatarIndex: avatar,
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
