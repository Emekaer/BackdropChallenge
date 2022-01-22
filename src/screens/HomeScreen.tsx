import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, } from 'react-native';

import CatListComponent from 'components/CatListComponent';
import { FlatList } from 'react-native';
import ScreenContainer from 'components/ScreenContainer';
import { useGetCatsByPageQuery } from 'services/catsService';

const Home = () => {

    const { data, error, isLoading } = useGetCatsByPageQuery(0)

    const keyExtractor = useCallback((item) => item.id.toString()
        , [])

    const renderItem = useCallback(({ item }) => <CatListComponent item={item} />
        , [])

    return (
        <ScreenContainer >
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </ScreenContainer>
    );
}

export default Home;

const styles = StyleSheet.create({
})
