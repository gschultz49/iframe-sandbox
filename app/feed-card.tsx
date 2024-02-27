/* eslint-disable @next/next/no-img-element */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/89IuzpNd0R9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import { toast } from "react-toastify";
// import { Button } from "@/components/ui/button";
import "react-toastify/dist/ReactToastify.css";

export default function Component({ width = "300px", height = "500px" }) {
  return (
    <Card className="block items-center max-w-96">
      <CardHeader>
        <div className="">
          <div className="flex space-x-2">
            <FlagIcon
              className="h-6 w-6 text-[#bd1e59]"
              onClick={() => toast("clicked on flag")}
            />
            <div>
              <CardTitle>FixDex</CardTitle>
              <p
                onClick={() => toast("clicked on follower count")}
                className="text-sm text-gray-500"
              >
                248 followers
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <img
          alt="Content preview"
          className="w-full max-w-2xl"
          height="100"
          src="/coop.jpeg"
          style={{
            aspectRatio: "320/192",
            objectFit: "cover",
          }}
          width="300"
          onClick={() => toast("clicked on image")}
        />
        <h3
          className="my-4 text-lg font-semibold leading-tight"
          onClick={() => toast("clicked on caption")}
        >
          Ten ways to improve customer productivity
        </h3>
      </CardContent>
    </Card>
  );
}

function FlagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}
