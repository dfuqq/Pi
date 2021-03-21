import React, { useState } from "react";
import { View, Panel, PanelHeader, Button } from "@vkontakte/vkui";

import { Icon24Cancel } from "@vkontakte/icons";

import "./Challenge.css";

const Challenge = ({ go }) => {
    const [digit, setDigit] = useState(2);

    const pi = "3.1415926535";

    const [show, setShow] = useState(pi[0] + pi[1]);

    const clicker = () => {
        setDigit(digit + 1);
        setShow(show + pi[digit]);
    };

    return (
        <View>
            <Panel>
                <PanelHeader
                    left={
                        <Icon24Cancel
                            width={28}
                            height={28}
                            onClick={go}
                            data-to='home'
                            style={{ color: "#fff" }}
                        />
                    }
                    visor={false}
                    transparent
                />
                <div className='Main'>
                    <div className='Digits'>
                        <div className='Pi'>{show}</div>
                    </div>
                    <div className='Wrapper'>
                        <div className='Keyboard'>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                onClick={clicker}
                            >
                                7
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                            >
                                8
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                            >
                                9
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                            >
                                4
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                            >
                                5
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                            >
                                6
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                            >
                                1
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                            >
                                2
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                            >
                                3
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                style={{ visibility: "hidden" }}
                            />
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                            >
                                0
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                style={{ visibility: "hidden" }}
                            />
                        </div>
                    </div>
                </div>
            </Panel>
        </View>
    );
};

export default Challenge;
