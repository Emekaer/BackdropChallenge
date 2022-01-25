
import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image'

import colors from 'utils/colors';
import HeartIcon from 'assets/images/HeartIcon';

const { width } = Dimensions.get("screen")

type CatListComponentProps = {
    url: string;
    id: string;
    colorFill: string;
    addFavouriteCat: (id: string, url: string) => void
}

const CatListComponent = React.memo<CatListComponentProps>(({ url, id, colorFill, addFavouriteCat }) => {

    console.log("render", id, new Date().toString(), "home", colorFill)
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
            <Pressable onPress={() => addFavouriteCat(url, id)}>
                <HeartIcon fill={colorFill} width={16} height={13} outline={colors.grey} />
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
        width: width * 0.13,
        aspectRatio: 1,
        marginRight: 15,
        borderRadius: 10,
        backgroundColor: colors.grey
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
