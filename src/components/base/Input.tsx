type Props = {
  type: "text" | "password";
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const Input = ({ type, name, label, value, onChange, error }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="h-[40px] rounded border border-gray-300 px-2 "
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
