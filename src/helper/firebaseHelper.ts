import { SubscribeUsersRequestResponse } from 'Response'

export const formatUserInfoToStateObj = (
  obj: SubscribeUsersRequestResponse[]
) => {
  return obj.map(({ avatar, id, userName }) => ({
    avatar,
    userName,
    userId: id,
  }))
}
