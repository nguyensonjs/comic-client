export interface ISeoOnPage {
  titleHead: string
  descriptionHead: string
  og_type: string
  og_image: string[]
  og_url: string
}

export interface IOption {
  id?: string
  name?: string
  slug?: string
}

export interface IPagination {
  totalItems?: number
  totalItemsPerPage?: number
  currentPage?: number
  pageRanges?: number
}
