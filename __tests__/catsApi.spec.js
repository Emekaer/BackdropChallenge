import React from 'react';
import renderer from 'react-test-renderer';

import Home from 'screens/HomeScreen';
import {cleanup} from '@testing-library/react-native/pure';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {store} from 'reducer/store';
import fetchMock from 'jest-fetch-mock';
import {setupApiStore} from '../testUtils';
import {catApi, useGetCatsByPageQuery} from 'services/catsService';
import {BASE_URL, CATS_API_KEY} from 'react-native-dotenv';
import catsReducer from 'reducer/catsReducer';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('Cat Api', () => {
  const storeRef = setupApiStore(catApi, {auth: catsReducer});
  fetchMock.mockResponse(JSON.stringify({}));

  test('request is correct', async () => {
    storeRef.store.dispatch({type: 'unrelated'}); // trigger "registered middleware" into place
    const initialState = storeRef.store.getState();

    await storeRef.store.dispatch(
      catApi.endpoints.getCatsByPage.initiate(0, {
        subscriptionOptions: {pollingInterval: 10},
      }),
    );

    expect(storeRef.store.getState()).toBeTruthy();

    storeRef.store.dispatch(catApi.util.resetApiState());

    expect(storeRef.store.getState()).toEqual(initialState);
  });
});
