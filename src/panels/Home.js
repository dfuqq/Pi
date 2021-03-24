import React from "react";
import { View, Panel, Button } from "@vkontakte/vkui";

import "./Home.css";

const Home = ({ go }) => {
    return (
        <View>
            <Panel>
                <div className='Main-Home'>
                    <div className='Wrapper-Home'>
                        <Button
                            mode='overlay_outline'
                            onClick={go}
                            data-to='challenge'
                            size='l'
                            stretched
                            className='Button'
                        >
                            Вызов
                        </Button>
                        <Button
                            mode='overlay_outline'
                            onClick={go}
                            data-to='training'
                            size='l'
                            stretched
                            className='Button'
                        >
                            Тренировка
                        </Button>
                        <Button
                            mode='overlay_outline'
                            size='l'
                            stretched
                            className='Button'
                        >
                            Число π
                        </Button>
                    </div>
                </div>
            </Panel>
        </View>
    );
};

export default Home;
