export class ConfigMock {
 
  public get(): any {
    return '';
  }
 
  public getBoolean(): boolean {
    return true;
  }
 
  public getNumber(): number {
    return 1;
  }
}
 
export class FormMock {
  public register(): any {
    return true;
  }
}
 
export class NavMock {
 
  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }
 
  public setRoot(): any {
    return true;
  }
}
 
export class PlatformMock {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}
 
export class MenuMock {
  public close(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}
/*
Following up, a more correct answer should be in using mock
so adding the following definition in the mocks.ts file

export class StatusBarMock {
public styleDefault(): void {}
}
export class SplashScreenMock {
public hide(): void {}
public show(): void {}
}

and then modifying the app.spec.ts
import { StatusBarMock, SplashScreenMock } from '../mocks'
and 
providers: [
{provide:StatusBar, useClass:StatusBarMock},
{provide:SplashScreen, useClass:SplashScreenMock}
],
*/