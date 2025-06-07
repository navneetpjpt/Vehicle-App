/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    serverComponentsHmrCache: false, // defaults to true
  },
  images: {
    domains: ['zdhtpegfmvrkmdadrnhk.supabase.co'],
  },
    async headers(){
        return [
            {
                source: "/embed",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "frame-src 'self'  https://vehiql-waitlistpages.created.app;",
                    },
                ]
            }
        ]
    }
};

export default nextConfig;
