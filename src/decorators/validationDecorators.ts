// validation with decorators
interface ValidationConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidationConfig = {};
// registeredValidators = {
//   course: {
//     title: ['required'],
//     price: ['positive'],
//   }
// }

const Required = (target: any, propName: string) => {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required'],
  };
};

const PositiveNumber = (target: any, propName: string) => {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive'],
  };
};

const validate = (obj: any) => {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          return (isValid = isValid && !!obj[prop]);
        case 'positive':
          return (isValid = isValid && obj[prop] > 0);
      }
    }
  }

  return isValid;
};

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector('form')!;
courseForm?.addEventListener('click', (e) => {
  e.preventDefault();
  const titleEL = document.getElementById('title') as HTMLInputElement;
  const priceEL = document.getElementById('price') as HTMLInputElement;

  const title = titleEL.value;
  const price = +priceEL.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again.');
    return;
  };
  
  console.log(createdCourse);
});
