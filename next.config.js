/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    customKey: 'my-value',
  },
  images: {
      domains: ["rickandmortyapi.com"],
      loader: "custom",
      path: "/"
  },
}