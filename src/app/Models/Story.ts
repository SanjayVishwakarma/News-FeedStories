
export interface HackerNewsStory {
  title: string;
  by: string;
  url: string;
}
export interface LoadStoriesRequest {
  SearchText: string,
  PageNumber: number,
  PageSize: number
}
