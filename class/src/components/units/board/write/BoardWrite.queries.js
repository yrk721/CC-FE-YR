// ----------------------------------------------------------------------------------
// BoardWrite.queries - graphql query 부분
// 이 파일은 component 아님! 그냥 REATE_BOARD라는 변수이다.
// ----------------------------------------------------------------------------------

import { gql } from "@apollo/client";

// graphql 쿼리문
export const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 변수의 타입을 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;