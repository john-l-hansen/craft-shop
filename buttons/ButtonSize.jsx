import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function ButtonSize(){

    const [buttonSizeState, setButtonSizeState] = useState({
        showColor: false,
        selectedColor:"bg-night-800",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setButtonSizeState({
            ...buttonSizeState,
            showColor:!buttonSizeState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setButtonSizeState({
            ...buttonSizeState,
            showColor:!buttonSizeState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setButtonSizeState({
            ...buttonSizeState,
            selectedFont: e.target.value,
        })
    }

    

    let buttonSizeComp = (
        <div>
            <div className="">
                <button className={"py-0.5 px-2 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600 leading-5 text-sm dark:bg-gray-200 dark:text-black dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-300 " + buttonSizeState.selectedFont}>
                    Small
                </button>
                <br />
                <button className={"py-2 px-6 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600 leading-5 text-sm dark:bg-gray-200 dark:text-black dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-300 " + buttonSizeState.selectedFont}>
                    Regular
                </button>
                <br />
                <button className={"py-2 px-[74px] flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600 leading-5 text-sm dark:bg-gray-200 dark:text-black dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-300 " + buttonSizeState.selectedFont}>
                    Medium
                </button>
                <br />
                <button className={"py-4 px-40 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600 leading-5 text-sm dark:bg-gray-200 dark:text-black dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-300 " + buttonSizeState.selectedFont}>
                    Large
                </button>
                <br />
                <button className={"py-4 px-60 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600 leading-5 text-sm dark:bg-gray-200 dark:text-black dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-300 " + buttonSizeState.selectedFont}>
                    Extra Large
                </button>
            </div>
        </div>
    )

    let buttonSizeCompString = '<button class="py-0.5 px-2 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600 leading-5 text-sm ' + buttonSizeState.selectedFont + '">\n'+
    '                    Small\n'+
    '                </button>';

    let buttonSizeCompStringTwo = '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600 leading-5 text-sm ' + buttonSizeState.selectedFont + '">\n'+
    '                    Regular\n'+
    '                </button>';

    let buttonSizeCompStringThree = '<button class="py-2 px-[74px] flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600 leading-5 text-sm ' + buttonSizeState.selectedFont + '">\n'+
    '                    Medium\n'+
    '                </button>';

    let buttonSizeCompStringFour = '<button class="py-4 px-40 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600 leading-5 text-sm ' + buttonSizeState.selectedFont + '">\n'+
    '                    Large\n'+
    '                </button>';

    let buttonSizeCompStringFive = '<button class="py-4 px-60 flex justify-center items-center rounded-lg font-medium text-white bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600 leading-5 text-sm ' + buttonSizeState.selectedFont + '">\n'+
    '                    Extra Large\n'+
    '                </button>';
    return(
        <>
            <PreviewWindowDisabled
            buttonSizeComp={buttonSizeComp} 
            buttonSizeCompString={buttonSizeCompString}
            buttonSizeCompStringTwo={buttonSizeCompStringTwo}
            buttonSizeCompStringThree={buttonSizeCompStringThree}
            buttonSizeCompStringFour={buttonSizeCompStringFour}
            buttonSizeCompStringFive={buttonSizeCompStringFive}
            showColor={buttonSizeState.showColor} 
            selectedColor={buttonSizeState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}