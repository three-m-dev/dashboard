import { ReactNode } from 'react';

type ModalProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;

  children: ReactNode;
};

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center'>
      <div className='mx-auto p-5 border shadow-lg rounded-md bg-white'>
        <div className='flex justify-between items-center gap-4'>
          {title && <h1 className='text-2xl font-semibold'>{title}</h1>}

          <button
            onClick={onClose}
            className='flex items-center bg-gray-300 text-gray-600 p-2 rounded hover:bg-blue-200 focus:outline-none transition-all ease-in-out'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
