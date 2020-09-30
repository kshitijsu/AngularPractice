import {
  Component,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.css"],
})
export class DirectivesComponent implements OnInit {
  serverName: string = "";
  serverCreated: boolean = false;
  servers = ["Server 1", "Server 2"];
  public btnText = "Copy";

  constructor() {}

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  secretPassword: string = "Hello World";
  showSecretPassword: boolean = false;
  logs = [];

  onToggleDeatils() {
    this.showSecretPassword = !this.showSecretPassword;
    this.logs.push(this.logs.length + 1);
  }

  onCopy(value: string) {}
}

@Directive({
  selector: "[divBgColor]",
})
export class DivBgColor {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // platform dependednt method
    // el.nativeElement.style.backgroundColor = "purple";
    // el.nativeElement.style.color = "white";

    // platform independent method
    renderer.setStyle(el.nativeElement, "backgroundColor", "#212F3D");
    renderer.setStyle(el.nativeElement, "color", "white");
    renderer.setStyle(el.nativeElement, "padding", "10px");
  }
}

@Directive({
  selector: "[copy-para]",
})
export class CopyPara {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, "backgroundColor", "mistyrose");
  }

  @HostBinding("class.bg-success") private isCopied: boolean = false;
  @HostBinding("class.text-white") private btnClicked: boolean = false;

  @Input("copy-para") text: string;
  sentence: string = "";

  @HostListener("click") onCopyText() {
    console.log("Text: " + this.text);

    var textArea = document.createElement("textarea");

    textArea.value = this.text;
    console.log("TextArea: " + textArea.value);

    document.body.appendChild(textArea);
    textArea.select();
    console.log("TextArea Select: " + textArea.select());

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successfully copied" : "unsuccessful";

      console.log(msg);
    } catch (error) {
      console.log("unable to copy");
    }

    document.body.removeChild(textArea);

    this.isCopied = true;
    this.btnClicked = true;
  }
}
