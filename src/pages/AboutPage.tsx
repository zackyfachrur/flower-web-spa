import NavigationMenu from "../components/Navigation.tsx";

const About = (): React.ReactNode => {
  return (
    <>
      <NavigationMenu />
      <h1 className="text-2xl font-bold text-red-500">Hello World!</h1>
    </>
  );
};

export default About;
