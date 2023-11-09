let timeoutID: NodeJS.Timeout;

type DebouncedButtonProps = {
  onClick: Function;
  children: React.ReactNode;
};

function DebouncedButton({ onClick, children }: DebouncedButtonProps) {
  return (
    <button
      onClick={() => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton onClick={() => alert("Spaceship launched!")}>
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Soup boiled!")}>
        Boil the soup
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Lullaby sung!")}>
        Sing a lullaby
      </DebouncedButton>
    </>
  );
}
