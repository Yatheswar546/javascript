var videoName = "Intro to JS OOPS"
var fileFormat = "mp4"
var duration = "2:56"
var owner = "Yathe"

function getVideoName(){
    return videoName;
}

function getFileFormat(){
    return fileFormat;
}

function getDuration(){
    return duration;
}

function getOwner(){
    return owner;
}

var video = {
    videoName : "Intro to JS OOPS",
    fileFormat : "mp4",
    duration : "2:56",
    owner : "Yathe",
    getVideoName : function(){
        return this.videoName
    },
    getFileFormat : function(){
        return this.fileFormat 
    },
    getDuration : function(){
        return this.duration
    },
    getOwner : function(){
        return this.owner
    }
};

console.log(video.getVideoName());


// Js Constructor

var person = {
    name : 'Yathe',
    yob : 2001,
    job : 'freelancer'
}

function Person(pName, pYob, pJob){
    this.name = pName;
    this.yob = pYob;
    this.job = pJob; 

    this.calculateAge = function(){
        console.log(2023 - this.yob)
    }
}

var swarup = new Person('Swarup',2002,'Software')
console.log(swarup);
// swarup.calculateAge()



// Js Inheritance & Prototypes
var person = {
    name : 'Yathe',
    yob : 2001,
    job : 'freelancer'
}

function Person(pName, pYob, pJob){
    this.name = pName;
    this.yob = pYob;
    this.job = pJob; 
}

Person.prototype.calculateAge = function(){
    console.log("For => " + this.name , 2023 - this.yob)
}

Person.prototype.updateYearofBirth = function(birthYear){
    this.yob = birthYear
}

Person.prototype.lastName = "Eswar"

var swarup = new Person('Swarup',2002,'Software')

swarup.calculateAge()
swarup.updateYearofBirth(2001)
swarup.calculateAge()

// console.log(swarup)
// console.log(swarup.lastName)
