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

    // Create a custom event object to mimic a regular input event
    const customEvent = {
      target: {
        id: props.id, // Ensure 'id' prop is passed to TextArea
        value: modifiedValue,
      },
    };

    props.onChange(customEvent);
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
        className="block w-full"
        rows={3}
        placeholder={props.placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextArea;
