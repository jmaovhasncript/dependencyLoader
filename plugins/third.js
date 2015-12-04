
window.core.registerPlugins('third',"1.0.1",function(){
    window.core.require(["first_1.0.1" ,"second_1.0.1"],function(first,second){
        var third = function(){

        }
        var p = third.prototype;
        p.init = function(){
            this.second = new second();
            console.log(this.second);
        };
        p.doSomething = function(){
            console.log("third");
        };
        if(! window.core.third){
            window.core.third =new third();
        }
        return  window.core.third;
    });
});