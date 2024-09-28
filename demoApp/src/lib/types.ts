

export interface Post {

    id: string;
    userName: string;
    content:string;
    
    upvotes:number;
    downvotes:number;

    replies: Message[];
}

export interface Message{
    id:string;
    userName:string;
    content:string;
}