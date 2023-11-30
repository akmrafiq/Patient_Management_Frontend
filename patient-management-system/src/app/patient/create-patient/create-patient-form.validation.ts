import { Validators } from '@angular/forms';

export const validationMessages = {
    email: {
        required: 'Not a valid email',
        email: 'Not a valid email'
    },
    name: {
        required: 'Name is required'
    }
};

export const formErrors = {
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
};

export const validationConfig = {
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    name: ['', [Validators.required]]
};
