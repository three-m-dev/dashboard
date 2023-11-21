import { useState } from "react";

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const BulletTextArea = (props: Props) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let modifiedValue = event.target.value;

    if (!value && !modifiedValue.startsWith("• ")) {
      modifiedValue = "• " + modifiedValue;
    }

    const inputEvent = event.nativeEvent as InputEvent;

    if (inputEvent.inputType === "insertLineBreak") {
      modifiedValue = addBullet(modifiedValue);
    }

    setValue(modifiedValue);
    props.onChange(modifiedValue);
  };

  const addBullet = (text: string): string => {
    const lines = text.split("\n");
    const lastLineIndex = lines.length - 1;
    if (!lines[lastLineIndex].startsWith("• ")) {
      lines[lastLineIndex] = "• " + lines[lastLineIndex];
    }
    return lines.join("\n");
  };

  return (
    <div>
      <textarea
        className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        rows={3}
        placeholder={props.placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default BulletTextArea;
