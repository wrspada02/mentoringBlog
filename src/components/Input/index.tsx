import { Post } from "../../interfaces";

interface InputProps {
  inputObject: {
    label: string;
    value: string;
  };
  setItem: (item: Post) => void;
  item: Post;
}

export function Input({ item, setItem, inputObject }: InputProps) {
  return (
    <>
      <label>{inputObject.label}</label>
      <input
        type={'text'}
        onChange={(e) => setItem({ ...item, author: e.target.value })}
        value={inputObject.value}
      />
    </>
  );
}