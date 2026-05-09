const basePath = import.meta.env.BASE_URL;

export function withBasePath(path: string): string {
  if (/^(?:[a-z][a-z\d+.-]*:|#)/i.test(path)) {
    return path;
  }

  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const normalizedPath = path.replace(/^\//, '');

  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}
