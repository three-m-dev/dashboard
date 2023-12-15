import ModalBase from "../reusable/ModalBase";

type LogoutModalProps = {
  onClose: () => void;
};

const LogoutModal = ({ onClose }: LogoutModalProps) => {
  return (
    <ModalBase title="Logout" onClose={onClose}>
      <div className=""></div>
    </ModalBase>
  );
};

export default LogoutModal;
