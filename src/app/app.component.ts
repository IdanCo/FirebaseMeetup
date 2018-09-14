import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, QueryFn } from '../../node_modules/@angular/fire/firestore';
import { Observable } from '../../node_modules/rxjs';

interface Message {
  message: string;
  date?: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    const queryFn: QueryFn = ref => ref.orderBy('date', 'desc');
    this.messages$ = this.db.collection<Message>('messages', queryFn).valueChanges();
  }

  onButtonClicked(message: string) {
    this.db.collection<Message>('messages').add({
      message,
      date: new Date()
    }).then(docRef => console.log('Document written with ID: ', docRef.id))
      .catch(error => console.error('Error adding document: ', error));
  }
}
