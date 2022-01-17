import React, { FC } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import colors from 'utils/colors';

const { width } = Dimensions.get("screen")

const ScreenContainer: FC = React.memo(({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
})

export default ScreenContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingHorizontal: width * 0.07,
        backgroundColor: colors.white
    }
})
