export const showModal = ({ id }) => {
  return {
    type: "MODAL__SET_ID",
    payload: id,
  }
}

export const hideModal = () => {
  return {
    type: "MODAL__SET_ID",
    payload: "",
  }
}
