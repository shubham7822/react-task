
export const AddingTask = (values) => {
  return {
    type:"ADD_TASK",
    payload:values
}
}

export const DeletingTask = (id) => {
  return {
    type:"DELETE_TASK",
    payload:id
  }
}