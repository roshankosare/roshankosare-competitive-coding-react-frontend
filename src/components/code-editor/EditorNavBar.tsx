import React from 'react'

const EditorNavBar = ({setLanguage}:{setLanguage:Function}) => {
  return (
    <div className="flex flex-col w-100  shadow-md  rounded-md bg-white">
    {/* editor navbar */}
    <div className="w-100 h-12 text-xs rounded-t-md flex pt-2">
      <p className="p-1 mx-2">Languages</p>

      <select
        className="border border-gray px-1 mx-2 h-6 focus:outline-none"
        id="language"
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        <option value="js">node js</option>
        <option value="cpp">cpp</option>
        <option value="c">c</option>

        <option value="py">pythone</option>
      </select>
    </div>
    </div>
  )
}

export default EditorNavBar