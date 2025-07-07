import { NoutCursiyorPink } from "../../assets/icons/NoutCursiyorPink";
import { NoutCurYellow } from "../../assets/icons/NoutCurYellow";
import nout from "../../assets/images/nout.png";

export const HomePage = () => {
  return (
    <div className="containerr">
      <div className="mt-8 relative">
        <NoutCursiyorPink
          className={"absolute rounded-[40px]  top-10 left-11 "}
        />
        <img src={nout} alt="" />
        <h2 className="font-bold text-xl leading-[120%] tracking-[-1%] absolute bottom-4 left-5">
          I prioritize client <br />
          collaboration, fostering <br />
          open communication
        </h2>
        <NoutCurYellow className={"absolute rounded-[40px]  bottom-[80px] right-11 "} />
      </div>
    </div>
  );
};
