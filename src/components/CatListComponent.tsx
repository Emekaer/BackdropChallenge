
import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image'

import HeartIcon from 'assets/images/HeartIcon';
import colors from 'utils/colors';

import { useAppDispatch } from "reducer/hooks"
import { addFavourite, } from "reducer/catsReducer"

type CatListComponentProps = {
    item: {
        url: string;
        id: string;
    };
}

const CatListComponent = React.memo<CatListComponentProps>(({ item }) => {
    const { url, id, } = item

    const dispatch = useAppDispatch();

    const addFavouriteCat = useCallback(() => {
        dispatch(addFavourite(item))
    }, [])

    return (
        <View style={styles.rowContainer}>
            <View style={styles.imageAndName}>
                <FastImage
                    style={styles.image}
                    source={{
                        uri: url,
                        priority: FastImage.priority.high,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <Text style={styles.name}>{id}</Text>
            </View>
            <Pressable onPress={addFavouriteCat}>
                <HeartIcon fill={colors.white} width={16} height={13} outline={colors.grey} />
            </Pressable>
        </View>
    )
})

export default CatListComponent;

const styles = StyleSheet.create({
    rowContainer: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 20
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 15,
        borderRadius: 10
    },
    imageAndName: {
        flexDirection: 'row',
        alignItems: "center"
    },
    name: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.black
    }
})
