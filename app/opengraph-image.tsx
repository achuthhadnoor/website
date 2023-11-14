import { ImageResponse } from "next/og";
import { Roboto_Flex, Roboto_Mono } from "next/font/google";
import AchuthLogo from "@/components/achuth-logo";
// Route segment config
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });
export const runtime = "edge";
// Image metadata
export const alt = "Achuth Hadnoor";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        className={roboto_mono.className}
        style={{
          fontSize: 48,
          padding: 10,
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AchuthLogo />
        <br />
        Achuth Hadnoor <br />- Designer and Engineer
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
