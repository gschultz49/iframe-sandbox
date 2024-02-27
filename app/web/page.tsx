/* eslint-disable react/jsx-key */
export default function Home() {
  const tests = [
    {
      iframeRenderWidth: 400,
      sourceWidth: 300,
      result: "iframe renders to full source size, looks as source expected",
      borderColor: "border-blue-500",
      sourceColor: "border-orange-500",
    },
    {
      iframeRenderWidth: 800,
      sourceWidth: 300,
      result: "iframe renders to full source size, looks as source expected",
      borderColor: "border-blue-500",
      sourceColor: "border-orange-500",
    },
    {
      iframeRenderWidth: 200,
      sourceWidth: 300,

      borderColor: "border-blue-500",
      sourceColor: "border-orange-500",
      result:
        "clipping. This tells us the context in which the iframe is rendered is critical",
    },
    {
      iframeRenderWidth: 400,
      sourceWidth: 150,

      borderColor: "border-blue-500",
      sourceColor: "border-orange-500",
      result:
        "source component compresses well, does not stretch to render size",
    },
    {
      iframeRenderWidth: 200,
      sourceWidth: 150,
      result: "does not flex to container",
      borderColor: "border-blue-500",
      sourceColor: "border-orange-500",
    },
  ];
  return (
    <main>
      {tests.map((test) => {
        return (
          <div key={test.result} className="my-10">
            <p>
              {`${test.iframeRenderWidth}`}px iframe render width, source width{" "}
              {`${test.sourceWidth}`}px
            </p>
            <p>
              <b>Result:</b> {`${test.result}`}
            </p>
            <div className={`border-2 ${test.borderColor} p-4 flex`}>
              <iframe
                src={`/iframe${test.sourceWidth}`}
                className={`flex border-2 ${test.sourceColor} w-[${test.iframeRenderWidth}px] h-[450px]`}
              />
            </div>
          </div>
        );
      })}
    </main>
  );
}
