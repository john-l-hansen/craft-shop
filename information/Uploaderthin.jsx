import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Uploaderthin() {
  const [uploaderthinState, setUploaderthinState] = useState({
    showColor: false,
    selectedColor: 'bg-blue-100',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setUploaderthinState({
      ...uploaderthinState,
      showColor: !uploaderthinState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()
    //console.log(e.target.classList.value)
    setUploaderthinState({
      ...uploaderthinState,
      showColor: !uploaderthinState.showColor,
      selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setUploaderthinState({
      ...uploaderthinState,
      selectedFont: e.target.value,
    })
  }

  let uploaderthinComp = (
    <div>
      <div className="flex w-[302px] ">
        <label
          for=" dropzone-file"
          className="flex w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-200 px-4 hover:border-solid hover:bg-gray-50 dark:border-gray-600"
        >
          <div className="flex space-x-4 py-2">
            <svg
              class="fill-current"
              aria-hidden
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 15V18H6.5V15H4.5V18C4.5 19.1 5.4 20 6.5 20H18.5C19.6 20 20.5 19.1 20.5 18V15H18.5ZM7.5 9L8.91 10.41L11.5 7.83V16H13.5V7.83L16.09 10.41L17.5 9L12.5 4L7.5 9Z"
                fill=""
              />
            </svg>
            <div
              className={
                'text-sm text-gray-700 dark:text-gray-200 ' +
                uploaderthinState.selectedFont
              }
            >
              Drag and drop or click to upload
            </div>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <br></br>
      <div className="flex w-[302px]">
        <label
          for="dropzone-file"
          className="flex w-full cursor-not-allowed items-center rounded-lg border-2 border-dashed border-gray-200 px-4 dark:border-gray-600"
        >
          <div className="flex items-center justify-center space-x-4 py-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM7 9L8.41 10.41L11 7.83V16H13V7.83L15.59 10.41L17 9L12 4L7 9Z"
                fill="#989A9C"
              />
            </svg>
            <div
              className={
                'text-sm text-gray-400 dark:text-gray-200 ' +
                uploaderthinState.selectedFont
              }
            >
              Drag and drop or click to upload{' '}
            </div>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <br></br>
      <div className="flex w-[302px]">
        <label
          for="dropzone-file"
          className="flex w-full cursor-pointer rounded-lg bg-gray-100 px-4 text-gray-900 dark:bg-gray-800 dark:text-white"
        >
          <div className="flex space-x-4 py-2">
            <svg
              class="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.79922 15.9L4.59922 11.7L3.19922 13.1L8.79922 18.7L20.7992 6.69999L19.3992 5.29999L8.79922 15.9Z"
                fill=""
              />
            </svg>
            <div className={'text-sm ' + uploaderthinState.selectedFont}>
              File_name.pdf
            </div>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <br></br>
      <div className="flex w-[302px]">
        <label
          for="dropzone-file"
          className="flex w-full cursor-pointer rounded-lg border-2 border-dashed border-red-500 px-4"
        >
          <div className="flex space-x-4 py-2">
            <svg
              width="25"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.667 15V18H6.22251V15H4.14844V18C4.14844 19.1 5.08177 20 6.22251 20H18.667C19.8077 20 20.741 19.1 20.741 18V15H18.667ZM7.25955 9L8.72177 10.41L11.4077 7.83V16H13.4818V7.83L16.1677 10.41L17.6299 9L12.4447 4L7.25955 9Z"
                fill="#E52628"
              />
            </svg>
            <div
              className={
                'text-sm text-gray-700 dark:text-gray-200 ' +
                uploaderthinState.selectedFont
              }
            >
              Upload or <span className="font-bold text-red-500">browse</span>{' '}
            </div>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  )

  let uploaderthinCompString =
    '<div class="w-[302px] flex">\n' +
    '                <label for="dropzone-file" class="flex w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-200 hover:border-solid hover:bg-gray-50 px-4">\n' +
    '                    <div class="flex space-x-4 py-2">\n' +
    '                        <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M18.5 15V18H6.5V15H4.5V18C4.5 19.1 5.4 20 6.5 20H18.5C19.6 20 20.5 19.1 20.5 18V15H18.5ZM7.5 9L8.91 10.41L11.5 7.83V16H13.5V7.83L16.09 10.41L17.5 9L12.5 4L7.5 9Z" fill="black" />\n' +
    '                        </svg>\n' +
    '                        <div class="text-sm text-gray-700 ' +
    uploaderthinState.selectedFont +
    '">Drag and drop or click to upload</div>\n' +
    '                    </div>\n' +
    '                    <input id="dropzone-file" type="file" class="hidden" />\n' +
    '                </label>\n' +
    '            </div>\n' +
    '            <div class="w-[302px] flex">\n' +
    '                <label for="dropzone-file" class="flex w-full cursor-not-allowed items-center rounded-lg border-2 border-dashed border-gray-200 px-4">\n' +
    '                    <div class="flex items-center justify-center space-x-4 py-2">\n' +
    '                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                    <path d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM7 9L8.41 10.41L11 7.83V16H13V7.83L15.59 10.41L17 9L12 4L7 9Z" fill="#989A9C"/>\n' +
    '                    </svg>\n' +
    '                    <div class="text-sm text-gray-400 ' +
    uploaderthinState.selectedFont +
    '">Drag and drop or click to upload </div>\n' +
    '                    </div>\n' +
    '                    <input id="dropzone-file" type="file" class="hidden" />\n' +
    '                </label>\n' +
    '            </div>\n' +
    '            <div class="w-[302px] flex">\n' +
    '                <label for="dropzone-file" class="flex bg-gray-100 w-full cursor-pointer rounded-lg px-4">\n' +
    '                    <div class="flex space-x-4 py-2">\n' +
    '                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <path d="M8.79922 15.9L4.59922 11.7L3.19922 13.1L8.79922 18.7L20.7992 6.69999L19.3992 5.29999L8.79922 15.9Z" fill="#323232"/>\n' +
    '                    </svg>\n' +
    '                    <div class="text-sm text-gray-900 ' +
    uploaderthinState.selectedFont +
    '">File_name.pdf</div>\n' +
    '                    </div>\n' +
    '                    <input id="dropzone-file" type="file" class="hidden" />\n' +
    '                </label>\n' +
    '            </div>\n' +
    '            <div class="w-[302px] flex">\n' +
    '                <label for="dropzone-file" class="flex w-full cursor-pointer rounded-lg border-2 border-dashed border-red-500 px-4">\n' +
    '                    <div class="flex space-x-4 py-2">\n' +
    '                    <svg width="25" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <path d="M18.667 15V18H6.22251V15H4.14844V18C4.14844 19.1 5.08177 20 6.22251 20H18.667C19.8077 20 20.741 19.1 20.741 18V15H18.667ZM7.25955 9L8.72177 10.41L11.4077 7.83V16H13.4818V7.83L16.1677 10.41L17.6299 9L12.4447 4L7.25955 9Z" fill="#E52628"/>\n' +
    '                    </svg>\n' +
    '                        <div class="text-sm text-gray-700 ' +
    uploaderthinState.selectedFont +
    '">Upload or <span class="font-bold text-red-500">browse</span> </div>\n' +
    '                    </div>\n' +
    '                    <input id="dropzone-file" type="file" class="hidden" />\n' +
    '                </label>\n' +
    '            </div>'

  return (
    <>
      <PreviewWindowDisabled
        uploaderthinComp={uploaderthinComp}
        uploaderthinCompString={uploaderthinCompString}
        showColor={uploaderthinState.showColor}
        selectedColor={uploaderthinState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
