import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Megamenu(){
    const [megamenuState, setMegamenuState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setMegamenuState({
            ...megamenuState,
            showColor:!megamenuState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setMegamenuState({
            ...megamenuState,
            showColor:!megamenuState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setMegamenuState({
            ...megamenuState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let megamenuComp = (
            
                <div className="dark:bg-gray-800 border border-gray-100 bg-white text-black dark:text-white dark:border-none" style={{"width":"760px", "height":"auto", "boxShadow": "0px 8px 20px 6px rgba(0, 0, 0, 0.35)"}}>
                    <div className="px-5 py-8 flex justify-center items-center">
                        <div className="px-5">
                            <h3 className={"p-0 m-0 font-bold text-xl leading-7 " + megamenuState.selectedFont}>Section</h3>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                        </div>
                        <div className="px-5">
                            <h3 className={"dark:text-white p-0 m-0 font-bold text-xl leading-7 " + megamenuState.selectedFont}>Section</h3>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                        </div>
                        <div className="px-5">
                            <h3 className={"dark:text-white p-0 m-0 font-bold text-xl leading-7 " + megamenuState.selectedFont}>Section</h3>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                        </div>
                        <div className="px-5">
                            <h3 className={"dark:text-white p-0 m-0 font-bold text-xl leading-7 " + megamenuState.selectedFont}>Section</h3>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                        </div>
                        <div className="px-5">
                            <h3 className={"dark:text-white p-0 m-0 font-bold text-xl leading-7 " + megamenuState.selectedFont}>Section</h3>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                            <div><h4 className={"dark:text-gray-200 p-0 m-0 font-normal text-sm leading-5 text-black " + megamenuState.selectedFont}>Item</h4></div>
                        </div>
                    </div> 
                </div>
           
    )

        let megamenuCompString = '<div class="border border-gray-100 bg-white" style="width:760px; height:auto; box-shadow: 0px 8px 20px 6px rgba(0, 0, 0, 0.35)">\n'+
        '                    <div class="px-5 py-8 flex justify-center items-center">\n'+
        '                        <div class="px-5">\n'+
        '                            <h3 class="p-0 m-0 font-bold text-xl leading-7 ' + megamenuState.selectedFont + '">Section</h3>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                        </div>\n'+
        '                        <div class="px-5">\n'+
        '                            <h3 class="p-0 m-0 font-bold text-xl leading-7 ' + megamenuState.selectedFont + '">Section</h3>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                        </div>\n'+
        '                        <div class="px-5">\n'+
        '                            <h3 class="p-0 m-0 font-bold text-xl leading-7 ' + megamenuState.selectedFont + '">Section</h3>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                        </div>\n'+
        '                        <div class="px-5">\n'+
        '                            <h3 class="p-0 m-0 font-bold text-xl leading-7 ' + megamenuState.selectedFont + '">Section</h3>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                        </div>\n'+
        '                        <div class="px-5">\n'+
        '                            <h3 class="p-0 m-0 font-bold text-xl leading-7 ' + megamenuState.selectedFont + '">Section</h3>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + megamenuState.selectedFont + '">Item</h4></div>\n'+
        '                        </div>\n'+
        '                    </div> \n'+
        '                </div>\n'+
        '           ';
                        
                        
            
    return(
        <>
            <PreviewWindowDisabled 
            megamenuComp={megamenuComp} 
            megamenuCompString={megamenuCompString}
            showColor={megamenuState.showColor} 
            selectedColor={megamenuState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}