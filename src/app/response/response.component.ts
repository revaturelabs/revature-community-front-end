import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RepliesService } from '../services/replies.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  
  constructor(private repliesService: RepliesService) { }
  @Input() postId: number | any;
  @ViewChild('textArea', { read: ElementRef }) textArea: ElementRef | any;
  responses:any = [];
  currentResponse:any;
  ngOnInit(): void {
    this.repliesService.getReplies(this.postId).subscribe(res => {
      for (let val of res) {
        let lenless255 = false;
        if (val.content.length > 255) {
          lenless255 = true;
        }
        const resp = {id: val.id, response: val.content, show: !lenless255};
        this.responses.push(resp);
      }
    })
  }

  handleResponses() {
    let lenless255 = false;
    this.currentResponse = this.currentResponse.trim();
    if (this.currentResponse.length > 255) {
      lenless255 = true;
    }
    const replyData = {postId: this.postId, content : this.currentResponse};
    this.repliesService.postReply(replyData).subscribe(res => {
      this.responses.push({id: res.id, response: res.content, post_id: res.postId, show: res.content.length < 255});
      this.currentResponse = "";
      const textArea = this.textArea.nativeElement;
      textArea.style.overflow = 'hidden';
      textArea.style.height = '36px';
    })
  }

  changeParam(id:number){
    this.responses[id-1].show = true;
  }

  getDisplayType(type:any) {
    return type ? 'inline-table' : 'x';
  }

  autoGrow() {
    const textArea = this.textArea.nativeElement;
    textArea.style.overflow = 'hidden';
    textArea.style.height = '0px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}
