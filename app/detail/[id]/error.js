"use client";

export default function Error(props) {
  return (
    <div>
      에러남 ㅅㄱ
      <button
        onClick={() => {
          props.reset();
        }}
      >
        버튼
      </button>
    </div>
  );
}
