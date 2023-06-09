import React, { type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
  minHeight?: number;
  url: string;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
}

export default function BrowserWindow({
  children,
  minHeight,
  url = "http://localhost:3000",
  style,
  bodyStyle,
}: Props): JSX.Element {
  const openWindow = () => {
    window.open(url, "_blank");
  };
  return (
    <div className={styles.browserWindow} style={{ ...style, minHeight }}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: "#f25f58" }} />
          <span className={styles.dot} style={{ background: "#fbbe3c" }} />
          <span className={styles.dot} style={{ background: "#58cb42" }} />
        </div>
        <div
          className={clsx(styles.browserWindowAddressBar, "text--truncate")}
          onClick={openWindow}
        >
          {url}
        </div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}

// Quick and dirty component, to improve later if needed
export function IframeWindow({ url }: { url: string }): JSX.Element {
  let urlStr;
  if (url.includes("http") || url.includes("https")) {
    urlStr = url;
  } else {
    urlStr = "https://winddancer.gitee.io" + url;
  }
  return (
    <div>
      <BrowserWindow
        url={urlStr}
        // style={{minWidth: '40vw', maxWidth: "100%"}}
        bodyStyle={{ padding: 0 }}
      >
        <iframe
          src={urlStr}
          title={urlStr}
          style={{ width: "100%", height: 500 }}
        />
      </BrowserWindow>
    </div>
  );
}
