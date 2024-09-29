<script lang="ts">
    import Button from "$lib/components/generics/Button.svelte";
    import TextInput from "$lib/components/generics/TextInput.svelte";
    import PostItem from "$lib/components/message/PostItem.svelte";
    import type { Post, VoteType } from "$lib/types";
    import { deleteApp } from "firebase/app";

    let posts: { [id: string]: Post } = {
        "1": {
            id: "1",
            userName: "Alice",
            content: "Hello everyone!",
            downvotes: 0,
            upvotes: 10,
            replies: [
                {
                    id: "0",
                    userName: "David",
                    content: "Welcome welcome",
                },
            ],
        },

        "2": {
            id: "2",
            userName: "Bob",
            content: "Wee woo!",
            downvotes: 0,
            upvotes: 0,
            replies: [],
        },

        "3": {
            id: "3",
            userName: "Charlie",
            content: "Bee boop!",
            downvotes: 0,
            upvotes: 0,
            replies: [],
        },
    };

    let index = 1000;
    let postContent = "";

    function addPost() {
        index += 1;

        // TODO adapt for db
        posts[`${index}`] = {
            id: `${index}`,
            content: postContent,
            upvotes: 0,
            downvotes: 0,
            replies: [],
            userName: userName,
        };
    }

    let upvoted: Set<string> = new Set(["1"]);
    let downvoted: Set<string> = new Set();

    function getVoteStatus(postId: string) {
        if (upvoted.has(postId)) {
            return "upvote";
        }
        if (downvoted.has(postId)) {
            return "downvote";
        }

        return undefined;
    }

    function updateVotes(postid: string, vote: VoteType) {
        // remove vote if there is already a vote selected
        const post = posts[postid];
        if (upvoted.has(post.id)) {
            upvoted.delete(post.id);
            post.upvotes -= 1;
        } else if (vote == "upvote") {
            // increase if not previously increased
            upvoted.add(post.id);
            post.upvotes += 1;
        }

        if (downvoted.has(post.id)) {
            downvoted.delete(post.id);
            post.downvotes -= 1;
        } else if (vote === "downvote") {
            // decrease if not previously decreased
            downvoted.add(post.id);
            post.downvotes += 1;
        }

        posts[postid] = post;

        // TODO report change to database
    }

    let userName = "";
    function addComment(postid: string, content: string) {
        // TODO adapt this for database
        const post = posts[postid];
        index += 1;
        post.replies = [
            ...post.replies,
            {
                id: `${index}`,
                userName,
                content,
            },
        ];

        posts[postid] = post;
    }
</script>

<h1>My Message Board</h1>

<div style="display: flex; flex-direction:column; width:400px;">
    <TextInput label="My name is" placeholder="name here" bind:value={userName} />

    <div class="hori">
        <TextInput
            label="Post"
            placeholder="Body of your post here..."
            style="flex:1;"
            bind:value={postContent}
        />
        <Button
            on:click={() => {
                addPost();
            }}>Submit</Button
        >
    </div>
</div>

{#each Object.values(posts) as post, index (post.id)}
    <PostItem
        {post}
        voteStatus={getVoteStatus(post.id)}
        on:vote={(e) => {
            updateVotes(e.detail.postid, e.detail.type);
        }}
        on:comment={(e) => {
            addComment(e.detail.postid, e.detail.content);
        }}
    />
{/each}

<!-- Import and put the TodoList Component here, and give it the list of todoItems. -->

<style>
    .hori {
        display: flex;
        gap: 0.5rem;
    }
</style>
