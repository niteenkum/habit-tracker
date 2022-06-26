import { FiCheckCircle } from "react-icons/fi/index";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface IProps {
  color: string;
  habitTitle: string;
  habitDescription: string;
}

export default function TaskCard({
  color,
  habitTitle,
  habitDescription,
}: IProps) {
  const style = {
    color: color,
  };
  return (
    <div className="flex items-center gap-5 mt-2">
      <div className="flex ">
        {" "}
        <FiCheckCircle className="text-2xl" style={style} />
        <IoMdCloseCircleOutline className="text-2xl ml-2" style={style} />
      </div>

      <div className="flex flex-col">
        <span className="text-base font-bold text-black">{habitTitle}</span>
        <span className="text-xs font-normal text-slate-300">
          {habitDescription}
        </span>
      </div>
    </div>
  );
}
