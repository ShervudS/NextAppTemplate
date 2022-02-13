const path = require('path');
const loaderUtils = require('loader-utils');
const nextTranslate = require('next-translate');

const hashOnlyIdent = (context, _, exportName) =>
    loaderUtils
        .getHashDigest(
            Buffer.from(
                `filePath:${path
                    .relative(context.rootContext, context.resourcePath)
                    .replace(/\\+/g, '/')}#className:${exportName}`
            ),
            'md4',
            'base64',
            5
        )
        .replace(/^(-?\d|--)/, '_$1');

module.exports = nextTranslate({
    webpack(config, { dev }) {
        const rules = config.module.rules
            .find((rule) => typeof rule.oneOf === 'object')
            .oneOf.filter((rule) => Array.isArray(rule.use));

        // == hash for classNames
        if (!dev)
            rules.forEach((rule) => {
                rule.use.forEach((moduleLoader) => {
                    if (
                        moduleLoader.loader?.includes('css-loader') &&
                        !moduleLoader.loader?.includes('postcss-loader')
                    )
                        moduleLoader.options.modules.getLocalIdent =
                            hashOnlyIdent;
                });
            });

        // == svg support
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module.rules.map((rule) => {
            if (rule.test !== undefined && rule.test.source.includes('|svg|')) {
                rule.test = new RegExp(rule.test.source.replace('|svg|', '|'));
            }
        });

        return config;
    },

    // == locales
    i18n: {
        locales: ['ru', 'en'],
        defaultLocale: 'ru',
        localeDetection: false,
    },

    trailingSlash: true,
});
