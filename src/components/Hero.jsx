import Logo from './Logo';

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Logo />
      <span className="uppercase text-secondary bg-primary px-4 py-1 mb-20 font-medium rounded">
        Software developer
      </span>
    </section>
  );
}

export default Hero;
