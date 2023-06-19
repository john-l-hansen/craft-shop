import React, { Component, useState } from 'react'
import PreviewWindowTwo from '../PreviewWindowTwo'

export default function Kanban() {
  const [kanbanState, setKanbanState] = useState({
    showColor: false,
    selectedColor:
      'bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setKanbanState({
      ...kanbanState,
      showColor: !kanbanState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setKanbanState({
      ...kanbanState,
      showColor: !kanbanState.showColor,
      selectedColor: e.target.classList.value,
      //selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setKanbanState({
      ...kanbanState,
      selectedFont: e.target.value,
    })
  }

  /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

  let kanbanComp = (
    <div
      className="rounded-xl border bg-white dark:border-none dark:bg-gray-900"
      style={{ width: '416px', height: 'auto' }}
    >
      <div className="flex w-full items-center justify-start px-5 py-5">
        <div className="flex w-1/2 items-center justify-start">
          <div className="leading-normal">
            <h3 className={'m-0 p-0 font-bold ' + kanbanState.selectedFont}>
              Title
            </h3>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-end">
          <div>
            <svg
              class="fill-current"
              width={4}
              height={16}
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                fill="#"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full px-5 leading-snug">
        <p className={'m-0 p-0 ' + kanbanState.selectedFont}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          consequat, tellus eu blandit viverra, velit leo efficitur velit, eu
          condimentum dui leo vel nisl. Sed blandit fringilla ante, quis
          bibendum justo molestie eu.
        </p>
      </div>

      <div className="w-full px-5 py-4">
        <div className="flex font-semibold leading-normal">
          <div className="bg-text-black flex items-center rounded-full border-0 bg-gray-200 py-1 px-4 dark:bg-gray-700 dark:text-gray-200">
            <p className={'m-0 p-0 text-xs ' + kanbanState.selectedFont}>Tag</p>
          </div>
          <div className="ml-2 rounded-full border-0 bg-[#D6FCE7] py-1 px-4">
            <p
              className={
                'm-0 p-0 text-xs text-[#268C55] ' + kanbanState.selectedFont
              }
            >
              Priority
            </p>
          </div>
          <div className="bg-text-black ml-2 flex items-center rounded-full border-0 bg-gray-200 py-1 px-4 dark:bg-gray-700 dark:text-gray-200">
            <p className={'m-0 p-0 text-xs ' + kanbanState.selectedFont}>
              Status
            </p>
          </div>
        </div>
        <div className="my-5 border-y-2 border-gray-100 leading-tight">
          <div className="flex w-full items-center justify-start py-2">
            <div className="flex w-1/2 items-center justify-start">
              <div>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="7.5"
                    fill="white"
                  />
                  <path
                    d="M33.3333 14.6667V33.3333H14.6667V14.6667H33.3333ZM33.3333 12H14.6667C13.2 12 12 13.2 12 14.6667V33.3333C12 34.8 13.2 36 14.6667 36H33.3333C34.8 36 36 34.8 36 33.3333V14.6667C36 13.2 34.8 12 33.3333 12ZM26.8533 23.8133L22.8533 28.9733L20 25.52L16 30.6667H32L26.8533 23.8133Z"
                    fill="#CECECE"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="7.5"
                    stroke="#CECECE"
                  />
                </svg>
              </div>
              <div className="ml-5 leading-normal ">
                <h4
                  className={
                    'text-sm font-bold text-gray-800 dark:text-white ' +
                    kanbanState.selectedFont
                  }
                >
                  Item Name
                </h4>
                <p
                  className={
                    'm-0 p-0 text-sm text-gray-500 dark:text-gray-200 ' +
                    kanbanState.selectedFont
                  }
                >
                  Item Description
                </p>
              </div>
            </div>
            <div className="flex w-1/2 items-center justify-end">
              <p
                className={
                  'font-bold dark:text-white ' + kanbanState.selectedFont
                }
              >
                QTY
              </p>
              <p className={'ml-2 dark:text-white ' + kanbanState.selectedFont}>
                UOM
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-start pb-2">
            <div className="flex w-1/2 items-center justify-start">
              <div>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="7.5"
                    fill="white"
                  />
                  <path
                    d="M33.3333 14.6667V33.3333H14.6667V14.6667H33.3333ZM33.3333 12H14.6667C13.2 12 12 13.2 12 14.6667V33.3333C12 34.8 13.2 36 14.6667 36H33.3333C34.8 36 36 34.8 36 33.3333V14.6667C36 13.2 34.8 12 33.3333 12ZM26.8533 23.8133L22.8533 28.9733L20 25.52L16 30.6667H32L26.8533 23.8133Z"
                    fill="#CECECE"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="7.5"
                    stroke="#CECECE"
                  />
                </svg>
              </div>
              <div className="ml-5 leading-normal">
                <h4
                  className={
                    'm-0 p-0 text-sm font-bold text-gray-800 dark:text-white ' +
                    kanbanState.selectedFont
                  }
                >
                  Item Name
                </h4>
                <p className={'m-0 p-0 ' + kanbanState.selectedFont}>
                  Item Description
                </p>
              </div>
            </div>
            <div className="flex w-1/2 items-center justify-end">
              <p
                className={
                  'font-bold dark:text-white ' + kanbanState.selectedFont
                }
              >
                QTY
              </p>
              <p className={'ml-2 dark:text-white ' + kanbanState.selectedFont}>
                UOM
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-start pb-2">
            <div className="flex w-1/2 items-center justify-start">
              <div>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="7.5"
                    fill="white"
                  />
                  <path
                    d="M33.3333 14.6667V33.3333H14.6667V14.6667H33.3333ZM33.3333 12H14.6667C13.2 12 12 13.2 12 14.6667V33.3333C12 34.8 13.2 36 14.6667 36H33.3333C34.8 36 36 34.8 36 33.3333V14.6667C36 13.2 34.8 12 33.3333 12ZM26.8533 23.8133L22.8533 28.9733L20 25.52L16 30.6667H32L26.8533 23.8133Z"
                    fill="#CECECE"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="7.5"
                    stroke="#CECECE"
                  />
                </svg>
              </div>

              <div className="ml-5 leading-normal">
                <h4
                  className={
                    'm-0 p-0 text-sm font-bold text-gray-800 dark:text-white ' +
                    kanbanState.selectedFont
                  }
                >
                  Item Name
                </h4>
                <p className={'m-0 p-0 ' + kanbanState.selectedFont}>
                  Item Description
                </p>
              </div>
            </div>
            <div className="flex w-1/2 items-center justify-end">
              <p
                className={
                  'font-bold dark:text-white ' + kanbanState.selectedFont
                }
              >
                QTY
              </p>
              <p className={'ml-2 dark:text-white ' + kanbanState.selectedFont}>
                UOM
              </p>
            </div>
          </div>
        </div>
        <div className="jusify-center flex items-center">
          <div className="flex w-1/2 items-center justify-start">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V9H18V20ZM18 7H2V4H18V7Z"
                fill="#88898B"
              />
            </svg>
            <p className={'m-0 ml-2 p-0 ' + kanbanState.selectedFont}>Date</p>
          </div>

          <div className="flex w-1/2 items-center justify-end">
            <button
              className={
                'flex items-center justify-center rounded-lg border border-solid border-gray-800 bg-transparent py-2 px-6 text-sm font-medium  leading-5 text-gray-800 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-900 dark:active:bg-gray-300 dark:active:text-gray-900 ' +
                kanbanState.selectedFont
              }
            >
              Cancel
            </button>

            <button
              className={
                'ml-3 flex items-center justify-center rounded-lg py-2 px-6 text-sm font-medium leading-5 text-white ' +
                kanbanState.selectedColor +
                ' ' +
                kanbanState.selectedFont
              }
            >
              Enabled
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  let kanbanCompString =
    '<div class="border rounded-xl bg-white" style="width:416px; height:auto">\n' +
    '                    <div class="px-5 py-5 w-full flex justify-start items-center">\n' +
    '                        <div class="w-1/2 flex justify-start items-center">\n' +
    '                            <div class="leading-normal">\n' +
    '                                <h3 class="p-0 m-0 font-bold ' +
    kanbanState.selectedFont +
    '">Title</h3>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="w-1/2 flex justify-end items-center">\n' +
    '                            <div>\n' +
    '                                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n' +
    '                                    <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#323232" />\n' +
    '                                </svg>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="px-5 w-full leading-snug">\n' +
    '                        <p class="p-0 m-0 ' +
    kanbanState.selectedFont +
    '">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat, tellus eu blandit viverra, velit leo efficitur velit, eu condimentum dui leo \n' +
    '                        vel nisl. Sed blandit fringilla ante, quis bibendum justo molestie eu.</p>\n' +
    '                    </div> \n' +
    '\n' +
    '\n' +
    '                    <div class="px-5 py-4 w-full">\n' +
    '                        <div class="flex leading-normal font-semibold">\n' +
    '                            <div class="py-1 px-4 flex items-center bg-gray-200 border-0 rounded-full">\n' +
    '                                <p class="p-0 m-0 text-xs ' +
    kanbanState.selectedFont +
    '">Tag</p>\n' +
    '                            </div>\n' +
    '                            <div class="py-1 px-4 ml-2 bg-[#D6FCE7] border-0 rounded-full">\n' +
    '                                <p class="p-0 m-0 text-[#268C55] text-xs ' +
    kanbanState.selectedFont +
    '">Priority</p>\n' +
    '                            </div>\n' +
    '                            <div class="py-1 px-4 ml-2 bg-gray-200 border-0 rounded-full">\n' +
    '                                <p class="p-0 m-0 text-xs ' +
    kanbanState.selectedFont +
    '">Status</p>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="my-5 leading-tight border-y-2 border-gray-100">\n' +
    '                            <div class="py-2 w-full flex justify-start items-center">\n' +
    '                                <div class="w-1/2 flex justify-start items-center">\n' +
    '                                    <div>\n' +
    '                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" fill="white"/>\n' +
    '                                            <path d="M33.3333 14.6667V33.3333H14.6667V14.6667H33.3333ZM33.3333 12H14.6667C13.2 12 12 13.2 12 14.6667V33.3333C12 34.8 13.2 36 14.6667 36H33.3333C34.8 36 36 34.8 36 33.3333V14.6667C36 13.2 34.8 12 33.3333 12ZM26.8533 23.8133L22.8533 28.9733L20 25.52L16 30.6667H32L26.8533 23.8133Z" fill="#CECECE"/>\n' +
    '                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" stroke="#CECECE"/>\n' +
    '                                    </svg>\n' +
    '\n' +
    '                                    </div>\n' +
    '                                    <div class="ml-5 leading-normal">\n' +
    '                                        <h4 class="p-0 m-0 font-bold ' +
    kanbanState.selectedFont +
    '">Item Name</h4>\n' +
    '                                        <p class="p-0 m-0 ' +
    kanbanState.selectedFont +
    '">Item Description</p>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="w-1/2 flex justify-end items-center">\n' +
    '                                    <p class="font-bold ' +
    kanbanState.selectedFont +
    '">QTY</p>\n' +
    '                                    <p class="ml-2 ' +
    kanbanState.selectedFont +
    '">UOM</p>\n' +
    '                                </div>   \n' +
    '                            </div>\n' +
    '                            <div class="pb-2 w-full flex justify-start items-center">\n' +
    '                                <div class="w-1/2 flex justify-start items-center">\n' +
    '                                    <div>\n' +
    '                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" fill="white"/>\n' +
    '                                            <path d="M33.3333 14.6667V33.3333H14.6667V14.6667H33.3333ZM33.3333 12H14.6667C13.2 12 12 13.2 12 14.6667V33.3333C12 34.8 13.2 36 14.6667 36H33.3333C34.8 36 36 34.8 36 33.3333V14.6667C36 13.2 34.8 12 33.3333 12ZM26.8533 23.8133L22.8533 28.9733L20 25.52L16 30.6667H32L26.8533 23.8133Z" fill="#CECECE"/>\n' +
    '                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" stroke="#CECECE"/>\n' +
    '                                    </svg>\n' +
    '\n' +
    '                                    </div>\n' +
    '                                    <div class="ml-5 leading-normal">\n' +
    '                                        <h4 class="p-0 m-0 font-bold ' +
    kanbanState.selectedFont +
    '">Item Name</h4>\n' +
    '                                        <p class="p-0 m-0 ' +
    kanbanState.selectedFont +
    '">Item Description</p>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="w-1/2 flex justify-end items-center">\n' +
    '                                    <p class="font-bold ' +
    kanbanState.selectedFont +
    '">QTY</p>\n' +
    '                                    <p class="ml-2 ' +
    kanbanState.selectedFont +
    '">UOM</p>\n' +
    '                                </div>   \n' +
    '                            </div>\n' +
    '                            <div class="pb-2 w-full flex justify-start items-center">\n' +
    '                                <div class="w-1/2 flex justify-start items-center">\n' +
    '                                    <div>\n' +
    '                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" fill="white"/>\n' +
    '                                            <path d="M33.3333 14.6667V33.3333H14.6667V14.6667H33.3333ZM33.3333 12H14.6667C13.2 12 12 13.2 12 14.6667V33.3333C12 34.8 13.2 36 14.6667 36H33.3333C34.8 36 36 34.8 36 33.3333V14.6667C36 13.2 34.8 12 33.3333 12ZM26.8533 23.8133L22.8533 28.9733L20 25.52L16 30.6667H32L26.8533 23.8133Z" fill="#CECECE"/>\n' +
    '                                        <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" stroke="#CECECE"/>\n' +
    '                                    </svg>\n' +
    '\n' +
    '                                    </div>\n' +
    '                                    <div class="ml-5 leading-normal">\n' +
    '                                        <h4 class="p-0 m-0 font-bold ' +
    kanbanState.selectedFont +
    '">Item Name</h4>\n' +
    '                                        <p class="p-0 m-0 ' +
    kanbanState.selectedFont +
    '">Item Description</p>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="w-1/2 flex justify-end items-center">\n' +
    '                                    <p class="font-bold ' +
    kanbanState.selectedFont +
    '">QTY</p>\n' +
    '                                    <p class="ml-2 ' +
    kanbanState.selectedFont +
    '">UOM</p>\n' +
    '                                </div>   \n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="flex jusify-center items-center">\n' +
    '                            <div class="w-1/2 flex justify-start items-center">\n' +
    '                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                                    <path d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V9H18V20ZM18 7H2V4H18V7Z" fill="#88898B"/>\n' +
    '                                </svg>\n' +
    '                                <p class="p-0 m-0 ml-2 ' +
    kanbanState.selectedFont +
    '">Date</p>\n' +
    '                            </div> \n' +
    '\n' +
    '                            <div class="w-1/2 flex justify-end items-center">\n' +
    '                                <button class="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-gray-800 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200 leading-5 text-sm ' +
    kanbanState.selectedFont +
    '">\n' +
    '                                    Cancel\n' +
    '                                </button>\n' +
    '                                <button class="ml-3 py-2 px-6 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-white ' +
    kanbanState.selectedColor +
    ' ' +
    kanbanState.selectedFont +
    '">\n' +
    '                                    Enabled\n' +
    '                                </button>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>'

  return (
    <>
      <PreviewWindowTwo
        kanbanComp={kanbanComp}
        kanbanCompString={kanbanCompString}
        showColor={kanbanState.showColor}
        selectedColor={kanbanState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
