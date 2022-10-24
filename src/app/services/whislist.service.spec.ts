import { WhislistService } from 'src/app/services/whislist.service';
import { TestBed } from '@angular/core/testing';

describe('WhislistService', () => {
  let service: WhislistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhislistService);
    service.whistlist$.next([1, 2, 3]);
  });

  it('should determine if there is an item with the id in the subject', () => {
    expect(service.isInTheList(1)).toBeTruthy();
  });
  it('should remove an item from list if it is already there', () => {
    service.addOrRemoveFromList(1);
    expect(service.whistlist$.getValue().length).toBe(2);
  });
  it('should add an item to the list if it isnt already there', () => {
    service.addOrRemoveFromList(12);
    expect(service.whistlist$.getValue().length).toBe(4);
  });
});
