import Image, { StaticImageData } from "next/image";

interface CardProps {
  imagen: StaticImageData;
  titulo: string;
  parrafo: string;
  segundoTitulo: string;
  listaNombres: string[];
}

export default function Card({
  imagen,
  titulo,
  parrafo,
  segundoTitulo,
  listaNombres,
}: CardProps) {
  return (
    <div className="text-center shadow-xl p-10 rounded-xl my-10">
      <Image
        src={imagen}
        width={100}
        height={100}
        alt="imagen"
        className="m-auto"
      />
      <h3 className="text-lg font-medium pt-8 pb-2">{titulo}</h3>
      <p className="py-2">{parrafo}</p>
      <h4 className="py-4 text-teal-600">{segundoTitulo}</h4>
      {listaNombres.map((nombre, index) => (
        <p key={index} className="text-gray-800 py-1">{nombre}</p>
      ))}
    </div>
  );
}
