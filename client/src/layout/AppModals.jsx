// App
import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "@/store/slicers/appSlice";

// Components
import Modal from "@/components/ReusableUI/Modal/Modal";
import Login from "@/components/Login/Login";

const AppModals = () => {
  const dispatch = useDispatch();
  const { isLoginModalShown } = useSelector((state) => state.appSlice);

  const toggleModalFunc = (modalType) => {
    dispatch(toggleModal(modalType));
  };

  return (
    <>
      <Modal
        isModalShown={isLoginModalShown}
        toggleModalFunction={() => toggleModalFunc("login")}
      >
        <Login />
      </Modal>
    </>
  );
};

export default AppModals;
