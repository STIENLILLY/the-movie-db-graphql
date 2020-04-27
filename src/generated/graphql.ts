export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Genres = {
   __typename?: 'Genres';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type GetDetailResponse = {
   __typename?: 'getDetailResponse';
  id: Scalars['Int'];
  title: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path: Scalars['String'];
  overview: Scalars['String'];
  release_date: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
  genres?: Maybe<Array<Maybe<Genres>>>;
};

export type GetDetailTvResponse = {
   __typename?: 'getDetailTvResponse';
  id: Scalars['Int'];
  name: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path: Scalars['String'];
  overview: Scalars['String'];
  first_air_date: Scalars['String'];
  last_air_date: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
  number_of_episodes: Scalars['Int'];
  number_of_seasons: Scalars['Int'];
  genres?: Maybe<Array<Maybe<Genres>>>;
};

export type GetDiscoverResponse = {
   __typename?: 'getDiscoverResponse';
  id: Scalars['Int'];
  title: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path: Scalars['String'];
  overview: Scalars['String'];
  release_date: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
};

export type GetPopularResponse = {
   __typename?: 'getPopularResponse';
  id: Scalars['Int'];
  title: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path: Scalars['String'];
  overview: Scalars['String'];
  release_date: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
};

export type GetPopularTvResponse = {
   __typename?: 'getPopularTvResponse';
  id: Scalars['Int'];
  name: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
};

export type GetThisWeekResponse = {
   __typename?: 'getThisWeekResponse';
  id: Scalars['Int'];
  name: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
};

export type GetTodayResponse = {
   __typename?: 'getTodayResponse';
  id: Scalars['Int'];
  name: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
};

export type GetTopRatedResponse = {
   __typename?: 'getTopRatedResponse';
  id: Scalars['Int'];
  name: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
};

export type NowPlayingResponse = {
   __typename?: 'nowPlayingResponse';
  id: Scalars['Int'];
  title: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path: Scalars['String'];
  overview: Scalars['String'];
  release_date: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
};

export type Query = {
   __typename?: 'Query';
  getDetail?: Maybe<GetDetailResponse>;
  getDetailTv?: Maybe<GetDetailTvResponse>;
  getDiscover: Array<GetDiscoverResponse>;
  getPopular: Array<GetPopularResponse>;
  getPopularTv: Array<GetPopularTvResponse>;
  getThisWeek: Array<GetThisWeekResponse>;
  getToday: Array<GetTodayResponse>;
  getTopRated: Array<GetTopRatedResponse>;
  nowPlaying: Array<NowPlayingResponse>;
  searchMovie: Array<Maybe<SearchMovieResponse>>;
  searchTv: Array<Maybe<SearchTvResponse>>;
  upComing: Array<UpComingResponse>;
};


export type QueryGetDetailArgs = {
  id: Scalars['Int'];
};


export type QueryGetDetailTvArgs = {
  id: Scalars['Int'];
};


export type QuerySearchMovieArgs = {
  query: Scalars['String'];
};


export type QuerySearchTvArgs = {
  query: Scalars['String'];
};

export type SearchMovieResponse = {
   __typename?: 'searchMovieResponse';
  id: Scalars['Int'];
  title: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path: Scalars['String'];
  overview: Scalars['String'];
  release_date: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
};

export type SearchTvResponse = {
   __typename?: 'searchTvResponse';
  id: Scalars['Int'];
  name: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path?: Maybe<Scalars['String']>;
  overview: Scalars['String'];
  release_date: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
};

export type UpComingResponse = {
   __typename?: 'upComingResponse';
  id: Scalars['Int'];
  title: Scalars['String'];
  poster_path: Scalars['String'];
  backdrop_path: Scalars['String'];
  overview: Scalars['String'];
  release_date: Scalars['String'];
  popularity: Scalars['Float'];
  vote_count: Scalars['Int'];
  vote_average: Scalars['Float'];
};
