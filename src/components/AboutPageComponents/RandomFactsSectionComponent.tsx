import luffy from "../../assets/gif/luffy.gif";

export default function RandomFactsSectionComponent() {
  return (
    <section
      id="home"
      className="w-full  flex justify-center shadow-inner bg-color-three overflow-x-hidden"
    >
      <div className="min-w-full 2xl:min-w-[1300px] flex-col-reverse md:flex-row flex justify-center items-center p-20">
        <div className="w-full md:w-[500px]">
          <img src={luffy} alt="luffy" />
        </div>
        <div className="w-full md:w-[500px]">
          <h1 className="text-[25px] font-bold text-text-one">Random Facts</h1>
          <p className="text-justify mt-5 text-[20px] text-text-one">
            In the realm of code, I wield my might, Sipping protein, powering
            through the night. Lines of logic, algorithms gleam, In the world of
            programming, I chase my dream.
            <br />
            <br />
            Anime's my refuge, my sweet escape, A realm of stories, where
            characters drape. From leaf villages to worlds untold, Each episode
            a journey, a tale to behold.
            <br />
            <br />
            In the gym's embrace, I sculpt and train, A healthy body, my
            enduring gain. Lifting weights, pushing through the strain, In
            fitness' rhythm, I find my refrain.
          </p>
        </div>
      </div>
    </section>
  );
}
