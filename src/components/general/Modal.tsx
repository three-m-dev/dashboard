// src/components/Modal.jsx

import React from 'react';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
			<div className="mx-auto p-5 border max-w-[50vw] shadow-lg rounded-md bg-white">
				<div className="flex justify-end">
					<button onClick={onClose} className="text-black">
						X
					</button>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
