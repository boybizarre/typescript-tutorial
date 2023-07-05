
  // Bind decorator
  export const Bind = (
    _target: any,
    _propName: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod: Function = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    // console.log(originalMethod);
    return adjustedDescriptor;
  };
