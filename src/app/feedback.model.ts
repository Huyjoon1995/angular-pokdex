export class Feedback {
    firstname: string;
    lastname: string;
    email: string;
    feedback: string;
    constructor(firstname: string, lastname: string, email: string, feedback: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.feedback = feedback;
    }
}