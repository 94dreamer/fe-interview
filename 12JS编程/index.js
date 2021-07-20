// 的确一下子写不出来 todo
class Scheduler {
  constructor(limit) {
    this.pList = [];
    this.limit = limit || 2;
    this.workList = [];
  }
  run() {
    while (this.workList.length < this.limit && this.pList.length > 0) {
      const work = this.pList.shift();
      this.workList.push(work()); // 取任务
    }
    Promise.race(this.workList).then(() => {
      this.workList.forEach((p, index) => {
        p.then(() => {
          this.workList.splice(index, 1);
        });
      });
      this.run();
    });
  }
  add(promiseCreator) {
    if (!this.pList) this.pList = [];
    this.pList.push(promiseCreator);
    this.run();
  }
}
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() =>
    timeout(time).then(() => {
      console.timeLog("answer time", order);
    })
  );
};
console.time("answer time");
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
