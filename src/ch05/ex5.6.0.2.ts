/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type State = {
  [key: string]: string;
};

class StringDatabase {
  state: State = {};

  get(key: string): string | null {
    return key in this.state ? this.state[key] : null;
  }

  set(key: string, value: string): void {
    this.state[key] = value;
  }

  static from(state: State) {
    let db = new StringDatabase;
    for (let key in state) {
      db.set(key, state[key]);
    }
    return db;
  }
}

let sdb = new StringDatabase;

export {};
