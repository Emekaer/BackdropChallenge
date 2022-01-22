
import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image'

import colors from 'utils/colors';
import HeartIcon from 'assets/images/HeartIcon';
import { RFValue } from "react-native-responsive-fontsize";


const { width } = Dimensions.get("screen")

interface LikedCatComponentProps {
    item: {
        url: string;
        id: string;
    }
}

const CatListComponent = ({ item: { url, id, } }: LikedCatComponentProps) => (
    <View style={styles.container}>
        <FastImage
            style={styles.image}
            source={{
                uri: url,
                priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.nameAndLike}>
            <Text style={styles.name}>{id}</Text>
            <Pressable>
                <HeartIcon fill={colors.white} width={16} height={13} outline={colors.grey} />
            </Pressable>
        </View>
    </View>
);

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
        borderRadius: 10
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
