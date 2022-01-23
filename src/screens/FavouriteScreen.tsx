import React, { useCallback } from 'react';
import { StyleSheet, } from 'react-native';

import LikedCatComponent from 'components/LikedCatComponent';
import { FlatList } from 'react-native';
import ScreenContainer from 'components/ScreenContainer';
import { useAppSelector, useAppDispatch } from "reducer/hooks"
import { removeFavourite } from "reducer/catsReducer"

const Favourite = () => {
    const favourites = useAppSelector(state => state.cats.favourites)

    const keyExtractor = useCallback((item) => item.id.toString()
        , [])

    const renderItem = useCallback(({ item }) => <LikedCatComponent item={item} />
        , [])

    return (
        <ScreenContainer>
            <FlatList
                data={favourites}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                numColumns={2}
            />
        </ScreenContainer>
    );
}

export default Favourite;

const styles = StyleSheet.create({
})
