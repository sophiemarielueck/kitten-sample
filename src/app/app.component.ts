import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-kitty-sample';
  refresh() {
    const random = this.getRandomInt(17)
    const img = document.getElementById('kittenImg')
    let src = "/assets/kittens/cat-kitty.gif";
    switch (random) {
      case 0:
        src = "/assets/kittens/cat-kitten.gif";
        break;
      case 1:
        src = "/assets/kittens/cat-kitty.gif";
        break;
      case 2:
        src = "/assets/kittens/cats-sleepy.gif";
        break;
      case 3:
        src = "/assets/kittens/cute-cat-kitten-bite.gif";
        break;
      case 4:
        src = "/assets/kittens/cute-kitten.gif";
        break;
      case 5:
        src = "/assets/kittens/cute-kitty-best-kitty.gif";
        break;
      case 6:
        src = "/assets/kittens/hello-hi.gif";
        break;
      case 7:
        src = "/assets/kittens/kitten-bite.gif";
        break;
      case 8:
        src = "/assets/kittens/kitten-blink.gif";
        break;
      case 9:
        src = "/assets/kittens/kitten-cat.gif";
        break;
      case 10:
        src = "/assets/kittens/kitten-so-cute.gif";
        break;
      case 11:
        src = "/assets/kittens/kitten-cute.gif";
        break;
      case 12:
        src = "/assets/kittens/kitten-workout.gif";
        break;
      case 13:
        src = "/assets/kittens/kittens-bucket.gif";
        break;
      case 14:
        src = "/assets/kittens/kittens-kitten.gif";
        break;
      case 15:
        src = "/assets/kittens/sleepy-sleepy-cat.gif";
        break;
      case 16:
        src = "/assets/kittens/tired-good-night.gif";
        break;
    }
    if (img) {
      img.setAttribute("xlink:href", src)
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

}
