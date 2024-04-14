export default function LoginButton({
  children = '로그인',
}: {
  children?: React.ReactNode;
}) {
  return (
    <button
      type="submit"
      className="flex h-12 w-64 select-none items-center justify-center rounded-md bg-white text-label-small font-bold text-primary"
    >
      {children}
    </button>
  );
}
