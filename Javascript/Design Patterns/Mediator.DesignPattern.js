class Member {
    constructor(name){
        this.name = name;
        this.chatroom = null;
    }

    send(message, toMember){
        this.chatroom.send(message, this, toMember);
    }

    receive(message, fromMember){
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
}


/**
 * Mediator
 */
class Chatroom {
    constructor(){
        this.members = {};
    }

    join(member){
        this.members[member.name] = member;
        member.chatroom = this;
    }

    send(message, fromMember, toMember){
        toMember.receive(message, fromMember)
    }
}


const chatroom = new Chatroom();

const aman = new Member('Aman');
const nagu = new Member('Nagu');
const shy = new Member('Shy');

chatroom.join(aman);
chatroom.join(nagu);
chatroom.join(shy);

aman.send("Hey, wassup!", shy);