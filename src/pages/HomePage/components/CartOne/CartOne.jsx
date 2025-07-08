import { NoutCursiyorPink } from "../../../../assets/icons/NoutCursiyorPink";
import { NoutCurYellow } from "../../../../assets/icons/NoutCurYellow";
import nout from "../../../../assets/images/nout.png";
import carta from "../../../../assets/icons/carta_cordenata.svg";
import { CustomButton } from "../../../../components/Button/CustomButton";

export const CartOne = () => {
  return (
    <div>
      <div className="mt-8 relative rounded-[10px]">
        <NoutCursiyorPink
          className={"absolute rounded-[40px]  top-10 left-11 "}
        />
        <img className="rounded-[10px]" src={nout} alt="" />
        <h2 className="font-bold text-xl leading-[120%] tracking-[-1%] absolute bottom-4 left-5">
          I prioritize client <br />
          collaboration, fostering <br />
          open communication
        </h2>
        <NoutCurYellow
          className={"absolute rounded-[40px]  bottom-[80px] right-11 "}
        />
      </div>
      <br />

      <div className="  border-gray-800 relotive  w-[398] h-[195px] opacity-100 rounded-[10px] border-[0.76px] left-4 top-[900px]">
        <h2 className="font-bold text-xl leading-[120%] tracking-[-1%] pl-6 pt-4 ">
          I’m very flexible with time zone communications
        </h2>
        <img className="mt-3" src={carta} alt="" />
        <CustomButton
          className={
            "cartBtn  w-[43px] h-[24px] opacity-100 absolute rounded-[8.4px]  border-[0.76px] bottom-[90px] left-9 "
          }
          title={"USA"}
        ></CustomButton>
        <CustomButton
          className={
            "cartBtn  w-[43px] h-[24px] opacity-100 absolute rounded-[8.4px]  border-[0.76px] bottom-12 left-[130px] "
          }
          title={"Europa"}
        ></CustomButton>
        <CustomButton 
          className={
            "cartBtn  w-[43px] h-[24px] opacity-100 absolute rounded-[8.4px]  border-[0.76px] bottom-[85px] left-[200px] "
          }
          title={"Asia"}
        ></CustomButton>
      </div>
    </div>
  );
};
