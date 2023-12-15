interface ModalBaseProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const ModalBase = ({ children, title, onClose }: ModalBaseProps) => {
  return (
    <div className=" absolute inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60">
      <div className="w-1/2 rounded-lg bg-white p-6 shadow-xl">
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
