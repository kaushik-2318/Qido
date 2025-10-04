import { useEffect, useState } from "react";
import "./App.css";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { QrCodeGenerator } from "./components/QrCodeGenerator";
import { PageLoader } from "./components/PageLoader";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <>
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-gray-950">
        <AnimatedBackground />
        <QrCodeGenerator />
        <Footer />
      </div>
    </>
  );
}

export default App;
