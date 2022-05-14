import { END_POINT } from '@/constants/common'
import axios from 'axios'

export const req = async (path: string, params: {}) =>
  await axios
    .post(`${END_POINT}${path}`, params)
    .then(response => response.data)
    .catch(error => console.log(error))
