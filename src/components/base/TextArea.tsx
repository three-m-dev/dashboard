import { useState } from "react";

type Props = {
  id: string;
  bullets: boolean;
  placeholder: string;
  value: string;
  onChange: (event: { target: { id: string; value: string } }) => void;
};

const TextArea = (props: Props) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.bullets) {
      handleBulletTextChange(event);
    } else {
      handleNormalTextChange(event);
    }
  };

  const handleBulletTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
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
    emitChangeEvent(modifiedValue);
  };

  const handleNormalTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const modifiedValue = event.target.value;
    setValue(modifiedValue);
    emitChangeEvent(modifiedValue);
  };

  const addBulletsOnPaste = (text: string): string => {
    return text
      .split("\n")
      .map((line) => (line.startsWith("• ") ? line : "• " + line))
      .join("\n");
  };

  const emitChangeEvent = (modifiedValue: string) => {
    const customEvent = {
      target: {
        id: props.id,
        value: modifiedValue,
      },
    };

    props.onChange(customEvent);
  };

  return (
    <div>
      <textarea
        className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows={3}
        placeholder={props.placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextArea;
