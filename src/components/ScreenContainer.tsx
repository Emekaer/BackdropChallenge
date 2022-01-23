import React, { FC, ReactNode } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, Text } from 'react-native';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

import colors from 'utils/colors';

const { width } = Dimensions.get("screen")

type ScreenContainer = {
    children: ReactNode;
    loading?: boolean;
    error?: FetchBaseQueryError | SerializedError | undefined;
}

const ScreenContainer = React.memo(({ children, loading, error }: ScreenContainer) => {
    if (loading) return <View style={styles.central}><ActivityIndicator /></View>
    if (error) return <View style={styles.central}><Text>An error Occured. Please reach out to customer support.</Text></View>

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
    },
    central: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
