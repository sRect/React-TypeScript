export interface Data {
  title: string;
}

export interface Response {
  data: Data;
}

class Test {
  private data;
  constructor(str: Response) {
    this.data = str.data;
  }

  notify() {
    console.log(this.data);
  }
}

const test = new Test({
  data: {
    title: 'hello msg 🍎'
  }
})

test.notify();