
window.core.registerPlugins('first',"1.0.1",function(){

        window.core.require(["second_1.0.1" ,"third_1.0.1"],function(second,third){
            var first = function(){

            }
            var p = first.prototype;
            p.init = function(){
                this.second = new second();
                console.log(this.second);
            };
            p.doSomething = function(){
              console.log("first");
            };
            if(! window.core.first){
                window.core.first =new first();
            }
            return  window.core.first;
        });

});