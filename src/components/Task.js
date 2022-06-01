import React from 'react'
import { SingleTask } from './SingleTask'

export const Task = ({tasks, onDelete}) => {

  return (
    <>
    {tasks.map((task) =>(
			<SingleTask task={task} key={task.id}
			onDelete={onDelete}
			 />
		))}
    </>
  )
}
