import React, { useState } from "react";
import {
    ConfigProvider,
    AdaptivityProvider,
    AppRoot,
    View,
} from "@vkontakte/vkui";

import "@vkontakte/vkui/dist/vkui.css";

import Gag from "./panels/Gag";
import Challenge from "./panels/Challenge";

const App = () => {
    const [activePanel, setActivePanel] = useState("home");

    const go = (e) => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <View activePanel={activePanel}>
                        <Gag id='home' go={go} />
                        <Challenge id='challenge' go={go} />
                    </View>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};

export default App;
