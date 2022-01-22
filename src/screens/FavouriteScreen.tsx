import React, { useCallback } from 'react';
import { StyleSheet, } from 'react-native';

import LikedCatComponent from 'components/LikedCatComponent';
import { FlatList } from 'react-native';
import ScreenContainer from 'components/ScreenContainer';
import { useGetCatsByPageQuery } from 'services/catsService';

const Favourite = () => {

    const { data, error, isLoading } = useGetCatsByPageQuery(0)

    const keyExtractor = useCallback((item) => item.id.toString()
        , [])

    const renderItem = useCallback(({ item }) => <LikedCatComponent item={item} />
        , [])

    return (
        <ScreenContainer error={error} loading={isLoading} >
            <FlatList
                data={data}
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
