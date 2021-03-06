declare module "*.less" {
  const content: { [className: string]: string }
  export default content
}

declare module "*.css" {
  const content: { [className: string]: string }
  export default content
}

declare module "*.svg" {
  const content: any
  export default content
}

declare module "*.woff2"
declare module "*.woff"
declare module "*.otf"
