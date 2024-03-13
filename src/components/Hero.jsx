import Logo from './Logo';

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Logo />
      <span className="uppercase text-secondary bg-primary px-4 py-1 mb-10 font-medium rounded">
        Software developer
      </span>
      <div className="flex flex-row justify-between items-center pb-10">
        <ul className="text-center">
          <li>
            Email:
            <a className="text-primary" href="mailto: emanuel@emanuelrojas.com">
              {' '}
              emanuel@emanuelrojas.com
            </a>
          </li>
          <li>
            Mobile: <span className="text-primary">+506 8866-7456</span>
          </li>
          <li className="text-primary">Alajuela, Costa Rica</li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
