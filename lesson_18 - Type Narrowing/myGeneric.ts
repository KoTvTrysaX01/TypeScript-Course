function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase();
    }
    return val + 3;
}


function provideId(id: string | null){
    if(!id){
        console.log("please provide id");
        return
    }
    id.toLowerCase();
}


function printAll(strs: string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }
        }else if (typeof strs === "string"){ // empty string might cause error. 
            console.log(strs);               // -> solution ? if(typeof strs === "string" && strs.length > 0)
        }
    }
}

interface User{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){ 
        return account.isAdmin;
    }
    return false;
}



function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

type Fish = {swim: () => void;}
type Bird = {fly: () => void;}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet;
        return "fish food";
    }
    else{
        pet;
        return "bird food";
    }
}
