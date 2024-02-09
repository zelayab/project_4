import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly USERS_COLLECTION = 'users';

  constructor(private db: AngularFireDatabase) {}

  createUser(user: User): Promise<void> {
    const id = this.db.createPushId();
    return this.db.object(`${this.USERS_COLLECTION}/${id}`).set({...user, id});
  }

  getUserById(id: string): Observable<User | null> {
    return this.db.object<User>(`${this.USERS_COLLECTION}/${id}`).valueChanges();
  }

  updateUser(user: User): Promise<void> {
    return this.db.object(`${this.USERS_COLLECTION}/${user.id}`).update(user);
  }

  deleteUser(id: string): Promise<void> {
    return this.db.object(`${this.USERS_COLLECTION}/${id}`).remove();
  }

  getAllUsers(): Observable<User[]> {
    return this.db.list<User>(this.USERS_COLLECTION).valueChanges().pipe(
      map(users => users.map(user => ({...user, id: user.id})))
    );
  }
}
