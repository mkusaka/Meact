export function createElement(type: string, props?: any, ...children: any[]) {
  return {
    type,
    props: {
      ...props,
      children
    }
  };
}
