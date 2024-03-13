import instagram from '../assets/instagram.svg';
import x from '../assets/x.svg';
import Github from '../assets/github.svg';
function Footer() {
  return (
    <footer className="w-full justify-center items-center flex flex-col md:flex-row md:justify-between border-t-2 border-primary pt-10 pb-20">
      <span className='text-primary text-center'>
        © 2024 Emanuel Rojas{' '}
        <span aria-hidden className="hidden md:inline">
          |
        </span>
        <br aria-hidden className="block md:hidden" /> Todos los derechos
        reservados.
      </span>

      <ul className="flex flex-row gap-x-4 items-center">
        <li>
          <a
            href="https://instagram.com/slopecoder_ema"
            target="_blank"
            className="hover:scale-125 hover:opacity-70 transition inline-block"
          >
            <img src={instagram} alt="Logo instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/merakiema_dev"
            target="_blank"
            rel="noopener"
            className="hover:scale-125 hover:opacity-70 transition inline-block"
          >
            <img src={x} alt="Logo X" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/erojasag"
            target="_blank"
            rel="noopener"
            className="hover:scale-125 hover:opacity-70 transition inline-block"
          >
            <img src={Github} alt="Logo Github" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
