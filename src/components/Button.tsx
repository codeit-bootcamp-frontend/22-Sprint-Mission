interface ButtonProps {
  content: string;
}

export default function Button({ content }: ButtonProps) {
  return (
    <>
      <button
        type="button"
        className="px-6 py-3 rounded-lg bg-[#3692FF] text-white cursor-pointer"
      >
        {content}
      </button>
    </>
  );
}
