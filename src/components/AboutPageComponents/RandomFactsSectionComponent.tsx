import luffy from "../../assets/gif/luffy.gif";

export default function RandomFactsSectionComponent() {
  return (
    <section
      id="home"
      className="w-full flex justify-center shadow-inner bg-main-background-light dark:bg-main-background-dark text-secondary-text-light dark:text-secondary-text-dark transition-colors duration-300 overflow-x-hidden"
    >
      <div className="min-w-full 2xl:min-w-[1300px] flex flex-col-reverse md:flex-row justify-center items-center p-20">
        <div className="w-full md:w-[500px] flex justify-center">
          <img
            src={luffy}
            alt="luffy"
            className="transition-transform duration-300"
          />
        </div>
        <div className="w-full md:w-[500px]">
          <h1 className="text-[25px] font-bold text-primary-color-light dark:text-primary-color-dark transition-colors duration-300">
            Random Facts
          </h1>
          <p className="text-justify mt-5 text-[20px] text-primary-text-light dark:text-primary-text-dark transition-colors duration-300">
            In the realm of code, I wield my might, sipping protein, powering
            through the night. Lines of logic, algorithms gleam, in the world of
            programming, I chase my dream.
            <br />
            <br />
            Anime's my refuge, my sweet escape, a realm of stories, where
            characters drape. From leaf villages to worlds untold, each episode
            a journey, a tale to behold.
            <br />
            <br />
            In the gym's embrace, I sculpt and train, a healthy body, my
            enduring gain. Lifting weights, pushing through the strain, in
            fitness' rhythm, I find my refrain.
          </p>
        </div>
      </div>
    </section>
  );
}
