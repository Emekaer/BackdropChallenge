import {store} from 'reducer/store';
import {
  addCats,
  removeFavourite,
  addFavourite,
  reset,
} from 'reducer/catsReducer';

describe('Cat Reducer', () => {
  afterEach(() => store.dispatch(reset()));
  afterEach(() => store.dispatch(reset()));
  
  test('Add an array of cats', () => {
    let state = store.getState().cats;
    const initialCats = state.cats.length;
    expect(initialCats).toEqual(0);

    store.dispatch(
      addCats([
        {id: '4', url: 'https://picsum.photos/200/300?random=1'},
        {id: '3', url: 'https://picsum.photos/200/300?random=1'},
        {id: '2', url: 'https://picsum.photos/200/300?random=4'},
      ]),
    );

    state = store.getState().cats;

    expect(state.cats.length).toBeGreaterThan(initialCats);
    expect(state.cats.length).toEqual(3);
  });

  test('Add a new cat to favourite', () => {
    let state = store.getState().cats;
    const initialFavouriteCats = state.favourites.length;

    store.dispatch(
      addFavourite({id: '4', url: 'https://picsum.photos/200/300?random=1'}),
    );
    state = store.getState().cats;
    const newFavourite = state.favourites.find(cat => cat.id === '4');
    expect(newFavourite?.url).toBe('https://picsum.photos/200/300?random=1');
    expect(state.favourites.length).toBeGreaterThan(initialFavouriteCats);
    expect(state.favourites.length).toEqual(1);
  });

  test('Deletes a cat from favourites with id', () => {
    store.dispatch(
      addFavourite({id: '3', url: 'https://picsum.photos/200/300?random=1'}),
    );
    store.dispatch(
      addFavourite({id: '2', url: 'https://picsum.photos/200/300?random=4'}),
    );

    let state = store.getState().cats;
    const initialFavouriteCats = state.favourites.length;

    expect(state.favourites.length).toEqual(2);
    store.dispatch(removeFavourite('3'));
    state = store.getState().cats;

    expect(state.favourites.length).toBeLessThan(initialFavouriteCats); // Checking if new length smaller than inital length, which is 2
    expect(state.favourites.length).toEqual(1);
  });

  test('Unfavourite a cat ', () => {
    store.dispatch(
      addFavourite({id: '3', url: 'https://picsum.photos/200/300?random=1'}),
    );

    let state = store.getState().cats;
    const initialFavouriteCats = state.favourites.length;
    expect(state.favourites.length).toEqual(1);

    store.dispatch(
      addFavourite({id: '3', url: 'https://picsum.photos/200/300?random=1'}),
    );

    state = store.getState().cats;

    expect(state.favourites.length).toBeLessThan(initialFavouriteCats);
    expect(state.favourites.length).toEqual(0);
  });
});
