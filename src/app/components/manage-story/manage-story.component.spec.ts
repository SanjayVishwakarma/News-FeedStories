import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ManageStoryComponent } from './manage-story.component';
import { ManageStoryService } from '../../services/manage-story.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HackerNewsStory, LoadStoriesRequest } from '../../Models/Story';

describe('ManageStoryComponent', () => {
  let component: ManageStoryComponent;
  let fixture: ComponentFixture<ManageStoryComponent>;
  let manageStoryService: ManageStoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageStoryComponent],
      imports: [HttpClientTestingModule],
      providers: [ManageStoryService]  // Note: ManageStoryService is provided here
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStoryComponent);
    component = fixture.componentInstance;
    manageStoryService = TestBed.inject(ManageStoryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get method during ngOnInit', () => {
    spyOn(component, 'get');
    component.ngOnInit();
    expect(component.get).toHaveBeenCalledWith("", component.pageNumber, component.pageSize);
  });

  it('should call get method with search term when search is triggered', () => {
    spyOn(component, 'get');
    const searchTerm = 'angular';
    const inputElement = fixture.nativeElement.querySelector('input'); // Assuming there's an input for search
    inputElement.value = searchTerm;
    inputElement.dispatchEvent(new KeyboardEvent('keyup'));
    fixture.detectChanges();
    expect(component.get).toHaveBeenCalledWith(searchTerm, 1, 0);
  });

  it('should update pageNumber and call get method on onPageChange', () => {
    spyOn(component, 'get');
    const newPageNumber = 2;
    component.onPageChange(newPageNumber);
    expect(component.pageNumber).toEqual(newPageNumber);
    expect(component.get).toHaveBeenCalledWith("", newPageNumber, component.pageSize);
  });

  it('should fetch hacker news stories on calling get', fakeAsync(() => {
    const mockStories: HackerNewsStory[] = [
      { by: "BLKNSLVR", title: 'CrowdStrike Update: Windows Bluescreen and Boot Loops', url: 'https://old.reddit.com/r/crowdstrike/comments/1e6vmkf/bsod_error_in_latest_crowdstrike_update/' },
      { by: 'speckx', title: 'Panic at the Job Market', url: 'https://matt.sh/panic-at-the-job-market'}
    ];
    const loadStoriesRequest: LoadStoriesRequest = {
      SearchText: '',
      PageNumber: component.pageNumber,
      PageSize: component.pageSize
    };
    spyOn(manageStoryService, 'getStories').and.returnValue(of(mockStories));

    component.get(loadStoriesRequest.SearchText, loadStoriesRequest.PageNumber, loadStoriesRequest.PageSize);
    tick();  // Simulate the passage of time until all pending asynchronous activities complete

    expect(component.hackerNewsStories).toEqual(mockStories);
  }));

  // Additional test cases can be added for edge cases, error handling, etc.
});
