import React from 'react';

import BrowserWindow from './index';

// Quick and dirty component, to improve later if needed
export default function IframeWindow({url}: {url: string}): JSX.Element {
  const origin = window.location.origin
  let urlStr
  if (url.includes("http") || url.includes("https")) {
    urlStr = url
  } else {
    if (origin === "https://winddancerubi.github.io") {
      urlStr = "https://winddancerubi.github.io" + url
    } else {
      urlStr = "https://winddancer.gitee.io" + url
    }
  }
  return (
    <div style={{padding: 10}}>
      <BrowserWindow
        url={urlStr}
        style={{
          minWidth: 'min(100%,45vw)',
          width: 800,
          maxWidth: '100%',
          overflow: 'hidden',
        }}
        bodyStyle={{padding: 0}}>
        <iframe
          src={urlStr}
          title={urlStr}
          style={{display: 'block', width: '100%', height: 300}}
        />
      </BrowserWindow>
    </div>
  );
}