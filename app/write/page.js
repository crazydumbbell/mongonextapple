export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/test" method="POST">
        <button type="submit">POST버튼</button>
      </form>
      <form action="/api/list" method="GET">
        <button type="submit">GET버튼</button>
      </form>
      <div className="p-20">
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="글제목" />
          <input name="content" placeholder="글내용" />
          <button type="submit">PUT버튼</button>
        </form>
      </div>
    </div>
  );
}
