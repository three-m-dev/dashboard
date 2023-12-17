import ModalBase from "../reusable/ModalBase";

type LogoutModalProps = {
  onClose: () => void;
};

const LogoutModal = ({ onClose }: LogoutModalProps) => {
  return (
    <ModalBase title="Logout" onClose={onClose}>
      <div className="text-center">
        <svg
          className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 w-3/4">
          Are you sure you want to logout?
        </h3>

        <button
          type="button"
          onClick={onClose}
          className="me-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
        >
          Yes, I'm sure
        </button>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
        >
          No, cancel
        </button>
      </div>
    </ModalBase>
  );
};

export default LogoutModal;
