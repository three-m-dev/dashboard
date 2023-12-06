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

    // Determine the type of change that occurred
    const inputEvent = event.nativeEvent as InputEvent;

    if (inputEvent.inputType === "insertFromPaste") {
      // Rule 4: User pasted data, bullet on every line
      modifiedValue = addBulletsOnPaste(inputValue);
    } else {
      // Other typing actions
      const lines = inputValue.split("\n");
      const lastLine = lines[lines.length - 1];

      if (inputEvent.inputType === "insertLineBreak") {
        // Rule 2: User goes to a new line and starts typing, place bullet
        if (lastLine === "") {
          lines[lines.length - 1] = "• ";
        } else {
          lines.push("• ");
        }
      } else if (lines.length === 1 && !lastLine.startsWith("• ")) {
        // Rule 1: User starts typing, place bullet
        lines[0] = "• " + lines[0];
      } else if (
        lines.length > 1 &&
        lastLine === "" &&
        lines[lines.length - 2] === "• "
      ) {
        // Rule 3: User backspaces input on bulleted line, remove bullet
        lines.splice(lines.length - 2, 1);
      }

      modifiedValue = lines.join("\n");
    }

    setValue(modifiedValue);
    props.onChange(modifiedValue);
  };

  // Add bullets on paste
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
