import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, //None, Native, Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }
}
