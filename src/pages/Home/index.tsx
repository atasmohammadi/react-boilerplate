import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';
import { useInjectSaga } from '../../utils/injectSaga';
import type {
  HomeScreenPropsType,
  Movie
} from './types';
import * as actions from './actions';
import logo from './logo.svg';
import './styles.css';

import * as selectors from './selectors';
import saga from './saga';

function Home(props: HomeScreenPropsType): React.ReactNode {
  const { movies, loadMovies } = props;
  useInjectSaga({ key: 'Home', saga });

  const moviesArray = Object.values(movies)

  // when component mounts
  React.useEffect(() => {
    // do side effects here
    loadMovies();
  }, []);

  // Render list item ( movie )
  function renderItem(item: Movie) {
    return (
      <li>{item.title}</li>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Home/index.tsx</code> and save to reload.
      </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
      </header>
      <ul>
        {moviesArray.map(movie => renderItem(movie))}
      </ul>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  movies: selectors.makeSelectMovies(),
  loading: selectors.makeSelectLoading(),
  error: selectors.makeSelectError(),
  success: selectors.makeSelectSuccess(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    loadMovies: () => dispatch(actions.loadMovies()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, React.memo)(Home);
