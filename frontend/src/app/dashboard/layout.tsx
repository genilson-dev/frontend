import Header from "./components/header/page";
export default function DashoardLayut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1> <Header /> </h1>
      {children}
    </>
  );
}
