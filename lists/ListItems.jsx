import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function ListItems(){
    const [listItemsState, setListItemsState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setListItemsState({
            ...listItemsState,
            showColor:!listItemsState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setListItemsState({
            ...listItemsState,
            showColor:!listItemsState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setListItemsState({
            ...listItemsState,
            selectedFont: e.target.value,
        })
    }


    let listItemsComp = (
            
        <div className="border dark:border-gray-900 border-gray-100 dark:bg-gray-900 rounded-xl bg-white" style={{"width":"348px", "height":"auto"}}>
            <div className="px-5 py-3 w-full flex justify-start items-center">
                <div className="w-4/5 flex justify-start items-center">
                    <div>
                        <p className="dark:bg-gray-700 dark:text-gray-50 w-8 h-8 p-0 m-0 text-base font-medium text-center text-gray-800 bg-gray-200 rounded-full">A</p>
                    </div>
                    <div className="ml-5 leading-normal">
                        <h1 className={"p-0 m-0 font-bold text-base leading-6 " + listItemsState.selectedFont}>List items</h1>
                        <p className={"p-0 m-0 font-normal text-sm leading-5 " + listItemsState.selectedFont}>Supporting line text lorem</p>
                    </div>
                </div>
                <div className="w-1/5 flex justify-end items-center">
                    <div><input className="h-4 w-4 border-2 rounded focus:ring-0 text-gray-800 dark:text-gray-800 bg-transparent" type="checkbox"></input></div>
                </div>   
            </div>
        </div>
           
    )

        let listItemsCompString = '<div class="border border-gray-100 rounded-xl bg-white" style="width:348px; height:auto">\n'+
        '            <div class="px-5 py-3 w-full flex justify-start items-center">\n'+
        '                <div class="w-4/5 flex justify-start items-center">\n'+
        '                    <div>\n'+
        '                        <p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-gray-800 bg-gray-200 rounded-full">A</p>\n'+
        '                    </div>\n'+
        '                    <div class="ml-5 leading-normal">\n'+
        '                        <h1 class="p-0 m-0 font-bold text-base leading-6 ' + listItemsState.selectedFont + '">List items</h1>\n'+
        '                        <p class="p-0 m-0 font-normal text-sm leading-5 ' + listItemsState.selectedFont + '">Supporting line text lorem</p>\n'+
        '                    </div>\n'+
        '                </div>\n'+
        '                <div class="w-1/5 flex justify-end items-center">\n'+
        '                    <div><input class="h-4 w-4 rounded checked:text-gray-800 focus:ring-0" type="checkbox"></input></div>\n'+
        '                </div>   \n'+
        '            </div>\n'+
        '        </div>';
                        
                        
    return(
        <>
            <PreviewWindowDisabled 
            listItemsComp={listItemsComp} 
            listItemsCompString={listItemsCompString}
            showColor={listItemsState.showColor} 
            selectedColor={listItemsState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}