import { Validators } from '@angular/forms';

import { ICustomField, ControlTypes } from '@models/form.models';
import { UserRoles, IUser } from '@models/user.models';

export const newUserFormConfig = (initialData: IUser): ICustomField[] => ([
  {
    id: 'first-name',
    type: 'text',
    label: 'Имя',
    placeholder: 'Введите имя',
    control: {
      type: ControlTypes.Input,
      name: 'firstName',
      initialValue: initialData.firstName,
      validators: [Validators.required, Validators.maxLength(30)]
    }
  },
  {
    id: 'last-name',
    type: 'text',
    label: 'Фамилия',
    placeholder: 'Введите фамилию',
    control: {
      type: ControlTypes.Input,
      name: 'lastName',
      initialValue: initialData.lastName,
      validators: [Validators.required, Validators.maxLength(30)]
    }
  },
  {
    id: 'educational-institution',
    type: 'text',
    label: 'Учреждение образования',
    placeholder: 'Введите учреждение образования',
    control: {
      type: ControlTypes.Input,
      name: 'educationalInstitution',
      initialValue: initialData.educationalInstitution,
      validators: [Validators.required, Validators.maxLength(50)]
    }
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Введите email',
    control: {
      type: ControlTypes.Input,
      name: 'email',
      initialValue: initialData.email,
      validators: [Validators.required, Validators.email, Validators.maxLength(30)]
    }
  },
  {
    id: 'password',
    type: 'password',
    label: 'Пароль',
    placeholder: 'Введите пароль',
    control: {
      type: ControlTypes.Input,
      name: 'password',
      initialValue: initialData.password,
      validators: [Validators.required, Validators.maxLength(30)]
    }
  },
  {
    id: 'role',
    type: 'text',
    label: 'Роль',
    placeholder: 'Выберите роль',
    control: {
      type: ControlTypes.Select,
      name: 'role',
      initialValue: initialData.role,
      values: [
        UserRoles.Student,
        UserRoles.Teacher
      ],
      validators: [Validators.required, Validators.maxLength(30)]
    }
  }
]);
