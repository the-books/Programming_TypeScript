/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type APIResponse = {
  user: {
    userId: string;
    friendsList: {
      count: number;
      friends: {
        firstName: string;
        lastName: string;
      }[];
    };
  };
};

type FriendList = APIResponse['user']['friendsList'];

type ResponseKeys = keyof APIResponse;
type UserKeys = keyof APIResponse['user'];
type FriendListKeys = keyof APIResponse['user']['friendsList']

export {};
