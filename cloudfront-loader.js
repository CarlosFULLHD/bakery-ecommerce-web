// cloudfront-loader.js
export default function cloudfrontLoader({ src, width, quality }) {
  const qualityParam = quality ? `&q=${quality}` : "";
  return `https://d1kdkr2pswehq6.cloudfront.net/${src}?w=${width}${qualityParam}`;
}
