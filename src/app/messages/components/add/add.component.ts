import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Message} from '../../../models/message';
import {MessageService} from '../../../services/message.service';
import {FollowService} from '../../../services/follow.service';
import {UserService} from '../../../services/user.service';
import {GLOBAL} from '../../../services/global';

@Component({
    selector: 'add',
    template: './add.component.html',
    providers: [FollowService, MessageService]
})
export class AddComponent implements OnInit {
    public title: string;
    public message: Message;
    public identity;
    public token;
    public url: string;
    public status: string;
    public follows;

    constructor(
        private _followService: FollowService,
        private _messageService: MessageService,
        private _userService: UserService,
    ) {
        this.title = 'Enviar mensaje';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.message = new Message('', '', '', '',  this.identity._id, '');
    }

    ngOnInit() {
        console.log('[OK] Component: add.');
        this.getMyFollows();
    }

    onSubmit(form) {
        this._messageService.addMessage(this.token, this.message).subscribe(
            response => {
                if (response.message) {
                    this.status = 'success';
                    form.reset();
                }
            },
            error => {
                this.status = 'error';
                console.log(<any>error);
            }
        );
    }

    getMyFollows() {
        this._followService.getMyFollows(this.token).subscribe(
            response => {
                this.follows = response.follows;
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}
