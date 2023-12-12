import { useState } from "react";

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const BulletTextArea = (props: Props) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    let modifiedValue = inputValue;

    const inputEvent = event.nativeEvent as InputEvent;

    if (inputEvent.inputType === "insertFromPaste") {
      modifiedValue = addBulletsOnPaste(inputValue);
    } else {
      const lines = inputValue.split("\n");
      const lastLine = lines[lines.length - 1];

      if (inputEvent.inputType === "insertLineBreak") {
        if (lastLine === "") {
          lines[lines.length - 1] = "• ";
        } else {
          lines.push("• ");
        }
      } else if (lines.length === 1 && lastLine && !lastLine.startsWith("• ")) {
        lines[0] = "• " + lines[0];
      } else if (
        lines.length > 1 &&
        lastLine === "" &&
        lines[lines.length - 2] === "• "
      ) {
        lines.splice(lines.length - 2, 1);
      } else if (lines.length === 1 && lastLine === "• ") {
        lines[0] = "";
      }

      modifiedValue = lines.join("\n");
    }

    setValue(modifiedValue);
    props.onChange(modifiedValue);
  };

  const addBulletsOnPaste = (text: string): string => {
    return text
      .split("\n")
      .map((line) => (line.startsWith("• ") ? line : "• " + line))
      .join("\n");
  };

  return (
    <div>
      <textarea
        className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
        rows={3}
        placeholder={props.placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default BulletTextArea;
