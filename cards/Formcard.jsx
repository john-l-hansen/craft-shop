import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Formcard(){
    const [formcardState, setFormcardState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setFormcardState({
            ...formcardState,
            showColor:!formcardState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setFormcardState({
            ...formcardState,
            showColor:!formcardState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setFormcardState({
            ...formcardState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let formcardComp = (
            
        <div className="rounded-lg bg-gray-50" style={{"width":"696px", "height":"auto"}}>
            <div className="px-5 py-4 flex justify-start items-center rounded-t-lg">
                    <h2 className={"p-0 m-0 font-bold text-xl leading-7 " + formcardState.selectedFont}>Form card title</h2>
            </div>
            <div className="w-full px-5 pb-4 flex justify-center items-center rounded-lg">
                <div className="w-1/4">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
            </div>
            <div className="w-full px-5 pb-4 flex justify-center items-center rounded-lg">
                <div className="w-1/4">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
            </div>
            <div className="w-full px-5 pb-4 flex justify-center items-center rounded-lg">
                <div className="w-1/4">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
                <div className="w-1/4 ml-3">
                    <label className={"font-bold " + formcardState.selectedFont}><h4>Label</h4></label>
                    <input className="h-7 border border-gray-200 rounded w-11/12" value="Input"></input>
                </div>
            </div>
        </div>
           
    )

        let formcardCompString = '<div class="rounded-lg bg-gray-50" style="width:696px; height:auto">\n'+
        '            <div class="px-5 py-4 flex justify-start items-center rounded-t-lg">\n'+
        '                    <h2 class="p-0 m-0 font-bold text-xl leading-7 ' + formcardState.selectedFont + '">Form card title</h2>\n'+
        '            </div>\n'+
        '            <div class="w-full px-5 pb-4 flex justify-center items-center rounded-lg">\n'+
        '                <div class="w-1/4">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '                <div class="w-1/4 ml-3">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '                <div class="w-1/4 ml-3">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '                <div class="w-1/4 ml-3">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <div class="w-full px-5 pb-4 flex justify-center items-center rounded-lg">\n'+
        '                <div class="w-1/4">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '                <div class="w-1/4 ml-3">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '                <div class="w-1/4 ml-3">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '                <div class="w-1/4 ml-3">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <div class="w-full px-5 pb-4 flex justify-center items-center rounded-lg">\n'+
        '                <div class="w-1/4">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '                <div class="w-1/4 ml-3">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '                <div class="w-1/4 ml-3">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '                <div class="w-1/4 ml-3">\n'+
        '                    <label class="font-bold ' + formcardState.selectedFont + '"><h4>Label</h4></label>\n'+
        '                    <input class="h-6 border border-gray-200 rounded w-11/12" value="Input"></input>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '        </div>';
                        
                        
            
    return(
        <>
            <PreviewWindowDisabled 
            formcardComp={formcardComp} 
            formcardCompString={formcardCompString}
            showColor={formcardState.showColor} 
            selectedColor={formcardState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}