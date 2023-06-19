import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function EcommerceFive(){
    const [ecommerceFiveState, setEcommerceFiveState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setEcommerceFiveState({
            ...ecommerceFiveState,
            showColor:!ecommerceFiveState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setEcommerceFiveState({
            ...ecommerceFiveState,
            showColor:!ecommerceFiveState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setEcommerceFiveState({
            ...ecommerceFiveState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let ecommerceFiveComp = (
            
        <div className="px-5 py-6 dark:bg-gray-900 dark:border-none  dark:border-gray-900 bg-white border-2 rounded-xl" style={{"width":"650px", "height":"auto"}}>
        <div className="w-full pb-4 flex justify-start items-center">
            <div className="w-1/2 flex justify-start items-center">
                <h2 className={"p-0 m-0 dark:text-white " + ecommerceFiveState.selectedFont}>Bank account (ACH)</h2>
                <div className="ml-2">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.500732 15.251V19.001H4.25073L15.3107 7.94103L11.5607 4.19104L0.500732 15.251ZM18.2107 5.04104C18.6007 4.65104 18.6007 4.02104 18.2107 3.63104L15.8707 1.29104C15.4807 0.901035 14.8507 0.901035 14.4607 1.29104L12.6307 3.12104L16.3807 6.87104L18.2107 5.04104Z" fill="#88898B"/>
                    </svg>
                </div>
            </div>
            <div className="w-1/2 flex justify-end items-center">
                <h2 className={"p-0 m-0 font-bold text-sm " + ecommerceFiveState.selectedFont}>View all</h2>
            </div>
        </div>
        <div className="w-full p-4 flex justify-center items-start border-1 rounded-t bg-gray-100 dark:bg-gray-800">
            <div className="w-1/2 flex justify-start items-center">
                <div>
                    <h3 className={"p-0 m-0 " + ecommerceFiveState.selectedFont}>Account Holder Name</h3>
                    <h3>John Doe</h3>
                </div>
            </div>
            <div className="w-1/2 flex justify-end items-center">
                <h1 className="p-0 m-0 font-bold text-lg">$0.00</h1>
            </div>
        </div>
        <div className="w-full px-4 pb-4 flex justify-start items-start border-1 rounded-b bg-gray-100 dark:bg-gray-800">
            <div className="flex justify-start items-center">
                <div>
                    <h3 className={"p-0 m-0 " + ecommerceFiveState.selectedFont}>Routing No.</h3>
                    <h3>##########</h3>
                </div>
            </div>
            <div className="ml-8 flex justify-start items-center">
                <div>
                    <h3 className={"p-0 m-0 " + ecommerceFiveState.selectedFont}>Account No.</h3>
                    <h3>##########</h3>
                </div>
            </div>
            <div className="ml-8 flex justify-start items-center">
                <div>
                    <h3 className={"p-0 m-0 " + ecommerceFiveState.selectedFont}>Account Type</h3>
                    <h3>Checking</h3>
                </div>
            </div>
        </div>
        <div className="pt-5 flex justify-center items-center">
            <div className="dark:bg-gray-800 dark:text-white py-2 px-8 flex justify-around items-center bg-gray-100 rounded-full">
                <h1 className="p-0 m-0">
                <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="" />
          </svg>
                </h1>
                <h2 className={"p-0 mb-0 ml-2 font-bold " + ecommerceFiveState.selectedFont}>Add</h2>
            </div>
        </div>
    </div>
           
    )

        let ecommerceFiveCompString = ' <div class="px-5 py-6 bg-white border-2 rounded-xl" style="width:650px; height:auto">\n'+
        '        <div class="w-full pb-4 flex justify-start items-center">\n'+
        '            <div class="w-1/2 flex justify-start items-center">\n'+
        '                <h2 class="p-0 m-0 ' + ecommerceFiveState.selectedFont + '">Bank account (ACH)</h2>\n'+
        '                <div class="ml-2">\n'+
        '                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                        <path d="M0.500732 15.251V19.001H4.25073L15.3107 7.94103L11.5607 4.19104L0.500732 15.251ZM18.2107 5.04104C18.6007 4.65104 18.6007 4.02104 18.2107 3.63104L15.8707 1.29104C15.4807 0.901035 14.8507 0.901035 14.4607 1.29104L12.6307 3.12104L16.3807 6.87104L18.2107 5.04104Z" fill="#88898B"/>\n'+
        '                    </svg>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <div class="w-1/2 flex justify-end items-center">\n'+
        '                <h2 class="p-0 m-0 font-bold text-sm ' + ecommerceFiveState.selectedFont + '">View all</h2>\n'+
        '            </div>\n'+
        '        </div>\n'+
        '        <div class="w-full p-4 flex justify-center items-start border-1 rounded bg-gray-100">\n'+
        '            <div class="w-1/2 flex justify-start items-center">\n'+
        '                <div>\n'+
        '                    <h3 class="p-0 m-0 ' + ecommerceFiveState.selectedFont + '">Account Holder Name</h3>\n'+
        '                    <h3>John Doe</h3>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <div class="w-1/2 flex justify-end items-center">\n'+
        '                <h1 class="p-0 m-0 font-bold text-lg">$0.00</h1>\n'+
        '            </div>\n'+
        '        </div>\n'+
        '        <div class="w-full px-4 pb-4 flex justify-start items-start border-1 rounded bg-gray-100">\n'+
        '            <div class="flex justify-start items-center">\n'+
        '                <div>\n'+
        '                    <h3 class="p-0 m-0 ' + ecommerceFiveState.selectedFont + '">Routing No.</h3>\n'+
        '                    <h3>##########</h3>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <div class="ml-10% flex justify-start items-center">\n'+
        '                <div>\n'+
        '                    <h3 class="p-0 m-0 ' + ecommerceFiveState.selectedFont + '">Account No.</h3>\n'+
        '                    <h3>##########</h3>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <div class="ml-10% flex justify-start items-center">\n'+
        '                <div>\n'+
        '                    <h3 class="p-0 m-0 ' + ecommerceFiveState.selectedFont + '">Account Type</h3>\n'+
        '                    <h3>Checking</h3>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '        </div>\n'+
        '        <div class="pt-5 flex justify-center items-center">\n'+
        '            <div class="py-2 px-8 flex justify-around items-center bg-gray-100 rounded-full">\n'+
        '                <h1 class="p-0 m-0">\n'+
        '                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                        <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#323232"/>\n'+
        '                    </svg>\n'+
        '                </h1>\n'+
        '                <h2 class="p-0 mb-0 ml-2 font-bold ' + ecommerceFiveState.selectedFont + '">Add</h2>\n'+
        '            </div>\n'+
        '        </div>\n'+
        '    </div>';
                        
                        
            
    return(
        <>
            <PreviewWindowDisabled 
            ecommerceFiveComp={ecommerceFiveComp} 
            ecommerceFiveCompString={ecommerceFiveCompString}
            showColor={ecommerceFiveState.showColor} 
            selectedColor={ecommerceFiveState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}