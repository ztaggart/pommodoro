class Clock {
    constructor(goal) {
        this.going = false;
        this.done = false;
        this.time = 0;
        this.goal = goal;
    }

    start() {
        this.going = true;
    }

    stop() {
        this.going = false;
    }

    reset() {
        this.time = 0;
        this.going = false;
    }
}export default Clock