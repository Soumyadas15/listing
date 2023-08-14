/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental : {
        appDir: false,
    },
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]
    }
}
module.exports = nextConfig
