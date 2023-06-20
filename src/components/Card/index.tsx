import Image from "next/image";

interface CardProps {
  src?: any;
  title?: string;
  desc?: string;
}

const Card = ({ src, title, desc }: CardProps) => {
  return (
    <div className="hover:bg-zinc-200 h-60 w-96 hover:scale-150 hover:z-30 ease-in duration-150 z-20 rounded-xl p-4 flex items-center group flex-col text-lg">
      <Image src={src} alt="project image" className="rounded-md pb-2" />
      <div className="font-poppins text-zinc-900 font-semibold">{title}</div>
      <div className="font-poppins text-zinc-900 font-medium invisible group-hover:visible ease-in duration-150 text-sm flex-wrap text-ellipsis overflow-hidden">
        {desc}
      </div>
    </div>
  );
};

export default Card;
