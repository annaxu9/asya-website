import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-center">Hi Asya! This is the Home Page or Page 1</h1>
      <Image
        src={"/silly.png"}
        height={50}
        width={50}
        alt="silly image"
      />
    </div>
  );
}
