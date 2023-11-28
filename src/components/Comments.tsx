export default async function Comments(postSlug) {
  c;
  return (
    <div>
      <h2>| Comments |</h2>
      <h3>Leave a comment: </h3>

      <form action={`/api/comments/${postSlug}`} method="POST">
        <label htmlFor="username">Name:</label>
        <input type="text" name="username" />

        <label htmlFor="comment">Your comment::</label>
        <textarea
          name="username"
          cols={30}
          rows={10}
          className="text-neutral-900"
        />

        <button type="submit">send comment</button>
      </form>
    </div>
  );
}
