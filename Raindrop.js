class Drop{
    constructor(x,y){
        this.xPosition=x;
        this.yPosition=y;
        
        this.width=random(3,4);      
        this.height=random(3,40);
    }

    display(){
        fill(random(0,255),random(0,255),random(180,255));
        rect(this.xPosition, this.yPosition, this.width, this.height);
    }

    fall(){
        this.yPosition=this.yPosition+5

        if(this.yPosition>=height){
            this.yPosition=0
        }
    }
}