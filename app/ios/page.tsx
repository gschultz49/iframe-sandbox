import Image from "next/image";

export default function Ios() {
  return (
    <html lang="en">
      <body>
        <main className="w-[390px]">
          <p>400px iframe render width, source width 300px</p>
          <div className="border-2 border-green-500 p-4 flex">
            <iframe
              src="/iframe?width=300px"
              className="flex w-[400px] h-[450px]"
            />
          </div>
          <p>200px iframe render width, source width 300px</p>
          <div className="border-2 border-green-500 p-4 flex">
            <iframe
              src="/iframe?width=300px"
              className="flex w-[200px] h-[450px]"
            />
          </div>

          <p>400px iframe render width, source width 150px</p>
          <div className="border-2 border-green-500 p-4 flex">
            <iframe
              src="/iframe?width=150px"
              className="flex w-[400px] h-[450px]"
            />
          </div>
          <p>200px iframe render width, source width 150px</p>
          <div className="border-2 border-green-500 p-4 flex">
            <iframe
              src="/iframe?width=150px"
              className="flex w-[200px] h-[450px]"
            />
          </div>
        </main>
      </body>
    </html>
  );
}
