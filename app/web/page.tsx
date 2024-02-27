/* eslint-disable react/jsx-key */
export default function Home() {
  const tests = [
    {
      iframeRenderWidth: 400,
      sourceWidth: "300px",
      result: "iframe renders to full source size, looks as source expected",
      borderColor: "border-blue-500",
      sourceColor: "border-orange-500",
    },
    {
      iframeRenderWidth: 300,
      sourceWidth: "300px",
      result: "iframe renders to full source size, looks as source expected",
      borderColor: "border-blue-500",
      sourceColor: "border-orange-500",
    },
    {
      iframeRenderWidth: 100,
      sourceWidth: "300px",
      borderColor: "border-blue-500",
      sourceColor: "border-orange-500",
      result:
        "Clipping or horizontal scrolling. This tells us the context in which the iframe is rendered is critical",
    },
    {
      iframeRenderWidth: 400,
      sourceWidth: "150px",

      borderColor: "border-blue-500",
      sourceColor: "border-orange-500",
      result: "source component compresses, does not stretch to render size",
    },
    {
      iframeRenderWidth: 200,
      sourceWidth: "150px",
      result: "source component compresses, does not flex to container",
      borderColor: "border-blue-500",
      sourceColor: "border-orange-500",
    },
    {
      iframeRenderWidth: 500,
      sourceWidth: "max size",
      result: "biggly",
      borderColor: "border-blue-500",
      sourceColor: "border-orange-500",
    },
  ];
  return (
    <html lang="en">
      <body>
        <main>
          <p>click on the components in the card to see emitted events</p>
          {tests.map((test) => {
            return (
              <div key={test.result} className="my-10">
                <p>Render: {`${test.iframeRenderWidth}`}</p>
                <p>Source: {`${test.sourceWidth}`}</p>
                <p>
                  <b>Result:</b> {`${test.result}`}
                </p>
                <div className={`border-2 ${test.borderColor} p-4 flex`}>
                  <div className="flex justify-evenly w-full">
                    <iframe
                      src={`/iframe?width=${test.sourceWidth}`}
                      className={`border-2 ${test.sourceColor} w-full max-w-96 h-[500px]`}
                      style={{ width: test.iframeRenderWidth, height: 450 }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </body>
    </html>
  );
}
