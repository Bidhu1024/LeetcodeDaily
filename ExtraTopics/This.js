let laptop = {
    name: 'MacBook',
    price: 1098,
    getConfig: function(){
        console.log(this.name);
    }
};

//this refers to the same object it is written
let laptop2 = {
    name:'Dell Laptop',
    price :3567 ,
    getConfig: function(){
        console.log(this.price);
    }
}

laptop2.getConfig()