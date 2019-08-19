import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Feedback } from '../feedback.model';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: true}) feedbackForm: NgForm;
  feedbackModel: Feedback;
  submitted = false;
  formSubscription: Subscription;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;  
    this.feedbackModel = new Feedback(this.feedbackForm.value.userData.firstname, this.feedbackForm.value.userData.lastname, 
      this.feedbackForm.value.userData.email, this.feedbackForm.value.feedback);
    this.formSubscription = this.http.post("https://pokemon-2fd56.firebaseio.com/feedback.json", this.feedbackModel).subscribe( res=> {
      console.log(res);
    });
    this.feedbackForm.reset();
  }
  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe(); 
    }
  }
}
