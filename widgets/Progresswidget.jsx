import React, { Component, useState } from 'react' 
import PreviewWindowTwo from '../PreviewWindowTwo'

export default function Progresswidget(){
    const [progresswidgetState, setProgresswidgetState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setProgresswidgetState({
            ...progresswidgetState,
            showColor:!progresswidgetState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setProgresswidgetState({
            ...progresswidgetState,
            showColor:!progresswidgetState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setProgresswidgetState({
            ...progresswidgetState,
            selectedFont: e.target.value,
        })
    }


    let progresswidgetComp = (
        
        <div className="inline-block">
            <div className={"space-y-9 dark:bg-gray-900 rounded-lg bg-gray-100 dark:text-white p-5 text-black " + progresswidgetState.selectedFont}>
                <div>
                <div className="flex flex-col">
                    <h1 className="dark:text-white">Progress Title</h1>          
                    <div>In progress</div>
                    <div className="mt-3 w-full rounded-full  bg-gray-200 dark:bg-gray-800 p-0.5">
                    <div className="h-7 rounded-full dark:bg-gray-200 bg-gray-800 w-1/2"></div>
                    </div>
                </div>
                </div>
                <div className="text-center">
                <div className="font-bold">Estimated processing</div>
                <div className="">4-5 business days</div>
                </div>
                <div>
                <button className={"flex w-full items-center justify-center dark:bg-gray-200 rounded-lg px-6 py-2 text-sm font-medium text-white dark:text-gray-900 " + progresswidgetState.selectedColor}>View status</button>
                </div>
            </div>
        </div>
    )

        let progresswidgetCompString = 
        '<div class="inline-block">\n'+
'            <div class="space-y-9 rounded-lg bg-gray-100 p-5 text-black ' + progresswidgetState.selectedFont + '">\n'+
'                <div>\n'+
'                <div class="flex flex-col space-y-3">\n'+
'                    <div>In progress</div>\n'+
'                    <div class="w-full rounded-full bg-gray-200 p-0.5">\n'+
'                    <div class="h-7 rounded-full bg-gray-800 w-1/2"></div>\n'+
'                    </div>\n'+
'                </div>\n'+
'                </div>\n'+
'                <div class="text-center space-y-1">\n'+
'                <div class="font-bold">Estimated processing</div>\n'+
'                <div class="text-gray-900">4-5 business days</div>\n'+
'                </div>\n'+
'                <div>\n'+
'                <button class="flex w-full items-center justify-center rounded-lg px-6 py-2 text-sm font-medium text-white ' + progresswidgetState.selectedColor + '">View status</button>\n'+
'                </div>\n'+
'            </div>\n'+
'        </div>';
                        
                        
    return(
        <>
            <PreviewWindowTwo 
            progresswidgetComp ={progresswidgetComp} 
            progresswidgetCompString={progresswidgetCompString}
            showColor={progresswidgetState.showColor} 
            selectedColor={progresswidgetState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}