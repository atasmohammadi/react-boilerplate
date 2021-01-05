export interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: Date;
  edited: Date;
  url: string;
}

export interface HomeScreenPropsType {
  loadMovies: () => void;
  movies: Movie[];
  error: boolean;
  success: boolean;
  loading: boolean;
}

export interface MOVIES_OBJECT {
  [key: string]: Movie;
}

export interface HOME_STATE {
  movies: MOVIES_OBJECT;
  error: boolean;
  success: boolean;
  loading: boolean;
}

export interface ACTION {
  type: string;
  payload?: {
    movies: Movie[];
  }
}