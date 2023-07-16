class Register{
    static store = {};
    
    static add(id, obj) {
	if(id)
	    Register.store[id] = obj;
    }

    static find(id){
        return Register.store[id] ? Register.store[id] : null;
    }

    static clear(id){
        delete Register.store[id];
    }

    static forEach(func, userdata){
        Object.keys(Register.store).map((e)=>{
            func(Register.store[e], userdata);
        });
    }

    // to be tested
    static findAllLink(shape){
        var result = [];
        Object.keys(Register.store).map((id) => {
            var obj = Register.find(id);
            if(obj.type == "link"){
                if(shape.uuid == obj.src || shape.uuid == obj.dest)
                    result.push(obj);
            }
        });
        return result;
    }
}
