// GitHub Pages serves this site from a sub-path (github.io/<repo-name>/), so any
// hardcoded "/..." path in a plain <img>/<a> tag needs this prefix manually — Next's
// own <Link> and <Image> components pick up next.config.mjs's `basePath` automatically,
// but raw strings do not.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
