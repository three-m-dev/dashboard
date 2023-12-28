import XIcon from "../../assets/icons/XIcon";

interface ModalBaseProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const ModalBase = ({ children, title, onClose }: ModalBaseProps) => {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-full overflow-hidden rounded-md border bg-white shadow-lg sm:max-w-screen-md max-h-[75vh] md:w-2/3 flex flex-col">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-md border text-gray-600 hover:bg-gray-200 hover:text-gray-900"
          >
            <XIcon />
          </button>
        </div>
        <div className="h-full overflow-auto p-4">{children}</div>
      </div>
    </div>
  );
};

export default ModalBase;
