import { IComic } from 'models'
import { get } from 'utils'

export const fetchHomeApi = async (path: string) => {
  const result: IComic = await get(path)
  return result
}
