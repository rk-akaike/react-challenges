import { useEffect, useRef } from "react";

interface MyInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MyInput({ value, onChange }: MyInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return <input ref={ref} value={value} onChange={onChange} />;
}
