import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { AutosizeModule } from 'ngx-autosize';
import { findIndex } from 'rxjs/operators';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  user_name: string = 'user';

  test: boolean = true;
  cards_of_key_partners: card[] = [];

  cards_of_key_actions: card[] = [];
  cards_of_key_resources: card[] = [];
  cards_of_value_proposition: card[] = [];
  cards_of_customer_relationships: card[] = [];
  cards_of_channels: card[] = [];
  cards_of_customer_segments: card[] = [];
  cards_of_cost_structure: card[] = [];
  cards_of_income_streams: card[] = [];

  boards: any = [];
  testingASS() {
    this.test = !this.test;
  }

  createBoard(){

    this.boards.push({
      values:[
        this.cards_of_key_actions = [],
        this.cards_of_key_resources = [],
        this.cards_of_value_proposition = [],
        this.cards_of_customer_relationships=[],
        this.cards_of_channels=[],
        this.cards_of_customer_segments=[],
        this.cards_of_cost_structure=[],
        this.cards_of_income_streams=[],
      ],
      date: Date.now(),
    });
    // console.log();
  }
  

  saveBoard() {
    this.boards.push({
      values: [
        this.cards_of_key_actions,
        this.cards_of_key_resources,
        this.cards_of_value_proposition,
        this.cards_of_customer_relationships,
        this.cards_of_channels,
        this.cards_of_customer_segments,
        this.cards_of_cost_structure,
        this.cards_of_income_streams,
      ],
      date: Date.now(),
    });
    console.log(this.boards.length);
  }

  returnLastCard(el) {
    return el[el.lenght - 1];
    // console.log(lastBoard);
  }

  returnLastBoard() {
    return this.boards[this.boards.lenght - 1];
  }

  compareBoard(date1, date2) {
    let firstComparedBoard: any = []; // Доска с раней датой
    let secondComparedBoard: any = []; // Доска с поздней датой

    if (date1 > date2) {
      for (let i of this.boards.lenght) {
        if ((date2 = this.boards[i].date)) {
          firstComparedBoard[i] = this.boards[i];
        }
        if ((date1 = this.boards[i].date)) {
          secondComparedBoard[i] = this.boards[i];
        }
      }
    } else {
      for (let i of this.boards.lenght) {
        if ((date1 = this.boards[i].date)) {
          firstComparedBoard[i] = this.boards[i];
        }
        if ((date2 = this.boards[i].date)) {
          secondComparedBoard[i] = this.boards[i];
        }
      }
    }
  }

  constructor(private dragulaService: DragulaService) {
    // use these if you want

    this.dragulaService.createGroup('segments', {
      // ...
    });

    // this.dragulaService.dropModel('VAMPIRES').subscribe((args) => {
    //   console.log(args);
    // });
  }
  ngOnInit() {}
  changeText(index, id_block) {
    switch (id_block) {
      case 0:
        this.cards_of_key_partners[index].show_text = false;
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_key_partners[this.cards_of_key_partners.length - 1]
              .date
          );
        }, 100);
        break;
      case 1:
        this.cards_of_key_actions[index].show_text = false;
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_key_actions[this.cards_of_key_actions.length - 1].date
          );
        }, 100);
        break;
      case 2:
        this.cards_of_key_resources[index].show_text = false;
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_key_resources[this.cards_of_key_resources.length - 1]
              .date
          );
        }, 100);
        break;
      case 3:
        this.cards_of_value_proposition[index].show_text = false;
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_value_proposition[
              this.cards_of_value_proposition.length - 1
            ].date
          );
        }, 100);
        break;
      case 4:
        this.cards_of_customer_relationships[index].show_text = false;
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_customer_relationships[
              this.cards_of_customer_relationships.length - 1
            ].date
          );
        }, 100);
        break;
      case 5:
        this.cards_of_channels[index].show_text = false;
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_channels[this.cards_of_channels.length - 1].date
          );
        }, 100);
        break;
      case 6:
        this.cards_of_customer_segments[index].show_text = false;
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_customer_segments[
              this.cards_of_customer_segments.length - 1
            ].date
          );
        }, 100);
        break;
      case 7:
        this.cards_of_cost_structure[index].show_text = false;
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_cost_structure[
              this.cards_of_cost_structure.length - 1
            ].date
          );
        }, 100);
        break;
      case 8:
        this.cards_of_income_streams[index].show_text = false;
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_income_streams[
              this.cards_of_income_streams.length - 1
            ].date
          );
        }, 100);
        break;
      default:
        console.log(index, id_block);
        break;
    }
  }
  onCtrlEnter(index, id_block) {
    switch (id_block) {
      case 0:
        this.cards_of_key_partners[index].show_text = true;
        this.cards_of_key_partners[index].date = Date.now();
        break;
      case 1:
        this.cards_of_key_actions[index].show_text = true;
        this.cards_of_key_actions[index].date = Date.now();
        break;
      case 2:
        this.cards_of_key_resources[index].show_text = true;
        this.cards_of_key_resources[index].date = Date.now();
        break;
      case 3:
        this.cards_of_value_proposition[index].show_text = true;
        this.cards_of_value_proposition[index].date = Date.now();
        break;
      case 4:
        this.cards_of_customer_relationships[index].show_text = true;
        this.cards_of_customer_relationships[index].date = Date.now();
        break;
      case 5:
        this.cards_of_channels[index].show_text = true;
        this.cards_of_channels[index].date = Date.now();
        break;
      case 6:
        this.cards_of_customer_segments[index].show_text = true;
        this.cards_of_customer_segments[index].date = Date.now();
        break;
      case 7:
        this.cards_of_cost_structure[index].show_text = true;
        this.cards_of_cost_structure[index].date = Date.now();
        break;
      case 8:
        this.cards_of_income_streams[index].show_text = true;
        this.cards_of_income_streams[index].date = Date.now();
        break;
      default:
        console.log(index, id_block);
        break;
    }
  }

  deleteBlock(type) {
    //Удаление карточек из блока
    switch (type) {
      case 0:
        // this.cards_of_key_partners.splice(0, this.cards_of_key_partners.length);
        this.cards_of_key_partners = [];
        break;
      case 1:
        this.cards_of_key_actions = [];
        break;
      case 2:
        this.cards_of_key_resources = [];
        break;
      case 3:
        this.cards_of_value_proposition = [];
        break;
      case 4:
        this.cards_of_customer_relationships = [];
        break;
      case 5:
        this.cards_of_channels = [];
        break;
      case 6:
        this.cards_of_customer_segments = [];
        break;
      case 7:
        this.cards_of_cost_structure = [];
        break;
      case 8:
        this.cards_of_income_streams = [];
        break;
      default:
        console.log(type);
        break;
    }
  }

  deleteCard(index, type) {
    //Удаление одной карточки
    switch (type) {
      case 0:
        this.cards_of_key_partners.splice(index, 1);
        break;
      case 1:
        this.cards_of_key_actions.splice(index, 1);
        break;
      case 2:
        this.cards_of_key_resources.splice(index, 1);
        break;
      case 3:
        this.cards_of_value_proposition.splice(index, 1);
        break;
      case 4:
        this.cards_of_customer_relationships.splice(index, 1);
        break;
      case 5:
        this.cards_of_channels.splice(index, 1);
        break;
      case 6:
        this.cards_of_customer_segments.splice(index, 1);
        break;
      case 7:
        this.cards_of_cost_structure.splice(index, 1);
        break;
      case 8:
        this.cards_of_income_streams.splice(index, 1);
        break;
      default:
        console.log(index, type);
        break;
    }
  }

  focusMethod = async function getFocus(id) {
    document.getElementById(id)?.focus();
  };

  addCard(type) {
    switch (type) {
      case 0:
        this.cards_of_key_partners.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });

        setTimeout(() => {
          this.focusMethod(
            this.cards_of_key_partners[this.cards_of_key_partners.length - 1]
              .date
          );
        }, 100);

        break;
      case 1:
        this.cards_of_key_actions.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_key_actions[this.cards_of_key_actions.length - 1].date
          );
        }, 100);
        break;
      case 2:
        this.cards_of_key_resources.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_key_resources[this.cards_of_key_resources.length - 1]
              .date
          );
        }, 100);
        break;

      case 3:
        this.cards_of_value_proposition.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_value_proposition[
              this.cards_of_value_proposition.length - 1
            ].date
          );
        }, 100);
        break;

      case 4:
        this.cards_of_customer_relationships.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_customer_relationships[
              this.cards_of_customer_relationships.length - 1
            ].date
          );
        }, 100);

        break;
      case 5:
        this.cards_of_channels.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_channels[this.cards_of_channels.length - 1].date
          );
        }, 100);
        break;
      case 6:
        this.cards_of_customer_segments.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_customer_segments[
              this.cards_of_customer_segments.length - 1
            ].date
          );
        }, 100);
        break;
      case 7:
        this.cards_of_cost_structure.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_cost_structure[
              this.cards_of_cost_structure.length - 1
            ].date
          );
        }, 100);
        break;
      case 8:
        this.cards_of_income_streams.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        setTimeout(() => {
          this.focusMethod(
            this.cards_of_income_streams[
              this.cards_of_income_streams.length - 1
            ].date
          );
        }, 100);
        break;

      default:
        console.log(type);
        break;
    }
  }
}
type card = {
  name: string;
  text: string;
  date: number;
  show_text: boolean;
};
