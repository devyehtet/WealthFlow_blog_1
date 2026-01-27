export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}
