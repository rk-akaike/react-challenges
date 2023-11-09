import { useEffect, useRef } from "react";

interface MyInputProps {
  shouldFocus: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MyInput({
  shouldFocus,
  value,
  onChange,
}: MyInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  // TODO: call focus() only if shouldFocus is true.
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return <input ref={ref} value={value} onChange={onChange} />;
}
