import { Github, ScreenShare } from "lucide-react";

interface CardButtonProps {
  text: string;
}

const CardButton = ({ text }: CardButtonProps) => {
  return (
    <button className="border-[3px] border-purple-650 cursor-pointer w-24 hover:border-purple-400 group flex">
      <div className="px-2 py-1 text-purple-650 font-medium group-hover:text-purple-400 cursor-pointer">
        {text}
      </div>
      <div>
        {text == "Live" ? (
          <ScreenShare
            className="text-purple-650 group-hover:text-purple-400 ease-in duration-100 cursor-pointer my-2"
            size={24}
            strokeWidth={2}
          />
        ) : (
          <Github
            className="text-purple-650 group-hover:text-purple-400 ease-in duration-100 cursor-pointer my-2"
            size={24}
            strokeWidth={2}
          />
        )}
      </div>
    </button>
  );
};

export default CardButton;
