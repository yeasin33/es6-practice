const Parson = { Name:"Mohammad", age:"33", job:"Clenar", country:"bangladesh",phone:0501456, friend:"rakib"}
console.log(Parson.Name);


const {Name, job, phone} = Parson;
console.log(Name, phone);


// arrey
const Friends = ['rakib','kawsar','shorif', 'ishak', 'arifulll','abdullah'];
const [sotoFriend,lastFriend, akherFriend] = Friends;
console.log(sotoFriend , ...lastFriend,...akherFriend) ;
const complexObject = {
    name = "mohammad",
    info: {
        address = 'bangladesh',
        leader = "tigar man"
    }

}
const {leader} = complexObject.info;