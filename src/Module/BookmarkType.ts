export interface Bookmark {
  id: number;
  title: string;
  url: string;
}

export interface InitialStateType {
  bookmarks: Bookmark[];
}
