import React from 'react'

export const SingleTask = ({task, onDelete}) => {

  let {text, id} = task;

  return (
    <div>{text}  <button onClick={() => onDelete(id)}>delete</button></div>
  )
}
