(function (){

     var Core = function(){
        this.plugins={};
        this.counter =0;
     }
    var  p = Core.prototype;
    p.registerPlugins = function(name ,version ,constructor){
           if(!this.plugins[name+"_"+ version]) {
               this.plugins[name + "_" + version] = constructor;
               this.counter++;
           };
        if( this.counter=== pluginConfig.length){
            var that = this;
            this.plugins["first_1.0.1"]();
            window.core.first.init();
        }
    }

    p.require = function(dependency ,callback){
        var objects=[];
        var that = this;
        dependency.forEach(function(item){
           if(that.plugins[item]){
               objects.push(that.plugins[item]);
           }
        });
        if(objects.length === dependency.length){
            callback.apply(undefined,objects);
        }
    };
    p.loadFile= function(dependency){
        dependency.forEach(function(file){
            var fileref = document.createElement('script');
            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("charset", "utf-8");
            fileref.setAttribute("src", file.url);
            document.getElementsByTagName("head")[0].appendChild(fileref);
        });

    }
   if(!window.core){
       window.core = new Core();
   }
}());
