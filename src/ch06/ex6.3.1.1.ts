/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type FriendList = {
  count: number;
  friends: {
    firstName: string;
    lastName: string;
  }[];
};

type APIResponse = {
  user: {
    userId: string;
    friendsList: FriendList;
  };
};

export {};
