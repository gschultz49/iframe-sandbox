/**
 * v0 by Vercel.
 * @see https://v0.dev/t/89IuzpNd0R9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

export default function Component({ width = "300px", height = "350px" }) {
  return (
    <Card style={{ width, height }}>
      <CardHeader>
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <FlagIcon className="h-6 w-6 text-[#bd1e59]" />
            <div>
              <CardTitle>FixDex</CardTitle>
              <p className="text-sm text-gray-500">248 followers</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <img
          alt="Content preview"
          className="w-full"
          height="100"
          src="/coop.jpeg"
          style={{
            aspectRatio: "320/192",
            objectFit: "cover",
          }}
          width="300"
        />
        <h3 className="my-4 text-lg font-semibold leading-tight">
          Ten ways to improve customer productivity
        </h3>
      </CardContent>
    </Card>
  );
}

function FlagIcon(props) {
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
