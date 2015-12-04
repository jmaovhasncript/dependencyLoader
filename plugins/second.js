
window.core.registerPlugins('second',"1.0.1",function(){

    window.core.require(["first_1.0.1" ,"third_1.0.1"],function(first,third){
        var second = function(){

        }
        var p = second.prototype;
        p.init = function(){
            this.first = new first();
            console.log(this.first);
        };
        p.doSomething = function(){
            console.log("second");
        };
        if(! window.core.second){
            window.core.second =new second();
        }
        return  window.core.second;
    });

});