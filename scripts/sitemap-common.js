const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");

const getDate = new Date().toISOString();

const YOUR_AWESOME_DOMAIN = "https://www.radioqaum.com";

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

(async () => {
    const pages = await globby([
        // include
        "../pages/**/*.jsx",
        "../pages/*.jsx",
        // exclude
        "!../pages/_*.jsx"
    ]);
    const pagesSitemap = `
    ${pages
            .map(page => {
                const path = page
                    .replace("../pages/", "")
                    .replace(".jsx", "")
                    .replace(/\/index/g, "");
                const routePath = path === "index" ? "" : path;
                return `
          <url>
            <loc>${YOUR_AWESOME_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
            })
            .join("")}
  `;


    const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;
    const formattedSitemap = [formatted(generatedSitemap)];
    console.log(formattedSitemap)


    fs.writeFileSync("../public/sitemap-common.xml", formattedSitemap[0], "utf8");
})();