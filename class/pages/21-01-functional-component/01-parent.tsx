// ----------------------------------------------------------------------------------
//  21-01_01. functional-component - parent
// ----------------------------------------------------------------------------------

import ChildPage from "./02-child";

// 1. 컴포넌트는 그냥 함수에 불과
// 2. 따라서, props도 그냥 매개변수에 불과
// 즉, 내 마음대로 이름 변경 가능

export default function ParentPage() {
  return (
    <>
      {/* 아래 두 개는 완전히 같은 것! */}
      <ChildPage count={3} />
      {ChildPage({ count: 3 })}
    </>
  );
}