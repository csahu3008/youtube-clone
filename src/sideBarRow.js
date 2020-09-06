import React from 'react'
import './sideBarRow.css'
function SideBarRow({selected,Icon,title}) {
    return (
        <div className={`rowsidebar ${selected && "selected"}`} >
           <Icon className="rowsidebar__icon"/> 
           <h2 className="rowsidebar__title">{title}</h2>
        </div>
    )
}

export default SideBarRow
