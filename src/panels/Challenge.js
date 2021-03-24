import React, { useState } from "react";
import { View, Panel, PanelHeader, Button } from "@vkontakte/vkui";

import { Icon24Cancel } from "@vkontakte/icons";

import "./Training.css";

const Challenge = ({ go, altGo }) => {
    const [digit, setDigit] = useState(1);
    const [lifes, setLifes] = useState(2);

    const pi = "3.1415926535897932384626433832";

    const [show, setShow] = useState(pi[0] + pi[1]);

    const clicker = (e) => {
        if (e.currentTarget.value === pi[digit + 1]) {
            setDigit(digit + 1);
            digit === 1 ? null : setShow(show + pi[digit]);
        } else {
            if (lifes > 0) {
                setLifes(lifes - 1);
                console.log(lifes);
            } else {
                setTimeout(() => {
                    altGo("home");
                }, 2000);
            }
        }
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
                        <div className='Pi'>
                            <div className='Off'>{show}</div>
                            <div className='Active'>
                                {digit === 1 ? null : pi[digit]}
                            </div>
                        </div>
                    </div>
                    <div className='Wrapper'>
                        <div className='Keyboard'>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                onClick={clicker}
                                value='7'
                            >
                                7
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                onClick={clicker}
                                value='8'
                            >
                                8
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                onClick={clicker}
                                value='9'
                            >
                                9
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                onClick={clicker}
                                value='4'
                            >
                                4
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                onClick={clicker}
                                value='5'
                            >
                                5
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                onClick={clicker}
                                value='6'
                            >
                                6
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                onClick={clicker}
                                value='1'
                            >
                                1
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                onClick={clicker}
                                value='2'
                            >
                                2
                            </Button>
                            <Button
                                mode='overlay_outline'
                                className='Button Button-Kbrd'
                                onClick={clicker}
                                value='3'
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
                                onClick={clicker}
                                value='0'
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
