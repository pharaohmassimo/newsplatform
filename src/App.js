import React, { useEffect } from "react";                  // useEffect so our alan Btn is initialized once our platform runs
import alanBtn from '@alan-ai/alan-sdk-web';               //importing the alan ai 


const alanKey = '3bdbf3c51a1dfe6597f5c89bf1e764922e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if(command === 'testCommand') {
                    alert('This code was executed');
                }
            }
        })
    }, [])                                                                          //useeffect takes two components - callback function and a dependency array                         
   
    return (
        <div>
            <h1>Alan AI News Application</h1>
        </div>
    );
}

export default App;