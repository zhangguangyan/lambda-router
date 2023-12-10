import { match, pathToRegexp } from 'path-to-regexp';

export function createApi() {
  const routes: Record<string, any> = [];

  const obj: Record<string, any> = {
    createHandler() {
      return (event: any, context: any) => {
        const httpMethod = event.httpMethod;
        const path = event.path;
        const route = routes.find((it: any) => {
          return it.regex.test(path) && it.method === httpMethod;
        });

        if (route) {
          const result = route.match(path);
          result.params = result.params || {};
          route.cb(event, context, result.params);
        }
      };
    },
  };

  ['get', 'post', 'put', 'delete'].forEach((method) => {
    obj[method] = (pattern: string, cb: any) => {
      addRoute(method.toUpperCase(), pattern, cb);
    };
  });

  return obj;

  function addRoute(method: string, pattern: string, cb: any) {
    routes.push({
      method,
      pattern: pattern,
      match: match(pattern),
      regex: pathToRegexp(pattern),
      cb,
    });
  }
}
