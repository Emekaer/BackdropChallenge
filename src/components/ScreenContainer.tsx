import React, { FC, ReactNode } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, Text, Button } from 'react-native';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

import colors from 'utils/colors';

const { width, height } = Dimensions.get("screen")

type ScreenContainer = {
    children: ReactNode;
    loading?: boolean;
    error?: FetchBaseQueryError | SerializedError | undefined;
    refetch?: () => void
}

const ScreenContainer = React.memo(({ children, loading, error, refetch }: ScreenContainer) => {
    if (loading) return <View style={styles.central}><ActivityIndicator /></View>
    if (error) return <View style={styles.central}><Text>An error Occured. Please reach out to customer support.</Text><Button title='Refresh' onPress={refetch} /></View>

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
        backgroundColor: colors.white,
        marginBottom: height * 0.14
    },
    central: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
