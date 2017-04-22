import {Component} from '@angular/core';

@Component({
  selector: 'od-about',
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }

    .panel {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 200px;
      border: 1px solid #b3eaff;
      padding: 40px;
      border-radius: 2px;
    }

    .npm-cmd {
      color: #b3eaff;
    }

    .github {
      text-align: center;
    }

    .github-btn {
      display: inline-block;
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 10px 20px;
      background-color: white;
      border-radius: 2px;
      cursor: pointer;
      color: #222b44;
    }

    a {
      text-decoration: none;
    }

    .twitter-btn {
      display: inline-block;
      border: 1px dashed pink;
      padding: 10px 20px;
      border-radius: 20px;
      cursor: pointer;
      color: #b3eaff;
      font-weight: 900;
    }

    .back-btn {
      padding: 5px 10px;
      color: #b3eaff;
      font-size: 10px;
    }
  `],
  template: `
    <div class="container">
      <div class="panel">
        <div class="github">
          <span class="npm-cmd">npm i -S od-virtualscroll</span><br>
          <a class="github-btn" href="https://github.com/dinony/od-virtualscroll">GitHub</a>
        </div>

        <a class="twitter-btn" href="https://twitter.com/dinonysaur">@dinonysaur</a>
      </div>
      <a class="back-btn" routerLink="/">&#171; demo</a>
    </div>
  `
})
export class AboutComponent {}
