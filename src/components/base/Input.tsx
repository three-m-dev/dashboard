type Props = {
  type: "text" | "number" | "password";
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, name, value, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="h-[40px] rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default Input;
