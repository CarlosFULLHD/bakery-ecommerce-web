/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./cloudfront-loader.js", // Asegúrate de que esta ruta apunte al archivo del loader personalizado correctamente
  },
};

module.exports = nextConfig;
