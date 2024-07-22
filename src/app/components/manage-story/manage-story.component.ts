import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManageStoryService } from '../../services/manage-story.service';
import { HackerNewsStory, LoadStoriesRequest } from '../../Models/Story';

@Component({
  selector: 'app-manage-story',
  templateUrl: './manage-story.component.html',
  styleUrls: ['./manage-story.component.css']
})
export class ManageStoryComponent implements OnInit {
  hackerNewsStories: HackerNewsStory[] = [];
  pageNumber: number = 1;
  pageSize: number = 10; // Adjust as needed
  constructor(
    private manageStoryService: ManageStoryService
  ) {
    
  }


  ngOnInit(): void {
    this.get("", this.pageNumber-1, this.pageSize);
  }

  get(searchTerm: string, pageNumber: number, pageSize: number) {
    let loadStoriesRequest: LoadStoriesRequest={
      SearchText: searchTerm,
      PageNumber: pageNumber,
      PageSize: pageSize
    };
    this.manageStoryService.getStories(loadStoriesRequest).subscribe(
      (classes) => {
        this.hackerNewsStories = classes;
        console.log('Classes:', this.hackerNewsStories);
      },
      (error) => {
        console.error('Error fetching classes:', error);
      }
    );
  }

  search(event: KeyboardEvent) {
    this.get((event.target as HTMLTextAreaElement).value,0,10);
  }

  open(url: string) {
    window.open(url, "_blank");
  }

  onPageChange(page: number): void {
    this.pageNumber = page;
    this.get("", this.pageNumber, this.pageSize);
  }
}



