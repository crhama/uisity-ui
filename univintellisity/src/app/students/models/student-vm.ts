import { GenericBrowserDomAdapter } from '@angular/platform-browser/src/browser/generic_browser_adapter';

export class StudentViewModel {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: Gender;
    departmentId: string;
    departmentName: string;
    mobile: string;
    email: string;
    admissionDate: string;
}

export enum Gender{
    Male = 1,
    Female = 2
}
