import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native/pure';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {store} from 'reducer/store';
import Favourite from 'screens/FavouriteScreen';



describe('Favourite Component renders', () => {
  beforeEach(() => cleanup());
  it('has 1 child', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <NavigationContainer>
            <Favourite />
          </NavigationContainer>
        </Provider>,
      )
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
});
