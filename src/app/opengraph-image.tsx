import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function getLogoDataUrl() {
  const logoPath = join(process.cwd(), "public", "images", "aany_logo_og.png");
  const image = readFileSync(logoPath);
  const encoded = image.toString("base64");

  return `data:image/png;base64,${encoded}`;
}

export default function Image() {
  const logoDataUrl = getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f5f5f7",
          color: "#171217",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              fontSize: 56,
              fontWeight: 900,
              letterSpacing: "-0.03em",
            }}
          >
            <img
              src={logoDataUrl}
              width={74}
              height={74}
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
            <span>any</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                maxWidth: 900,
              }}
            >
              Student-first services marketplace
            </div>

            <div
              style={{
                marginTop: 28,
                fontSize: 30,
                lineHeight: 1.45,
                color: "rgba(0,0,0,0.62)",
                maxWidth: 880,
              }}
            >
              Discover useful services from students and trusted providers.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}