export interface IPaginatedItem<T> extends IPagination {
  items: T[];
}

export interface IPagination {
  pageNo: number;
  pageSize: number;
  count: number;
  searchText?: string;
}

export interface PaginatedItem<T> extends IApiResponse {
  result?: IPaginatedItem<T>;
  data?: IPaginatedItem<T>;
}

export interface NonPaginatedItem<T> extends IApiResponse {
  result?: T;
  data?: T;
}

export interface IApiResponse {
  statusCode: number;
  message: string;
}

export abstract class Globals{
  static PageCount = 0;
  static PageNo = 1;
  static PageSize = 25;
  static MaxSize = 2147483647;
}
