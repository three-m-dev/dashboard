type Props = {
  toggleModal: () => void;
};

const CareerModal = (props: Props) => {
  return (
    <div className="fixed inset-0 z-50 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative top-1/4 mx-auto w-1/3 rounded-md border bg-white p-5 shadow-lg">
        123
        <button onClick={props.toggleModal}>Close</button>
      </div>
    </div>
  );
};

export default CareerModal;
