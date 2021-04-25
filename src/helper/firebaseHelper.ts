import { SubscribeUsersRequestResponse } from 'Response'
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
