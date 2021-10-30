import componentTheme from "./components/theme.json";

// Private
const mergeDeep: any = (target: any, ...sources: any) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(target, {
            [key]: {},
          });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key],
        });
      }
    }
  }

  return mergeDeep(target, ...sources);
};

// public
export const getTheme = (props: any) =>
  mergeDeep(componentTheme, props.theme);

export const isEmpty = (obj: object) =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;

const isObject = (item: any) => {
  return item && typeof item === "object" && !Array.isArray(item);
};
