import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function DefaultCheckbox(){
    const [defaultCheckboxState, setDefaultCheckboxState] = useState({
        showColor: false,
        selectedColor:"text-gray-600",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setDefaultCheckboxState({
            ...defaultCheckboxState,
            showColor:!defaultCheckboxState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setDefaultCheckboxState({
            ...defaultCheckboxState,
            showColor:!defaultCheckboxState.showColor,
            selectedColor: e.target.classList[4],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setDefaultCheckboxState({
            ...defaultCheckboxState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let defaultCheckboxComp = (
      <div>
        <div style={{"marginBottom":"20px"}}>
            <input type="checkbox" className={"dark:text-gray-800 bg-transparent h-4 w-4 rounded " + defaultCheckboxState.selectedColor + " focus:ring-0"}></input>
            <input type="checkbox" className={"dark:text-gray-800 bg-transparent h-4 w-4 rounded " + defaultCheckboxState.selectedColor + " focus:ring-0 ml-4"} checked></input>
        </div>
      </div>
           
    )

        let defaultCheckboxCompString = '<input type="checkbox" class="h-4 w-4 rounded focus:ring-0 ' + defaultCheckboxState.selectedColor + '"></input>';
                        
                        
            
    return(
        <>
            <PreviewWindow 
            defaultCheckboxComp={defaultCheckboxComp} 
            defaultCheckboxCompString={defaultCheckboxCompString}
            showColor={defaultCheckboxState.showColor} 
            selectedColor={defaultCheckboxState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}