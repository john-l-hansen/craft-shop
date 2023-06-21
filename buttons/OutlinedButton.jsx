import React, { Component, useState } from 'react'
import PreviewWindowThree from '../PreviewWindowThree'

export default function TextButton() {
  const [textButtonState, setTextButtonState] = useState({
    showColor: false,
    selectedColor:
      'bg-white hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setTextButtonState({
      ...textButtonState,
      showColor: !textButtonState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setTextButtonState({
      ...textButtonState,
      showColor: !textButtonState.showColor,
      selectedColor: e.target.classList.value,
      //selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setTextButtonState({
      ...textButtonState,
      selectedFont: e.target.value,
    })
  }

  let textButtonComp = (
    <div>
      {/*Standard*/}
      <div className="flex items-center justify-center">
        <button
          className={
            'flex items-center justify-center rounded-lg bg-transparent py-2 px-6 text-sm font-medium leading-5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:active:bg-gray-900' +
            textButtonState.selectedColor +
            ' ' +
            textButtonState.selectedFont
          }
        >
          Enabled
        </button>
        {/*<button className="py-2 px-6 rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    Hovered
                </button> 
                <button className="py-2 px-6 rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    Focused
                </button> 
                <button className="py-2 px-6 rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    Active
                </button>*/}
        <button
          className="disabled:white ml-3 rounded-lg py-2 px-6 text-sm font-medium leading-5 text-gray-300 dark:text-gray-200 disabled:dark:text-gray-700 "
          disabled
        >
          Disabled
        </button>
      </div>

      {/*Plus Left*/}
      <div className="mt-5 flex items-center justify-center">
        <button
          className={
            'flex items-center justify-center rounded-lg bg-transparent py-2 px-6 text-sm font-medium leading-5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:active:bg-gray-900 ' +
            textButtonState.selectedColor +
            ' ' +
            textButtonState.selectedFont
          }
        >
          <div>
            <svg
              class="fill-current"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
            </svg>
          </div>
          <div className="ml-3">Enabled</div>
        </button>
        {/*<button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Hovered</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Focused</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Actice</div>
                </button>*/}
        <button
          className="disabled:white ml-3 flex items-center justify-center rounded-lg py-2 px-6 text-sm font-medium leading-5 text-gray-300 dark:text-gray-700 disabled:dark:text-gray-700"
          disabled
        >
          <div>
            <svg
              class="fill-current"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
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
            'flex items-center justify-center rounded-lg bg-transparent py-2 px-6 text-sm font-medium leading-5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:active:bg-gray-900 ' +
            textButtonState.selectedColor +
            ' ' +
            textButtonState.selectedFont
          }
        >
          <div className="mr-3">Enabled</div>
          <div>
            <svg
              class="fill-current"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
            </svg>
          </div>
        </button>
        {/*<button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    <div className="mr-3">Hovered</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-100 ml-3 leading-5 text-sm">
                    <div className="mr-3">Focused</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    <div className="mr-3">Actice</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button>*/}
        <button
          className="disabled:white ml-3 flex items-center justify-center rounded-lg py-2 px-6 text-sm font-medium leading-5 text-gray-300 dark:text-gray-700"
          disabled
        >
          <div className="mr-3">Disabled</div>
          <div>
            <svg
              class="fill-current"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )

  let textButtonCompString =
    '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm ' +
    textButtonState.selectedColor +
    ' ' +
    textButtonState.selectedFont +
    '">Enabled</button>'

  let textButtonCompStringTwo =
    '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm ' +
    textButtonState.selectedColor +
    ' ' +
    textButtonState.selectedFont +
    '">\n' +
    '                    <div>\n' +
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n' +
    '                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>\n' +
    '                        </svg>\n' +
    '                    </div>\n' +
    '                    <div class="ml-3">Enabled</div>\n' +
    '                </button>'

  let textButtonCompStringThree =
    '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm ' +
    textButtonState.selectedColor +
    ' ' +
    textButtonState.selectedFont +
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
        textButtonComp={textButtonComp}
        textButtonCompString={textButtonCompString}
        textButtonCompStringTwo={textButtonCompStringTwo}
        textButtonCompStringThree={textButtonCompStringThree}
        showColor={textButtonState.showColor}
        selectedColor={textButtonState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
