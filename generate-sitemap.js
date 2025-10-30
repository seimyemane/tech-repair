import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const sitemap = new SitemapStream({ hostname: "https://www.thedevicelab.ca" });

sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
sitemap.write({ url: "/division/web", changefreq: "weekly", priority: 0.9 });
sitemap.write({ url: "/division/repair", changefreq: "weekly", priority: 0.9 });
sitemap.end();

streamToPromise(sitemap).then((data) =>
  createWriteStream("./public/sitemap.xml").write(data)
);
