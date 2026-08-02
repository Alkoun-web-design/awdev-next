import Hero from "./Hero";
import AboutMe from "./AboutMe"

export default function About() {
  return (
    <>
      <h1 className='text-4xl grid col-start-2 col-end-12'>About Awdev</h1>
      <Hero />
      <AboutMe />
    </>
  );
}