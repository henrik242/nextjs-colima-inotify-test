const path = require('path');


const nextConfig = {
    distDir: 'build/next',
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
    publicRuntimeConfig: {
    },
    productionBrowserSourceMaps: true,
    transpilePackages: ['shared'],
    experimental: {
        forceSwcTransforms: true,
    },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    analyzeBrowser: true,
    analyzeServer: true,
    bundleAnalyzerConfig: {
        server: {
            analyzerMode: 'static',
            reportFilename: path.join(__dirname, 'build/next/analyze/server.html'),
        },
        browser: {
            analyzerMode: 'static',
            reportFilename: path.join(__dirname, 'build/next/analyze/client.html'),
        },
    },
});

module.exports = withBundleAnalyzer(nextConfig);
