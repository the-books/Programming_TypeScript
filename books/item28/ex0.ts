interface RequestPending {
  state: "pending";
}

interface RequestSuccess {
  state: "success";
  pageText: string;
}

interface RequestError {
  state: "error";
  error: string;
}

type RequestState = RequestPending | RequestSuccess | RequestError;

interface State {
  currentPage: string;
  requests: {[page: string]: RequestState};
}

type PageKey<Num extends number> = `p_${Num}`;
type p1 = 1;
const pKey: PageKey<p1> = 'p_1';

export {}
