import XIcon from "../../assets/icons/XIcon";

interface ModalBaseProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const ModalBase = ({ children, title, onClose }: ModalBaseProps) => {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-full rounded-md border bg-white p-4 shadow-lg sm:max-w-screen-md  md:w-1/2">
        <div className=" mb-4 flex items-center justify-between border-b pb-4 ">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-md border text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          >
            <XIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalBase;
