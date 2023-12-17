interface ModalBaseProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const ModalBase = ({ children, title, onClose }: ModalBaseProps) => {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-max rounded-md border bg-white p-5 shadow-lg sm:mx-auto sm:max-w-screen-md">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-xl text-gray-600 hover:text-gray-900"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalBase;
