import About from "@/components/landing/About";
import ContactUs from "@/components/landing/ContactUs";
import Landing from "@/components/landing/Landing";
import SignUp from "@/components/landing/SignUp";

export default function Home() {
  let authorized = false;

  return (
    <main>
      <Landing />
      <About />
      <ContactUs />
      <SignUp />
    </main>
  );
}
