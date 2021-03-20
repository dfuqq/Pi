import React from "react";
import { AppRoot, ConfigProvider, View } from "@vkontakte/vkui";

export const App = () => {
    return (
        <AppRoot>
            <ConfigProvider>
                <View>Hello World!</View>
            </ConfigProvider>
        </AppRoot>
    );
};
