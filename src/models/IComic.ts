import { IOption, IPagination, ISeoOnPage } from './ICommon'

interface IChapter {
  filename?: string
  chapter_name?: string
  chapter_title?: string
  chapter_api_data?: string
}

interface IBreadCumbItem {
  name?: string
  slug?: string
  isCurrent?: boolean
  position?: number
}

interface IParams {
  type_slug?: string
  filterCategory?: string[]
  sortField?: string
  sortType?: string
  pagination?: IPagination
}

interface IComicDataDetail {
  _id?: string
  name?: string
  slug?: string
  origin_name?: string[]
  status?: string
  thumb_url?: string
  sub_docquyen?: boolean
  category?: IOption[]
  updatedAt?: Date
  chaptersLatest?: IChapter[]
}

interface IComicData {
  seoOnPage?: ISeoOnPage
  items?: IComicDataDetail[]
  titlePage?: string
  breadCumb?: IBreadCumbItem[]
  params?: IParams
  type_list?: string
}

export interface IComic {
  data?: IComicData
  message?: string
  status?: string
}
