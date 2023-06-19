import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function DividerVertical(){
    const [dividerVerticalState, setDividerVerticalState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setDividerVerticalState({
            ...dividerVerticalState,
            showColor:!dividerVerticalState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setDividerVerticalState({
            ...dividerVerticalState,
            showColor:!dividerVerticalState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setDividerVerticalState({
            ...dividerVerticalState,
            selectedFont: e.target.value,
        })
    }


    let dividerVerticalComp = (
        <div>
        <hr class="w-96 border border-gray-200 dark:border-gray-700"/>
       </div> 
           
    )

        let dividerVerticalCompString = '<div class="flex justify-start items-center border rounded-xl" style={{"width":"356px", "height":"80px"}}><div class="ml-4"><p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-[#1c1e33] rounded-full ' + dividerVerticalState.selectedColor +'">A</p></div><div class="ml-4 leading-normal"><h4 class="p-0 m-0 font-bold ' + dividerVerticalState.selectedFont + '">Header</h4><p class="p-0 m-0 ' + dividerVerticalState.selectedFont + '">Subheader</p></div><div class="ml-36"><img src="vvv.png" class="w-20 h-20 m-0 p-0 object-cover border rounded-r-xl" /></div></div>'
                        
                        
    return(
        <>
            <PreviewWindow 
            dividerVerticalComp={dividerVerticalComp} 
            dividerVerticalCompString={dividerVerticalCompString}
            showColor={dividerVerticalState.showColor} 
            selectedColor={dividerVerticalState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}