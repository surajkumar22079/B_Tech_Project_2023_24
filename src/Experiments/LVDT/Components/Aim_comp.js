import React from 'react'
import { connect } from 'react-redux'
import "./LVDT.css"

const Aim_comp = (props) => {
  return (
    <div className='Aim_comp'>
        <h3>Aim:To understand working principle of LVDT</h3>
        {/* <br/> */}
        <h3>Objective</h3>
        <h4>1:Study the relation between core displacement and output of LVDT</h4>
        <h4>2:Understand the effect of change in supply frequency on LVDT performance</h4>
        <h4>3:Understand the effect of change in excitation (supply) voltage on LVDT performance</h4>
    </div>
  )
}

export default Aim_comp;