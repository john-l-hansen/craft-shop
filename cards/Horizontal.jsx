import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Sample(){
    const [horizontalState, setHorizontalState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
    });

    const toggleColor = (e) => {
        e.preventDefault();
        setHorizontalState({
            ...horizontalState,
            showColor:!horizontalState.showColor,
        })
    }

     const changeColor = (e) => {
        e.preventDefault();
        setHorizontalState({
            ...horizontalState,
            showColor:!horizontalState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setHorizontalState({
            ...horizontalState,
            selectedFont: e.target.value,
        })
    }

   let horizontalComp = (
                <div className="flex justify-start items-center border dark:border-none rounded-xl bg-white dark:bg-gray-900" style={{"width":"356px", "height":"auto"}}>
                    <div className="w-1/2 flex justify-start items-center">
                        <div className="ml-7">
                            <p className="w-8 h-8 p-0 m-0 text-base font-medium text-center text-gray-800 bg-gray-200 rounded-full">A</p>
                        </div>
                        <div className="ml-7 leading-normal">
                            <h4 className={"p-0 m-0 font-bold text-base leading-6 " + horizontalState.selectedFont}>Header</h4>
                            <p className={"p-0 m-0 font-normal text-sm leading-5 " + horizontalState.selectedFont}>Subheader</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end items-center">
                        <img src="vvv.png" className="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" width="100%"/>
                    </div>
                </div>
    )

    let horizontalCompString = '<div class="flex justify-start items-center border rounded-xl bg-white" style="width:356px; height:auto">\n'+
    '                    <div class="w-1/2 flex justify-start items-center">\n'+
    '                        <div class="ml-7">\n'+
    '                            <p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-gray-800 bg-gray-200 rounded-full">A</p>\n'+
    '                        </div>\n'+
    '                        <div class="ml-7 leading-normal">\n'+
    '                            <h4 class="p-0 m-0 font-bold text-base leading-6 ' + horizontalState.selectedFont + '">Header</h4>\n'+
    '                            <p class="p-0 m-0 font-normal text-sm leading-5 ' + horizontalState.selectedFont + '">Subheader</p>\n'+
    '                        </div>\n'+
    '                    </div>\n'+
    '                    <div class="w-1/2 flex justify-end items-center">\n'+
    '                        <img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" width="100%"/>\n'+
    '                    </div>\n'+
    '                </div>';

    //let stackedCompString = '<div><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + stackedState.selectedColor +'">A</p></div>';

    return(
        <>
            <PreviewWindowDisabled 
            horizontalComp={horizontalComp} 
            horizontalCompString={horizontalCompString}
            showColor={horizontalState.showColor} 
            selectedColor={horizontalState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}