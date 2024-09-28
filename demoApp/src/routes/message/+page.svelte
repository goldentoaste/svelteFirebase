<script lang="ts">
    import type { Post } from "$lib/types";

    let posts: Post[] = [
        {
            id: "1",
            userName: "Alice",
            content: "Hello everyone!",
            downvotes: 0,
            upvotes: 10,
            replies: [
                {
                    id:"0",
                    userName:"David",
                    content:"Welcome welcome"
                }
            ],
        },

        {
            id: "2",
            userName: "Bob",
            content: "Wee woo!",
            downvotes: 0,
            upvotes: 0,
            replies: [],
        },

        {
            id: "2",
            userName: "Charlie",
            content: "Bee boop!",
            downvotes: 0,
            upvotes: 0,
            replies: [],
        },
    ];
</script>

<h1>My Message Board</h1>

<!-- Import and put the TodoList Component here, and give it the list of todoItems. -->

<style>
</style>
