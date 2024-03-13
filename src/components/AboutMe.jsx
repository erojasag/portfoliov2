import img from '../assets/ema.png';
import personIcon from '../assets/person.svg';
function AboutMe() {
  return (
    <div className="flex justify-center">
      <div className="border-primary border-t-2 pt-20 pb-20">
        <div className="max-w-sm w-full lg:max-w-full lg:flex rounded">
          <img
            src={img}
            className="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            title="emanuel snowboard"
          ></img>
          <div className="border-r border-b border-l border-primary lg:border-l-0 lg:border-t lg:border-primary rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center mb-2">
                <img src={personIcon} className="pr-2" />
                <span className="text-gray-900 font-bold text-xl">
                  Who am i?
                </span>
              </p>
              <p className="text-gray-700 text-base">
                I'm a passionate, self-taugh being, who loves to learn, love it
                that much that I learned how to snowboard on my own watching
                Youtube videos.
              </p>
              <p className="text-gray-700 text-base">
                Thrilled by the latest tech trends, I'm always looking for new
                challenges and opportunities to grow.
              </p>
              <p className="text-gray-700 text-base">
                I'm a software developer, with a strong focus on the backend,
                but I'm always looking for ways to improve my skills and learn
                new technologies.
              </p>
              <p className="text-gray-700 text-base">
                As a team player, I'm always looking for ways to help and learn
                from others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
