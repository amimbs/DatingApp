import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  title = 'DatingApp';
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Create an Observable out of a promise
    const data = this.http.get('https://localhost:5001/api/users')

    // Subscribe to begin listening for async result
    // Add the subscription to the subscriptions property

    this.subscriptions.add(
      data.subscribe({
        next: (response) => {
          this.users = response;
          console.log(response);
        },
        error: (err) => {

          // i think this may be an error between angular vesrions. Below is written correctly however in the dom we see 
          //and error in the soruces as if it can't interpret the .error method
          console.error('Error: ' + err.statusText);
        },
        complete: () => { console.log('Request completed'); }
      })
    )
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions when the component is destroyed
    this.subscriptions.unsubscribe();
  }
}
