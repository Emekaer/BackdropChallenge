import React from 'react';
import renderer from 'react-test-renderer';

import Home from 'screens/HomeScreen';
import {cleanup} from '@testing-library/react-native/pure';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {store} from 'reducer/store';

describe('Home Component renders', () => {
  beforeEach(() => cleanup());

  it('has 1 child', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <NavigationContainer>
            <Home />
          </NavigationContainer>
        </Provider>,
      )
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
});
