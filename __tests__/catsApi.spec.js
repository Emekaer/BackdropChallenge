import fetchMock from 'jest-fetch-mock';
import {setupApiStore} from '../testUtils';
import {catApi} from 'services/catsService';
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
