import React, {useState, useEffect} from 'react'
import {AreaType} from '../utils/types'

const Area = (props: {areaTree:AreaType []})=>{

    console.log('area...', props.areaTree);
    return <>
        <div>
            <h3>国内病例</h3>
        </div>
        <div>
            <h3>海外国家</h3>
        </div>
    </>
}

export default Area