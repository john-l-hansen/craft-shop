import React, { Component, useState } from 'react'
import PreviewWindowThree from '../PreviewWindowThree'

export default function OutlinedButton() {
  const [outlinedButtonState, setOutlinedButtonState] = useState({
    showColor: false,
    selectedColor:
      'bg-white hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setOutlinedButtonState({
      ...outlinedButtonState,
      showColor: !outlinedButtonState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setOutlinedButtonState({
      ...outlinedButtonState,
      showColor: !outlinedButtonState.showColor,
      selectedColor: e.target.classList.value,
      //selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setOutlinedButtonState({
      ...outlinedButtonState,
      selectedFont: e.target.value,
    })
  }

  let outlinedButtonComp = (
    <div>
      {/*Standard*/}
      <div className="flex items-center justify-center">
        <button
          className={
            'flex items-center justify-center rounded-lg border border-solid border-gray-800 bg-transparent py-2 px-6 text-sm font-medium  leading-5 text-gray-800 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-900 dark:active:bg-gray-300 dark:active:text-gray-900 ' +
            outlinedButtonState.selectedColor +
            ' ' +
            outlinedButtonState.selectedFont
          }
        >
          Enabled
        </button>
        {/*<button className="py-2 px-6 border border-solid border-gray-800 rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    Hovered
                </button> 
                <button className="py-2 px-6 border border-solid border-gray-800 rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    Focused
                </button> 
                <button className="py-2 px-6 border border-solid border-gray-800 rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    Active
                </button>*/}
        <button
          className="disabled:white ml-3 rounded-lg border border-solid border-gray-300 py-2 px-6 text-sm font-medium leading-5 text-gray-300 dark:border-gray-900 dark:text-gray-700"
          disabled
        >
          Disabled
        </button>
      </div>

      {/*Plus Left*/}
      <div className="mt-5 flex items-center justify-center">
        <button
          className={
            'flex items-center justify-center rounded-lg border border-solid border-gray-800 bg-transparent py-2 px-6 text-sm font-medium leading-5 text-gray-800 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-900 dark:active:bg-gray-300 dark:active:text-gray-900 ' +
            outlinedButtonState.selectedColor +
            ' ' +
            outlinedButtonState.selectedFont
          }
        >
          <div>
          <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
          </div>
          <div className="ml-3">Enabled</div>
        </button>
        {/*<button className="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Hovered</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Focused</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Actice</div>
                </button>*/}
        <button
          className="disabled:white ml-3 flex items-center justify-center rounded-lg border border-solid border-gray-300 py-2 px-6 text-sm font-medium leading-5 text-gray-300 dark:border-gray-900 dark:text-gray-700 "
          disabled
        >
          <div>
          <svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
          </div>
          <div className="ml-3">Disabled</div>
        </button>
      </div>

      {/*Plus Right*/}
      <div className="mt-5 flex items-center justify-center">
        <button
          className={
            'flex items-center justify-center rounded-lg border border-solid border-gray-800 bg-transparent py-2 px-6 text-sm font-medium leading-5 text-gray-800 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-900 dark:active:bg-gray-300 dark:active:text-gray-900 ' +
            outlinedButtonState.selectedColor +
            ' ' +
            outlinedButtonState.selectedFont
          }
        >
          <div className="mr-3">Enabled</div>
          <div>
          <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
          </div>
        </button>
        {/*<button className="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    <div className="mr-3">Hovered</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    <div className="mr-3">Focused</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    <div className="mr-3">Actice</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button>*/}
        <button
          className="disabled:white ml-3 flex items-center justify-center rounded-lg border border-solid border-gray-300 py-2 px-6 text-sm font-medium leading-5 text-gray-300 dark:border-gray-900 dark:text-gray-700"
          disabled
        >
          <div className="mr-3">Disabled</div>
          <div>
          <svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
          </div>
        </button>
      </div>
    </div>
  )

  let outlinedButtonCompString =
    '<button class="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium leading-5 text-sm text-gray-800 ' +
    outlinedButtonState.selectedColor +
    ' ' +
    outlinedButtonState.selectedFont +
    '">Enabled</button>'

  let outlinedButtonCompStringTwo =
    '<button class="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium leading-5 text-sm text-gray-800 ' +
    outlinedButtonState.selectedColor +
    ' ' +
    outlinedButtonState.selectedFont +
    '">\n' +
    '                    <div>\n' +
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n' +
    '                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>\n' +
    '                        </svg>\n' +
    '                    </div>\n' +
    '                    <div class="ml-3">Enabled</div>\n' +
    '                </button>'

  let outlinedButtonCompStringThree =
    '<button class="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium leading-5 text-sm text-gray-800 ' +
    outlinedButtonState.selectedColor +
    ' ' +
    outlinedButtonState.selectedFont +
    '">\n' +
    '                    <div class="mr-3">Enabled</div>\n' +
    '                    <div>\n' +
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n' +
    '                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>\n' +
    '                        </svg>\n' +
    '                    </div>\n' +
    '                </button>'

  return (
    <>
      <PreviewWindowThree
        outlinedButtonComp={outlinedButtonComp}
        outlinedButtonCompString={outlinedButtonCompString}
        outlinedButtonCompStringTwo={outlinedButtonCompStringTwo}
        outlinedButtonCompStringThree={outlinedButtonCompStringThree}
        showColor={outlinedButtonState.showColor}
        selectedColor={outlinedButtonState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
