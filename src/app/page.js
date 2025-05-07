
import Bread from  './components/Bread'
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">

                         {/*  header */}  
  <div className="flex   justify-center ">
  </div>  
  
                          {/*   header */}  
      {/* logo */}
      <div className="relative h-full w-full select-none">
  <Bread/>

        <Image
          unoptimized
          className="w-full items-center"
          alt="Pattern Light"
          src="/s.svg"
          width={803}
          height={774}
        />
      </div>
      {/* //logo// */}

      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-12">
      <div className="relative flex w-full flex-col items-start gap-6 self-stretch">
        </div>

        {/* footer */}
        <div className="relative flex w-full flex-col items-start gap-6 self-stretch">
          <Image
            unoptimized
            className="w-full items-center"
            alt="Pattern Light"
            src="/fo.png"
            width={803}
            height={774}
          />
        </div>
        <Image
          unoptimized
          className="w-full items-center"
          alt="Pattern Light"
          src="/s.svg"
          width={803}
          height={774}
        />
        {/* //footer// */}
      </div>
    </main>

  );
}
