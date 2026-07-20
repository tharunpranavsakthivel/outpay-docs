import { ImageResponse } from "next/og";

export const alt = "Outpay Docs — USDC payments on Base";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#10221d",
        color: "#f4fff9",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
        <span style={{ color: "#8de7bc" }}>outpay</span>
        <span style={{ color: "#b7c8c0", marginLeft: 12 }}>docs</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ color: "#8de7bc", fontSize: 28 }}>
          USDC payments on Base
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: -2 }}>
          Build with Outpay.
        </div>
        <div style={{ color: "#b7c8c0", fontSize: 28 }}>
          Hosted checkout · Payment API · Signed webhooks
        </div>
      </div>
      <div style={{ color: "#78928a", fontSize: 22 }}>Outpay v0.1 Beta</div>
    </div>,
    size,
  );
}
