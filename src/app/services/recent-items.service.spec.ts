import { RecentItemsService } from 'src/app/services/recent-items.service';
import { TestBed } from '@angular/core/testing';

describe('RecentItemsService', () => {
  let service: RecentItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentItemsService);
    service.recentItems$.next([2, 1]);
  });

  it('should add an item to the recent items service', () => {
    service.addNewRecentItem(3);

    expect(service.recentItems$.getValue().length).toBe(3);
  });
  it('should only contain 3 items and expect the last emited value to be the first', () => {
    service.addNewRecentItem(3);
    service.addNewRecentItem(4);

    expect(service.recentItems$.getValue()).toEqual([4, 3, 2]);
  });
});
