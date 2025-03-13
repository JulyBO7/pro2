export enum ArticleBlock {
    CODE = "CODE",
    TEXT = "TEXT",
    IMAGE = "IMAGE"
}
interface ArticleBaseBlock{
    id: string
    type: ArticleBlock

}
export interface ArticleImageBlockType extends ArticleBaseBlock {
    src: string
    title: string
    type: ArticleBlock.IMAGE
}
export interface ArticleCodeBlockType extends ArticleBaseBlock {
    code: string
    type: ArticleBlock.CODE

}
export interface ArticleTextBlockType extends ArticleBaseBlock {
    title: string
    paragraphs: string []
    type: ArticleBlock.TEXT
}
export type ArticleBlockType = ArticleImageBlockType | ArticleCodeBlockType | ArticleTextBlockType

export type ArticleDetailsType = {
    id: string
    title: string
    subtitle:string
    img:string
    views: number,
    createdAt:string
    type: string [],
    blocks: ArticleBlockType[]
}
export type ArticleSchema = {
    isLoading: boolean
    error?: string
    data?: ArticleDetailsType
}
