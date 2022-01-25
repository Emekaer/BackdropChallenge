import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, } from 'react-native';

import CatListComponent from 'components/CatListComponent';
import { FlatList, RefreshControl, Dimensions } from 'react-native';
import ScreenContainer from 'components/ScreenContainer';
import { useGetCatsByPageQuery } from 'services/catsService';
import colors from 'utils/colors';
import { useAppDispatch, useAppSelector } from "reducer/hooks"
import { Cat } from "utils/types"
import { addFavourite, } from "reducer/catsReducer"

const { width } = Dimensions.get("screen")

const ITEM_HEIGHT = width * 0.13 + 20

const Home = () => {
    const [page, setPage] = useState(0)
    const [cats, setCats]: any = useState([])
    const dispatch = useAppDispatch();

    const { data = [], error, isLoading, refetch, isFetching } = useGetCatsByPageQuery(page)

    useEffect(() => {
        setCats([...cats, ...data]);
    }, [page]);

    const addFavouriteCat = useCallback((url, id) => {
        dispatch(addFavourite({ url: url, id: id }))
    }, [])

    const favourites = useAppSelector(state => state.cats.favourites)

    const fetchMoreCats = useCallback(() => setPage(page + 1), [page])

    const keyExtractor = useCallback((item, index) => item.id.toString() + index
        , [])

    const renderItem = useCallback(({ item }) => {
        const { id, url } = item

        const colorFill = favourites.findIndex((cat: Cat) => cat.id === id) > -1 ? colors.red : colors.white

        return (<CatListComponent url={url} id={id} colorFill={colorFill} addFavouriteCat={addFavouriteCat} />)
    }
        , [favourites])

    const getItemLayout = useCallback((_, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index
    }), [])

    console.log(isFetching, "isFetching", isLoading, "isloading", "home")
    return (
        <ScreenContainer error={error} loading={isLoading} refetch={refetch}>
            <FlatList
                data={cats}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={isFetching}
                        onRefresh={refetch}
                        removeClippedSubviews={true}
                        title="Fetching new cats..."
                        titleColor={colors.grey}
                    />
                }
                onEndReachedThreshold={0.4}
                onEndReached={fetchMoreCats}
                renderToHardwareTextureAndroid
                scrollEventThrottle={100}
                bounces={false}
                maxToRenderPerBatch={12}
                initialNumToRender={12}
                removeClippedSubviews={true}
                getItemLayout={getItemLayout}
            />
        </ScreenContainer>
    );
}

export default Home;

const styles = StyleSheet.create({
})
