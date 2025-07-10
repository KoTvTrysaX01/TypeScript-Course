abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void;
    getReelTime(): number{
        return 0
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public birst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

let vadim = new Instagram("test", "test", 3);