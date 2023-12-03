import React from 'react'

function TokenDialog() {
  return (
    <>
    <div className="ModalButton">
      <button
        className="tokenList-modal-button2"
        onClick={() => {
          alert("CLOCKEDSSS");
          const dialog = document.querySelector("dialog")
          dialog.show()
        }}
      >
        OpenDialogueModal
      </button>
    </div>
 
    </>
  )

}

export default TokenDialog
