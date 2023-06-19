import React, { Component, useState } from 'react' 
import PreviewWindow from '../PreviewWindow'

export default function Badge(){
    const [badgeState, setBadgeState] = useState({
        showColor: false,
        selectedColor:"bg-gray-700",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setBadgeState({
            ...badgeState,
            showColor:!badgeState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setBadgeState({
            ...badgeState,
            showColor:!badgeState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setBadgeState({
            ...badgeState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let badgeComp = (
            
      <div className="flex flex-col justify-center items-center">
        <div className={"w-3 h-3 rounded-full dark:bg-gray-900 " + badgeState.selectedColor} style={{"marginBottom":"20px"}}>
        </div>
        <div className={"w-6 h-6 flex justify-center items-center text-white rounded-full dark:bg-gray-900 " + badgeState.selectedColor + " " + badgeState.selectedFont} style={{"marginBottom":"20px"}}>
            3
        </div>
        <div className={"w-10 h-6 flex justify-center items-center text-white rounded-full dark:bg-gray-900 " + badgeState.selectedColor + " " + badgeState.selectedFont}>
            32
        </div>
      </div>
           
    )

        let badgeCompString = '<div class="w-3 h-3 rounded-full ' + badgeState.selectedColor + '">\n'+
        '        </div>';
        
        let badgeCompStringTwo = '<div class="w-6 h-6 flex justify-center items-center text-white rounded-full ' + badgeState.selectedColor +" "+ badgeState.selectedFont + '">\n'+
        '        3</div>';

        let badgeCompStringThree = '<div class="w-10 h-6 flex justify-center items-center text-white rounded-full ' + badgeState.selectedColor +" "+ badgeState.selectedFont + '">\n'+
        '        32</div>';
                        
            
    return(
        <>
            <PreviewWindow 
            badgeComp={badgeComp} 
            badgeCompString={badgeCompString}
            badgeCompStringTwo={badgeCompStringTwo}
            badgeCompStringThree={badgeCompStringThree}
            showColor={badgeState.showColor} 
            selectedColor={badgeState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}