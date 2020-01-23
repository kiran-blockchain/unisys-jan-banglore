import React from 'react';

export const Dropdown=(props)=>{

    return <select name={props.name} className="form-control" 
    value ={props.value}
    onChange={e=>{
        props.handleChange(e);
    }}>
            {getOptions(props)}
    </select>
}

const getOptions = (props)=>{
   return  props.items.map((item,index)=>{
        return <option value={item.value}>{item.name}</option>;
    })
}