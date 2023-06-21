import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Breadcrumb() {
  const [breadcrumbState, setBreadcrumbState] = useState({
    showColor: false,
    selectedColor: 'bg-blue-100',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setBreadcrumbState({
      ...breadcrumbState,
      showColor: !breadcrumbState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()
    //consdive.log(e.target.classdivst.value)
    setBreadcrumbState({
      ...breadcrumbState,
      showColor: !breadcrumbState.showColor,
      selectedColor: e.target.classlist[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setBreadcrumbState({
      ...breadcrumbState,
      selectedFont: e.target.value,
    })
  }

  let breadcrumbComp = (
    <div>
      <nav className={"w-full rounded-md " + breadcrumbState.selectedFont}>
        <div className="flex">
          <div className="text-neutral-500">Breadcrumb 1</div>
        </div>
      </nav>

      <nav className={"w-full rounded-md " + breadcrumbState.selectedFont}>
        <div className="flex">
          <div>
            <a href="#"
              className="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900">
              Breadcrumb 1
            </a>
          </div>
          <div>
            <span className="mx-2 text-gray-400">{'>'}</span>
          </div>
          <div className="text-neutral-500">Breadcrumb 2</div>
        </div>
      </nav>

      <nav className={"w-full rounded-md " + breadcrumbState.selectedFont}>
        <div className="flex">
          <div>
            <a
              href="#"
              className="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900">
              Breadcrumb 1
            </a>
          </div>
          <div>
            <span className="mx-2 text-neutral-500">{'>'}</span>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"
            >
              Breadcrumb 2
            </a>
          </div>
          <div>
            <span className="mx-2 text-gray-400">{'>'}</span>
          </div>
          <div className="text-gray-500">Breadcrumb 3</div>
        </div>
      </nav>

      <nav className={"w-full rounded-md " + breadcrumbState.selectedFont}>
        <div className="divst-reset flex">
          <div>
            <a
              href="#"
              className="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"
            >
              Breadcrumb 1
            </a>
          </div>
          <div>
            <span className="mx-2 text-neutral-500">{'>'}</span>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"
            >
              Breadcrumb 2
            </a>
          </div>
          <div>
            <span className="mx-2 text-gray-400">{'>'}</span>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"
            >
              Breadcrumb 3
            </a>
          </div>
          <div>
            <span className="mx-2 text-gray-400">{'>'}</span>
          </div>

          <div className="text-gray-500">Breadcrumb 4</div>
        </div>
      </nav>

      <nav className={"w-full rounded-md " + breadcrumbState.selectedFont}>
        <div className="flex">
          <div>
            <a
              href="#"
              className="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"
            >
              Breadcrumb 1
            </a>
          </div>
          <div>
            <span className="mx-2 text-neutral-500">{'>'}</span>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"
            >
              Breadcrumb 2
            </a>
          </div>
          <div>
            <span className="mx-2 text-gray-400">{'>'}</span>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"
            >
              Breadcrumb 3
            </a>
          </div>
          <div>
            <span className="mx-2 text-gray-400">{'>'}</span>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"
            >
              Breadcrumb 4
            </a>
          </div>
          <div>
            <span className="mx-2 text-gray-400">{'>'}</span>
          </div>
          <div className="text-gray-500">Breadcrumb 5</div>
        </div>
      </nav>
    </div>
  )

  let breadcrumbCompString =
  '      <nav class="w-full rounded-md ' + breadcrumbState.selectedFont + '">\n'+
  '        <div class="flex">\n'+
  '          <div class="text-neutral-500">Breadcrumb 1</div>\n'+
  '        </div>\n'+
  '      </nav>\n'+
  '\n'+
  '      <nav class="w-full rounded-md ' + breadcrumbState.selectedFont + '">\n'+
  '        <div class="flex">\n'+
  '          <div>\n'+
  '            <a href="#"\n'+
  '              class="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900">\n'+
  '              Breadcrumb 1\n'+
  '            </a>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <span class="mx-2 text-gray-400">></span>\n'+
  '          </div>\n'+
  '          <div class="text-neutral-500">Breadcrumb 2</div>\n'+
  '        </div>\n'+
  '      </nav>\n'+
  '\n'+
  '      <nav class="w-full rounded-md ' + breadcrumbState.selectedFont + '">\n'+
  '        <div class="flex">\n'+
  '          <div>\n'+
  '            <a\n'+
  '              href="#"\n'+
  '              class="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900">\n'+
  '              Breadcrumb 1\n'+
  '            </a>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <span class="mx-2 text-neutral-500">></span>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <a\n'+
  '              href="#"\n'+
  '              class="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"\n'+
  '            >\n'+
  '              Breadcrumb 2\n'+
  '            </a>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <span class="mx-2 text-gray-400">></span>\n'+
  '          </div>\n'+
  '          <div class="text-gray-500">Breadcrumb 3</div>\n'+
  '        </div>\n'+
  '      </nav>\n'+
  '\n'+
  '      <nav class="w-full rounded-md ' + breadcrumbState.selectedFont + '">\n'+
  '        <div class="divst-reset flex">\n'+
  '          <div>\n'+
  '            <a\n'+
  '              href="#"\n'+
  '              class="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"\n'+
  '            >\n'+
  '              Breadcrumb 1\n'+
  '            </a>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <span class="mx-2 text-neutral-500">></span>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <a\n'+
  '              href="#"\n'+
  '              class="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"\n'+
  '            >\n'+
  '              Breadcrumb 2\n'+
  '            </a>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <span class="mx-2 text-gray-400">></span>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <a\n'+
  '              href="#"\n'+
  '              class="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"\n'+
  '            >\n'+
  '              Breadcrumb 3\n'+
  '            </a>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <span class="mx-2 text-gray-400">></span>\n'+
  '          </div>\n'+
  '\n'+
  '          <div class="text-gray-500">Breadcrumb 4</div>\n'+
  '        </div>\n'+
  '      </nav>\n'+
  '\n'+
  '      <nav class="w-full rounded-md ' + breadcrumbState.selectedFont + '">\n'+
  '        <div class="flex">\n'+
  '          <div>\n'+
  '            <a\n'+
  '              href="#"\n'+
  '              class="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"\n'+
  '            >\n'+
  '              Breadcrumb 1\n'+
  '            </a>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <span class="mx-2 text-neutral-500">></span>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <a\n'+
  '              href="#"\n'+
  '              class="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"\n'+
  '            >\n'+
  '              Breadcrumb 2\n'+
  '            </a>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <span class="mx-2 text-gray-400">></span>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <a\n'+
  '              href="#"\n'+
  '              class="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"\n'+
  '            >\n'+
  '              Breadcrumb 3\n'+
  '            </a>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <span class="mx-2 text-gray-400">></span>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <a\n'+
  '              href="#"\n'+
  '              class="text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 active:text-gray-900"\n'+
  '            >\n'+
  '              Breadcrumb 4\n'+
  '            </a>\n'+
  '          </div>\n'+
  '          <div>\n'+
  '            <span class="mx-2 text-gray-400">></span>\n'+
  '          </div>\n'+
  '          <div class="text-gray-500">Breadcrumb 5</div>\n'+
  '        </div>\n'+
  '      </nav>';

  return (
    <>
      <PreviewWindowDisabled
        breadcrumbComp={breadcrumbComp}
        breadcrumbCompString={breadcrumbCompString}
        showColor={breadcrumbState.showColor}
        selectedColor={breadcrumbState.selectedColor}
        changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
      />
    </>
  )
}
