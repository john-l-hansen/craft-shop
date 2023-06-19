import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function Boxes(){
    const [boxesState, setBoxesState] = useState({
        showColor: false,
        selectedColor:"bg-blue-100",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setBoxesState({
            ...boxesState,
            showColor:!boxesState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        //console.log(e.target.classList.value)
        setBoxesState({
            ...boxesState,
            showColor:!boxesState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setBoxesState({
            ...boxesState,
            selectedFont: e.target.value,
        })
    }


    let boxesStateComp = (
            
        <div className={"rounded-xl dark:bg-blue-800 " + boxesState.selectedColor} style={{"width":"480px", "height":"auto"}}>
            <div className="dark:bg-blue-800 rounded-t-xl px-7 pt-7 pb-2 flex justify-start items-center dark:text-gray-50">
                <div>
                    <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill=""/>
                    </svg>
                </div>
                <div className="leading-normal ml-4 rounded-t-xl ">
                    <h1 className={"p-0 m-0 font-bold text-base " + boxesState.selectedFont}>Info Title</h1>
                </div>
            </div>
            <div className="pl-16 pb-7 dark:text-gray-50">
                <div className="flex justify-start items-center">
                    <p className={"p-0 m-0 text-sm " + boxesState.selectedFont}>Each column of your CSV file must match the correct headings. Download the template here: template name </p>
                </div>
            </div>
        </div>
           
    )

        let boxesStateCompString = '<div class="rounded-xl ' + boxesState.selectedColor + '" style="width:480px; height:auto">\n'+
        '            <div class="px-7 pt-7 pb-2 flex justify-start items-center">\n'+
        '                <div>\n'+
        '                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                        <path d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="black"/>\n'+
        '                    </svg>\n'+
        '                </div>\n'+
        '                <div class="leading-normal ml-4">\n'+
        '                    <h1 class="p-0 m-0 font-bold text-base ' + boxesState.selectedFont + '">Info Title</h1>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <div class="pl-16 pb-7">\n'+
        '                <div class="flex justify-start items-center">\n'+
        '                    <p class="p-0 m-0 text-sm ' + boxesState.selectedFont + '">Each column of your CSV file must match the correct headings. Download the template here: template name </p>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '        </div>';
    
                        
    return(
        <>
            <PreviewWindow 
            boxesStateComp={boxesStateComp} 
            boxesStateCompString={boxesStateCompString}
            showColor={boxesState.showColor} 
            selectedColor={boxesState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>
        </>
    )
}