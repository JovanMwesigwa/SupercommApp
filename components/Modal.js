import React from 'react'
import ReactModal from 'react-modal';


function Modal({ open, setOpen, name, price, network }) {
    const submit = () => setOpen(false);
    return (
        <ReactModal
            isOpen={open}
            style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgb(128,128,128, 0.75)'
                },
                content: {
                  position: 'absolute',
                  top: '100px',
                  left: '30px',
                  right: '30px',
                  bottom: '300px',
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px'
                }
              }}
            contentLabel={"Pay Order"}
            shouldFocusAfterRender={true}
            shouldCloseOnOverlayClick={true}
        >
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <h3 className="text-lg text-gray-800 font-semibold">Hi, {name} you have initiated an order payment worth UGX {price} with {network}</h3>
                    <p onClick={() => setOpen(false)} className="text-lg text-gray-800 md:cursor-pointer">X</p>
                </div>
            </div>

    </ReactModal>
    )
}

export default Modal
