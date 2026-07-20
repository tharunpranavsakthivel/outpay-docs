import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            className="outpay-nav-logo outpay-nav-logo-light"
            src="/logo/light-32.png"
            alt=""
            width={22}
            height={22}
            aria-hidden="true"
          />
          <Image
            className="outpay-nav-logo outpay-nav-logo-dark"
            src="/logo/dark-32.png"
            alt=""
            width={22}
            height={22}
            aria-hidden="true"
          />
          <span>Outpay</span>
          <span className="outpay-nav-label">Docs</span>
        </>
      ),
    },
    links: [{ text: "Platform status", url: "/docs/platform/system-status" }],
  };
}
