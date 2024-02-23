import About from "@/components/landing/About";
import Landing from "@/components/landing/Landing";
import SignUp from "@/components/landing/SignUp";
import Footer from "@/components/footer/Footer";

export default function Home() {
  let authorized = true;

  return (
    <main>
      {authorized ? (
        <>
          <Landing />
          <About />
          <SignUp />
          <Footer />
        </>
      ) : (
        <>
          <Landing />
          <About />
          <SignUp />
          <Footer />
        </>
      )}
    </main>
  );
}
