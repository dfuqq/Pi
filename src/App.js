import React, { useState } from "react";
import {
    ConfigProvider,
    AdaptivityProvider,
    AppRoot,
    View,
} from "@vkontakte/vkui";

import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Challenge from "./panels/Challenge";
import Training from "./panels/Training";

const App = () => {
    const [activePanel, setActivePanel] = useState("home");

    const go = (e) => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    const altGo = (panel) => {
        setActivePanel(panel);
    };

    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <View activePanel={activePanel}>
                        <Home id='home' go={go} />
                        <Challenge id='challenge' go={go} altGo={altGo} />
                        <Training id='training' go={go} />
                    </View>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};

export default App;
