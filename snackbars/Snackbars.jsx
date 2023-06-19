import React, { Component, useState } from 'react' 
import { CodeGroup } from '../Code';
import PreviewWindowDisabled from '../PreviewWindowDisabled'


export default function Snackbars(){
    const [snackbarsState, setSnackbarsState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setSnackbarsState({
            ...snackbarsState,
            showColor:!snackbarsState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setSnackbarsState({
            ...snackbarsState,
            showColor:!snackbarsState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setSnackbarsState({
            ...snackbarsState,
            selectedFont: e.target.value,
        })
    }


    let snackbarsComp = (
        <div>

            <div className={"w-[344px] bg-gray-100 dark:text-white dark:bg-gray-800 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center " + snackbarsState.selectedFont} style={{"box-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}}>
                <div className="leading-5 text-sm mr-1">Single-line Snackbars</div>
            </div>
            <br></br>

            <div className={"dark:text-white dark:bg-gray-800 w-[344px] bg-gray-100 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center "+ snackbarsState.selectedFont}  style={{"box-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}}>
                <div className="leading-5 text-sm mr-1">Single-line snackbar with action</div>
                <button className="py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 dark:text-gray-300 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200 dark:hover:text-gray-800">
                    Action
                </button>
            </div>
            <br></br>

            <div className={"w-[344px] bg-gray-100 dark:text-white dark:bg-gray-800  flex px-4 py-3.5 rounded-lg items-center max-h-16.5 "+ snackbarsState.selectedFont} style={{"box-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}}> 
            <div className="text-sm leading-5">Two-line snackbar<br />without action</div>
            </div>
            <br></br>

            <div className={"w-[344px]  bg-gray-100 dark:text-white dark:bg-gray-800 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center max-h-16.5 " + snackbarsState.selectedFont} style={{"box-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}}>
            <div className="leading-5 text-sm mr-1">Two-line snackbar<br />with action</div>
            <button className="dark:text-gray-300 dark:hover:text-gray-800 py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            Action
            </button>
            </div>
            <br></br>

            <div className={"w-[344px] bg-gray-100 dark:text-white dark:bg-gray-800 flex flex-col justify-between px-4 py-3.5 pr-2 rounded-lg items-end max-h-16.5 "+ snackbarsState.selectedFont} style={{"box-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}}>
            <div className="w-full">
                <div className="leading-5 text-sm mr-1">Two-line snackbar with<br />longer action</div>
            </div>
            <div>
                <button
                className="dark:text-gray-300 dark:hover:text-gray-800 py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                Longer action
                </button>
                </div>
            </div>
            <br></br>

            <div className={"w-[344px] bg-gray-100 dark:text-white dark:bg-gray-800 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center max-h-16.5 "+ snackbarsState.selectedFont} style={{"box-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}}>
            <div className="leading-5 text-sm mr-1">Single-line snackbar with close affordance
            </div>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#B3B4B5"/>
                </svg>
            </button>
            </div>
            <br></br>

            <div className={"w-[344px] bg-gray-100  dark:text-white dark:bg-gray-800 flex justify-between px-4 py-3.5 pr-0 rounded-lg items-center max-h-16.5 "+ snackbarsState.selectedFont} style={{"box-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}}>
            <div className="leading-5 text-sm mr-1">Single-line snackbar with action
            </div>
            <div className="flex">
            <button
                className="dark:hover:text-gray-800 py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900  hover:bg-gray-100 dark:text-gray-300  focus:bg-gray-100 active:bg-gray-200  ">
                Action
                </button>
            <button className="p-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#B3B4B5"/>
                </svg>
            </button>
            </div>
            </div>
            <br></br>

            <div className={"w-[344px] bg-gray-100 dark:text-white dark:bg-gray-800 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center max-h-16.5 "+ snackbarsState.selectedFont} style={{"box-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}}>
            <div className="leading-5 text-sm mr-1">Two-line snackbar
            <br />
            with action
            </div>
            <button
            className="dark:text-gray-300 py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 dark:hover:text-gray-800 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            Action
            </button>
            </div>
            <br></br>

            <div className={"w-[344px] bg-gray-100 dark:text-white dark:bg-gray-800 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center max-h-16.5 "+ snackbarsState.selectedFont} style={{"box-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}}>
            <div className="leading-5 text-sm mr-1">Two-line snackbar
                <br />
                with close affordance
            </div>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#B3B4B5"/>
                </svg>
            </button>
            </div>
            <br></br>

            <div className={"w-[344px] bg-gray-100  dark:text-white dark:bg-gray-800 flex justify-between px-4 py-3.5 pr-0 rounded-lg items-center max-h-16.5 "+ snackbarsState.selectedFont} style={{"box-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}}>
            <div className="leading-5 text-sm mr-1">Two-line snackbar with
                <br />
                action and close
            </div>
            <div className="flex">
            <button
                className="dark:hover:text-gray-800 dark:text-gray-300 py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                Action
                </button>
            <button className="p-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#B3B4B5"/>
                </svg>
            </button>
            </div>
            </div>
            <br></br>

            <div className={"w-[344px]   bg-gray-100 dark:text-white dark:bg-gray-800 flex flex-col justify-between px-4 py-3.5 pr-2 rounded-lg items-end max-h-16.5 "+ snackbarsState.selectedFont} style={{"box-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"}}>
            <div className="w-full">
                <div className="leading-5 text-sm mr-1">Two-line snackbar with
                <br />
                longer action
                </div>
            </div>
            <div className="flex">
                <button
                className="dark:text-gray-300 dark:hover:text-gray-800 py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                Longer action
                </button>
                <button className="p-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#B3B4B5"/>
                </svg>
            </button>
            </div>
            </div>

        </div>
    )

        let snackbarsCompString = '<div class="w-[344px] bg-gray-100 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center ' + snackbarsState.selectedFont + '" style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)">\n'+
        '                <div class="leading-5 text-sm mr-1">Single-line Snackbars</div>\n'+
        '            </div>\n'+
        '            <br></br>\n'+
        '\n'+
        '            <div class="w-[344px] bg-gray-100 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center '+ snackbarsState.selectedFont + '"  style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)">\n'+
        '                <div class="leading-5 text-sm mr-1">Single-line snackbar with action</div>\n'+
        '                <button class="py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">\n'+
        '                    Action\n'+
        '                </button>\n'+
        '            </div>\n'+
        '            <br></br>\n'+
        '\n'+
        '            <div class="w-[344px] bg-gray-100 flex px-4 py-3.5 rounded-lg items-center max-h-16.5 '+ snackbarsState.selectedFont+ '" style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)"> \n'+
        '            <div class="text-sm leading-5">Two-line snackbar<br />without action</div>\n'+
        '            </div>\n'+
        '            <br></br>\n'+
        '\n'+
        '            <div class="w-[344px] bg-gray-100 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center max-h-16.5 ' + snackbarsState.selectedFont+'" style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)">\n'+
        '            <div class="leading-5 text-sm mr-1">Two-line snackbar<br />with action</div>\n'+
        '            <button class="py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">\n'+
        '            Action\n'+
        '            </button>\n'+
        '            </div>\n'+
        '            <br></br>\n'+
        '\n'+
        '            <div class="w-[344px] bg-gray-100 flex flex-col justify-between px-4 py-3.5 pr-2 rounded-lg items-end max-h-16.5 '+ snackbarsState.selectedFont+ '" style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)">\n'+
        '            <div class="w-full">\n'+
        '                <div class="leading-5 text-sm mr-1">Two-line snackbar with<br />longer action</div>\n'+
        '            </div>\n'+
        '            <div>\n'+
        '                <button\n'+
        '                class="py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">\n'+
        '                Longer action\n'+
        '                </button>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <br></br>\n'+
        '\n'+
        '            <div class="w-[344px] bg-gray-100 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center max-h-16.5 '+ snackbarsState.selectedFont + '" style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)">\n'+
        '            <div class="leading-5 text-sm mr-1">Single-line snackbar with close affordance\n'+
        '            </div>\n'+
        '            <button>\n'+
        '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#B3B4B5"/>\n'+
        '                </svg>\n'+
        '            </button>\n'+
        '            </div>\n'+
        '            <br></br>\n'+
        '\n'+
        '            <div class="w-[344px] bg-gray-100 flex justify-between px-4 py-3.5 pr-0 rounded-lg items-center max-h-16.5 '+ snackbarsState.selectedFont + '" style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)">\n'+
        '            <div class="leading-5 text-sm mr-1">Single-line snackbar with action\n'+
        '            </div>\n'+
        '            <div class="flex">\n'+
        '            <button\n'+
        '                class="py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">\n'+
        '                Action\n'+
        '                </button>\n'+
        '            <button class="p-3">\n'+
        '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#B3B4B5"/>\n'+
        '                </svg>\n'+
        '            </button>\n'+
        '            </div>\n'+
        '            </div>\n'+
        '            <br></br>\n'+
        '\n'+
        '            <div class="w-[344px] bg-gray-100 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center max-h-16.5 '+ snackbarsState.selectedFont+ '" style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)">\n'+
        '            <div class="leading-5 text-sm mr-1">Two-line snackbar\n'+
        '            <br />\n'+
        '            with action\n'+
        '            </div>\n'+
        '            <button\n'+
        '            class="py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">\n'+
        '            Action\n'+
        '            </button>\n'+
        '            </div>\n'+
        '            <br></br>\n'+
        '\n'+
        '            <div class="w-[344px] bg-gray-100 flex justify-between px-4 py-3.5 pr-2 rounded-lg items-center max-h-16.5 '+ snackbarsState.selectedFont + '" style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)">\n'+
        '            <div class="leading-5 text-sm mr-1">Two-line snackbar\n'+
        '                <br />\n'+
        '                with close affordance\n'+
        '            </div>\n'+
        '            <button>\n'+
        '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#B3B4B5"/>\n'+
        '                </svg>\n'+
        '            </button>\n'+
        '            </div>\n'+
        '            <br></br>\n'+
        '\n'+
        '            <div class="w-[344px] bg-gray-100 flex justify-between px-4 py-3.5 pr-0 rounded-lg items-center max-h-16.5 '+ snackbarsState.selectedFont + '" style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)">\n'+
        '            <div class="leading-5 text-sm mr-1">Two-line snackbar with\n'+
        '                <br />\n'+
        '                action and close\n'+
        '            </div>\n'+
        '            <div class="flex">\n'+
        '            <button\n'+
        '                class="py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">\n'+
        '                Action\n'+
        '                </button>\n'+
        '            <button class="p-3">\n'+
        '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#B3B4B5"/>\n'+
        '                </svg>\n'+
        '            </button>\n'+
        '            </div>\n'+
        '            </div>\n'+
        '            <br></br>\n'+
        '\n'+
        '            <div class="w-[344px] bg-gray-100 flex flex-col justify-between px-4 py-3.5 pr-2 rounded-lg items-end max-h-16.5 ' + snackbarsState.selectedFont + '" style="box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)">\n'+
        '            <div class="w-full">\n'+
        '                <div class="leading-5 text-sm mr-1">Two-line snackbar with\n'+
        '                <br />\n'+
        '                longer action\n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <div class="flex">\n'+
        '                <button\n'+
        '                class="py-1.5 px-2.5 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200">\n'+
        '                Longer action\n'+
        '                </button>\n'+
        '                <button class="p-3">\n'+
        '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#B3B4B5"/>\n'+
        '                </svg>\n'+
        '            </button>\n'+
        '            </div>\n'+
        '            </div>';
                        
    return(
        <>
            <PreviewWindowDisabled 
            snackbarsComp ={snackbarsComp} 
            snackbarsCompString={snackbarsCompString}
            showColor={snackbarsState.showColor} 
            selectedColor={snackbarsState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>
        </>
    )
}