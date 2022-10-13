function getUserInfo(userId: string) {
  return {
    userId,
    name: '',
    age: 0,
    height: 1,
    weight: 1,
    favoriteColor: 'pink',
  };
}

type InfoFn = typeof getUserInfo; // 함수의 타입

type UserInfo = ReturnType<typeof getUserInfo>;

type User = ReturnType<(a: number) => number>;

export {};
