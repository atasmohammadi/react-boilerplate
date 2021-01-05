import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Home from '../index';

const mockStore = configureStore([]);

const mockedProps = {
  loadMovies: jest.fn(),
  loadPeoples: jest.fn(),
  addFavoriteMovie: jest.fn(),
  removeFavoriteMovie: jest.fn(),
  navigation: {
    navigate: jest.fn(),
  },
  movies: [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "characters": [
        "http://swapi.dev/api/people/1/",
        "http://swapi.dev/api/people/2/",
        "http://swapi.dev/api/people/3/",
        "http://swapi.dev/api/people/4/",
        "http://swapi.dev/api/people/5/",
        "http://swapi.dev/api/people/6/",
        "http://swapi.dev/api/people/7/",
        "http://swapi.dev/api/people/8/",
        "http://swapi.dev/api/people/9/",
        "http://swapi.dev/api/people/10/",
        "http://swapi.dev/api/people/12/",
        "http://swapi.dev/api/people/13/",
        "http://swapi.dev/api/people/14/",
        "http://swapi.dev/api/people/15/",
        "http://swapi.dev/api/people/16/",
        "http://swapi.dev/api/people/18/",
        "http://swapi.dev/api/people/19/",
        "http://swapi.dev/api/people/81/"
      ],
      "planets": [
        "http://swapi.dev/api/planets/1/",
        "http://swapi.dev/api/planets/2/",
        "http://swapi.dev/api/planets/3/"
      ],
      "starships": [
        "http://swapi.dev/api/starships/2/",
        "http://swapi.dev/api/starships/3/",
        "http://swapi.dev/api/starships/5/",
        "http://swapi.dev/api/starships/9/",
        "http://swapi.dev/api/starships/10/",
        "http://swapi.dev/api/starships/11/",
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/13/"
      ],
      "vehicles": [
        "http://swapi.dev/api/vehicles/4/",
        "http://swapi.dev/api/vehicles/6/",
        "http://swapi.dev/api/vehicles/7/",
        "http://swapi.dev/api/vehicles/8/"
      ],
      "species": [
        "http://swapi.dev/api/species/1/",
        "http://swapi.dev/api/species/2/",
        "http://swapi.dev/api/species/3/",
        "http://swapi.dev/api/species/4/",
        "http://swapi.dev/api/species/5/"
      ],
      "created": "2014-12-10T14:23:31.880000Z",
      "edited": "2014-12-20T19:49:45.256000Z",
      "url": "http://swapi.dev/api/films/1/"
    },
  ],
  favoriteMovies: [],
  peoples: [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/6/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/7/"
      ],
      "species": [
        "https://swapi.dev/api/species/1/"
      ],
      "vehicles": [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
      ],
      "starships": [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.dev/api/people/1/"
    }
  ],
  error: false,
  loading: false,
  success: true,
};

jest.mock('../../../utils/injectSaga', () => ({
  useInjectSaga: jest.fn(),
}));

describe('Home Screen', () => {
  let store;
  let component: React.ReactNode;

  beforeEach(() => {
    store = mockStore(mockedProps);
    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});