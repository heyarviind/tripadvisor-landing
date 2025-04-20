import Image from "next/image";

export default function Thumbnails({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) {
  return (
    <div className="relative rounded-lg overflow-hidden aspect-square">
      <Image
        src={imageUrl}
        alt={title}
        className="object-cover"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/60 to-transparent" />
      <h3 className="absolute bottom-2 left-4 right-4 text-[29px] font-[800] text-white line-clamp-2">
        {title}
      </h3>
    </div>
  );
}
