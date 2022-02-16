import { IArticle } from "./article";

export interface INews {
    status: string;
    totalResults: number;
    articles: IArticle[];
}
