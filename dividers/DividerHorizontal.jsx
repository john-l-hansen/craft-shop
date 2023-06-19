import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function DividerHorizontal(){
    const [dividerHorizontalState, setDividerHorizontalState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setDividerHorizontalState({
            ...dividerHorizontalState,
            showColor:!dividerHorizontalState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setDividerHorizontalState({
            ...dividerHorizontalState,
            showColor:!dividerHorizontalState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setDividerHorizontalState({
            ...dividerHorizontalState,
            selectedFont: e.target.value,
        })
    }


    let dividerHorizontalComp = (
      <div>
       <hr className="w-96 border border-gray-200 dark:border-gray-700"/>
      </div>  
    )

        let dividerHorizontalCompString = '<hr class="w-96 border border-gray-200"/>';
                        
                        
    return(
        <>
            <PreviewWindowDisabled 
            dividerHorizontalComp={dividerHorizontalComp} 
            dividerHorizontalCompString={dividerHorizontalCompString}
            showColor={dividerHorizontalState.showColor} 
            selectedColor={dividerHorizontalState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>
        </>
    )
}