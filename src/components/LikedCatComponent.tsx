
import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image'

import colors from 'utils/colors';
import HeartIcon from 'assets/images/HeartIcon';
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("screen")

type LikedCatComponentProps = {
    url: string;
    id: string;
    removeFavouriteCat: (id: string) => void;
}

const CatListComponent = React.memo<LikedCatComponentProps>(({ url, id, removeFavouriteCat }) => {


    console.log("render", new Date().toString(), "like")

    return (
        <View style={styles.container}>
            <FastImage
                style={styles.image}
                source={{
                    uri: url,
                    priority: FastImage.priority.high,
                    cache: FastImage.cacheControl.cacheOnly
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.nameAndLike}>
                <Text style={styles.name}>{id}</Text>
                <Pressable onPress={() => removeFavouriteCat(id)}>
                    <HeartIcon fill={colors.red} width={16} height={13} outline={colors.grey} />
                </Pressable>
            </View>
        </View>
    )
})

export default CatListComponent;

const styles = StyleSheet.create({
    container: {
        width: width * 0.4,
        flexDirection: "column",
        marginBottom: RFValue(25, 812)
    },
    image: {
        width: width * 0.4,
        aspectRatio: 1,
        borderRadius: 10,
        backgroundColor: colors.grey
    },
    nameAndLike: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: RFValue(5, 812)
    },
    name: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.black
    }
})
