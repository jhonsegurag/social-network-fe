import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../services/user.service';
import {PublicationService} from '../../services/publication.service';
import {GLOBAL} from '../../services/global';
import {Publication} from '../../models/publication';
import {UploadService} from '../../services/upload.service';

@Component({
  selector: 'posts-publish',
  templateUrl: './posts-publish.component.html',
  styleUrl: './posts-publish.component.css',
  providers: [UserService, PublicationService, UploadService]
})
export class PostsPublishComponent {
  public url;
  public identity;
  public token;
  public stats;
  public status;
  public publication: Publication;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService,
      private _publicationService: PublicationService,
      private _uploadService: UploadService
  ) {
      this.url = GLOBAL.url;
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.stats = this._userService.getStats();
      this.publication = new Publication("", "", "", "", this.identity._id);
  }

  ngOnInit() {
      console.log('[OK] Component: posts-publish.');
      this.getCounter(this.identity._id);
  }

  getCounter(id) {
      this._userService.getCounter(id).subscribe(
          response => {
              this.stats = response;
          },
          error => {
              console.log(<any>error);
          }
      );
  }

  onSubmit(postForm, event) {
      this._publicationService.addPublication(this.token, this.publication).subscribe(
          response => {
              if (response.publication) {
                  // upload image
                  if (this.filesToUpload && this.filesToUpload.length) {
                      this._uploadService
                          .makeFileRequest(this.url + 'upload-image-pub/' + response.publication._id, [], this.filesToUpload, this.token, 'image')
                          .then((result: any) => {
                              this.publication.file = result.image;
                              this.status = 'success';
                              postForm.reset();
                              this._router.navigate(['/timeline']);
                              this.sended.emit({send:'true'});
                      });
                  } else {
                      this.status = 'success';
                      postForm.reset();
                      this._router.navigate(['/timeline']);
                      this.sended.emit({send:'true'});
                  }
              } else {
                  this.status = 'error';
              }
          },
          error => {
              var errorMessage = <any>error;
              console.log(errorMessage);

              if (errorMessage != null) {
                  this.status = 'error';
              }
          }
      );
  }

  @Output() sended = new EventEmitter();

  sendPublication(event) {
      this.sended.emit({send:'true'});
  }

  public filesToUpload: Array<File>;

  fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
