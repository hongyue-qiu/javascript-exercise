// TODO 17: 在这里写实现代码
import Person from './person';

export default class Worker extends Person {
  constructor(name, age) {
    super(name, age);
  }

  introduce() {
    return `${this.basic_introduce()} I am a Worker. I have a job.`;
  }
}
