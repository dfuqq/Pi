import React from "react";
import { View, Panel, Button } from "@vkontakte/vkui";

import "./Gag.css";

const Gag = ({ go }) => {
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
                            Число
                        </Button>
                    </div>
                </div>
            </Panel>
        </View>
    );
};

export default Gag;
