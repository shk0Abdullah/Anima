import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-gray-50 p-8">
        <h2 className="text-2xl font-semibold">Home screen content</h2>
        <p>Anything you want on the home page…</p>
      </div>
    </>
  );
}
