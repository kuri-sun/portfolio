import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";

type ProjectCardProps = {
  title: string;
  description?: string;
  href: string;
  image?: string;
};

export default function ProjectCard({
  title,
  description,
  href,
  image,
}: ProjectCardProps) {
  return (
    <PinContainer title={href} href={href}>
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem]">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          {title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-gray-300">{description}</span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-white via-gray-500 to-blue-500">
          {image && (
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              className="opacity-50"
            />
          )}
        </div>
      </div>
    </PinContainer>
  );
}
