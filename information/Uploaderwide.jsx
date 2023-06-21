import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Uploaderwide(){
    const [uploaderwideState, setUploaderwideState] = useState({
        showColor: false,
        selectedColor:"bg-blue-100",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setUploaderwideState({
            ...uploaderwideState,
            showColor:!uploaderwideState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        //console.log(e.target.classList.value)
        setUploaderwideState({
            ...uploaderwideState,
            showColor:!uploaderwideState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setUploaderwideState({
            ...uploaderwideState,
            selectedFont: e.target.value,
        })
    }


    let uploaderwideComp = (
            <div>
                <div className="flex w-[325px] items-center justify-center">
                    <label for="dropzone-file" className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 transition hover:border-solid dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 h-[148px] py-8">
                        <div className="flex flex-col items-center justify-center">
                            <svg class="fill-current" aria-hidden width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5 15V18H6.5V15H4.5V18C4.5 19.1 5.4 20 6.5 20H18.5C19.6 20 20.5 19.1 20.5 18V15H18.5ZM7.5 9L8.91 10.41L11.5 7.83V16H13.5V7.83L16.09 10.41L17.5 9L12.5 4L7.5 9Z" fill="" />
                            </svg>
                            <div className={"my-3 text-sm text-black dark:text-gray-50 " + uploaderwideState.selectedFont}>Drag and drop or click to upload</div>
                            <div className={"text-xs text-gray-700 dark:text-gray-400 " + uploaderwideState.selectedFont}>CSV or TXT</div>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>

                <br></br>

                <div className="flex w-[325px] items-center justify-center">
                    <label for="dropzone-file" className="bg-gray-100 flex border-2 border-dashed border-gray-200 dark:border-gray-800 w-full cursor-not-allowed flex-col items-center dark:bg-gray-900 justify-center h-[148px] rounded-lg py-8">
                        <div className="flex flex-col items-center justify-center">
                        <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 11V14H2.5V11H0.5V14C0.5 15.1 1.4 16 2.5 16H14.5C15.6 16 16.5 15.1 16.5 14V11H14.5ZM3.5 5L4.91 6.41L7.5 3.83V12H9.5V3.83L12.09 6.41L13.5 5L8.5 0L3.5 5Z" fill="#B3B4B5"/>
                        </svg>
                        <div className={"my-3 text-gray-400 dark:text-gray-600 text-sm " + uploaderwideState.selectedFont}>Drag and drop or click to upload</div>
                        <div className={"text-xs text-gray-300 dark:text-gray-700 " + uploaderwideState.selectedFont}>CSV or TXT</div>
                        </div>
                        <input id="dropzone-file" type="" class="hidden" disabled />
                    </label>
                </div>
                <br></br>

                <div className="flex w-[325px] items-center justify-center">
                    <label for="dropzone-file" className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed hover:border-solid border-red-200 hover:bg-red-50 transition h-[148px] py-8">
                        <div className="flex flex-col items-center justify-center">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.667 15V18H6.22251V15H4.14844V18C4.14844 19.1 5.08177 20 6.22251 20H18.667C19.8077 20 20.741 19.1 20.741 18V15H18.667ZM7.25955 9L8.72177 10.41L11.4077 7.83V16H13.4818V7.83L16.1677 10.41L17.6299 9L12.4447 4L7.25955 9Z" fill="#E52628"/>
                        </svg>

                        <div className={"my-3 text-sm text-red-500 " + uploaderwideState.selectedFont}>Drag and drop or click to upload</div>
                        <div className={"text-xs text-gray-700 " + uploaderwideState.selectedFont}>CSV or TXT</div>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>

                <br></br>

                <div className="flex w-[325px]">
                    <div className="bg-gray-50 flex w-full cursor-pointer flex-col justify-between rounded-lg transition p-4">
                        <div className="flex justify-between">
                            <div className="flex">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="36" rx="8" fill="#ECECEC"/>
                                <path d="M15.17 12L17.17 14H26V24H10V12H15.17ZM16 10H10C8.9 10 8.01 10.9 8.01 12L8 24C8 25.1 8.9 26 10 26H26C27.1 26 28 25.1 28 24V14C28 12.9 27.1 12 26 12H18L16 10Z" fill="#989A9C"/>
                            </svg>
                            <div className="ml-3">
                                <div className={"text-sm text-black " + uploaderwideState.selectedFont}>File_name.type</div>
                                <div className={"text-xs text-gray-300 " + uploaderwideState.selectedFont}>#KB - 23 seconds left</div>
                            </div>
                            </div>
                            <div className="flex flex-col">
                            <svg class="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z" fill="black"/>
                            </svg>
                            <div className={"text-xs text-gray-300 " + uploaderwideState.selectedFont}>25%</div>
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full mt-3">
                            <div className="w-3/12 bg-blue-600 h-1 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

    
           
    )

        let uploaderwideCompString = '<div class="flex w-[325px] items-center justify-center">\n'+
        '                <label for="dropzone-file" class="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 transition hover:border-solid hover:bg-gray-50 h-[148px] py-8">\n'+
        '                    <div class="flex flex-col items-center justify-center">\n'+
        '                        <svg aria-hidden width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                            <path d="M18.5 15V18H6.5V15H4.5V18C4.5 19.1 5.4 20 6.5 20H18.5C19.6 20 20.5 19.1 20.5 18V15H18.5ZM7.5 9L8.91 10.41L11.5 7.83V16H13.5V7.83L16.09 10.41L17.5 9L12.5 4L7.5 9Z" fill="black" />\n'+
        '                        </svg>\n'+
        '                        <div class="my-3 text-sm text-black ' + uploaderwideState.selectedFont + '">Drag and drop or click to upload</div>\n'+
        '                        <div class="text-xs text-gray-700 ' + uploaderwideState.selectedFont + '">CSV or TXT</div>\n'+
        '                    </div>\n'+
        '                    <input id="dropzone-file" type="file" class="hidden" />\n'+
        '                </label>\n'+
        '            </div>;\n'+
        '<div class="flex w-[325px] items-center justify-center">\n'+
'                    <label for="dropzone-file" class="bg-gray-100 flex border-2 border-dashed border-gray-200 w-full cursor-not-allowed flex-col items-center justify-center h-[148px] rounded-lg py-8">\n'+
'                        <div class="flex flex-col items-center justify-center">\n'+
'                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
'                            <path d="M14.5 11V14H2.5V11H0.5V14C0.5 15.1 1.4 16 2.5 16H14.5C15.6 16 16.5 15.1 16.5 14V11H14.5ZM3.5 5L4.91 6.41L7.5 3.83V12H9.5V3.83L12.09 6.41L13.5 5L8.5 0L3.5 5Z" fill="#B3B4B5"/>\n'+
'                        </svg>\n'+
'                        <div class="my-3 text-gray-400 text-sm ' + uploaderwideState.selectedFont + '">Drag and drop or click to upload</div>\n'+
'                        <div class="text-xs text-gray-300 ' + uploaderwideState.selectedFont + '">CSV or TXT</div>\n'+
'                        </div>\n'+
'                        <input id="dropzone-file" type="" class="hidden" />\n'+
'                    </label>\n'+
'                </div>\n'+
'               \n'+
'                <div class="flex w-[325px] items-center justify-center">\n'+
'                    <label for="dropzone-file" class="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed hover:border-solid border-red-200 hover:bg-red-50 transition h-[148px] py-8">\n'+
'                        <div class="flex flex-col items-center justify-center">\n'+
'                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
'                        <path d="M18.667 15V18H6.22251V15H4.14844V18C4.14844 19.1 5.08177 20 6.22251 20H18.667C19.8077 20 20.741 19.1 20.741 18V15H18.667ZM7.25955 9L8.72177 10.41L11.4077 7.83V16H13.4818V7.83L16.1677 10.41L17.6299 9L12.4447 4L7.25955 9Z" fill="#E52628"/>\n'+
'                        </svg>\n'+
'                        <div class="my-3 text-sm text-red-500 ' + uploaderwideState.selectedFont + '">Drag and drop or click to upload</div>\n'+
'                        <div class="text-xs text-gray-700 ' + uploaderwideState.selectedFont + '">CSV or TXT</div>\n'+
'                        </div>\n'+
'                        <input id="dropzone-file" type="file" class="hidden" />\n'+
'                    </label>\n'+
'                </div>\n'+
'                \n'+
'                <div class="flex w-[325px]">\n'+
'                    <div class="bg-gray-50 flex w-full cursor-pointer flex-col justify-between rounded-lg transition p-4">\n'+
'                        <div class="flex justify-between">\n'+
'                            <div class="flex">\n'+
'                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
'                                <rect width="36" height="36" rx="8" fill="#ECECEC"/>\n'+
'                                <path d="M15.17 12L17.17 14H26V24H10V12H15.17ZM16 10H10C8.9 10 8.01 10.9 8.01 12L8 24C8 25.1 8.9 26 10 26H26C27.1 26 28 25.1 28 24V14C28 12.9 27.1 12 26 12H18L16 10Z" fill="#989A9C"/>\n'+
'                            </svg>\n'+
'                            <div class="ml-3">\n'+
'                                <div class="text-sm text-black ' + uploaderwideState.selectedFont + '">File_name.type</div>\n'+
'                                <div class="text-xs text-gray-300 ' + uploaderwideState.selectedFont + '">#KB - 23 seconds left</div>\n'+
'                            </div>\n'+
'                            </div>\n'+
'                            <div class="flex flex-col">\n'+
'                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
'                                <path d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z" fill="black"/>\n'+
'                            </svg>\n'+
'                            <div class="text-xs text-gray-300 ' + uploaderwideState.selectedFont + '">25%</div>\n'+
'                            </div>\n'+
'                        </div>\n'+
'                        <div class="w-full bg-gray-200 rounded-full mt-3">\n'+
'                            <div class="w-3/12 bg-blue-600 h-1 rounded-full"></div>\n'+
'                        </div>\n'+
'                    </div>\n'+
'                </div>';
    
                        
    return(
        <>
            <PreviewWindowDisabled 
            uploaderwideComp={uploaderwideComp} 
            uploaderwideCompString={uploaderwideCompString}
            showColor={uploaderwideState.showColor} 
            selectedColor={uploaderwideState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>
        </>
    )
}
