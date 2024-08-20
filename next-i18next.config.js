/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    locales: ["vn", "en"],
    defaultLocale: "en",
    localeDetection: false,
    backend: {
        loadPath: `${process.env.INTERNAL_API_URI}/api/locales/{{lng}}/{{ns}}`
    },
  }
};
