export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang.length === 0) return "fi";
  return "en";
}
