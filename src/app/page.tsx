'use client'
import { useState } from "react";
import { Modal1 } from "../Components/modals/Modal1";
import { Modal2 } from "../Components/modals/Modal2";
import TokenListDialog from "../Components/Modals/TokenListDialog";
import "../styles/index.css";
import "../styles/modal.css";
import "../styles/App.module.css";
import "../styles/modalNEW.css";


export function App() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  return (
    <>
    <div className="App">
      <button
        className="open-modal-button"
        onClick={() => {
          setOpenModal1(true);
        }}
      >
        Subscribe
      </button>
      {openModal1 && <Modal1 openModal1={openModal1} setOpenModal1={setOpenModal1} />}
   </div>
    <div className="ModalButton">
      <button
        className="tokenList-modal-button"
        onClick={() => {
          setOpenModal2(true);
        }}
      >
        OpenTokenListModal
      </button>
      {openModal2 && <Modal2 openModal2={openModal2} setOpenModal2={setOpenModal2} />}
    </div>

    <div className="ModalButton">
      <button
        className="tokenList-modal-button2"
        onClick={() => {
          const dialog = document.querySelector("dialog")
          dialog.show()
        }}
      >
        OpenDialogueModal
      </button>
    </div>

<TokenListDialog />

    {/* <dialog>
      This is a dialog
    </dialog>
 */}
  </>
  );
}

export default App;
