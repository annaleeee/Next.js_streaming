export const GET = () => {
    const arr = Array.from({ length: 150000 }).map((_, index) => index);
    return Response.json(arr, { status: 200});
}
// 길이가 15000인 배열을 생성, map을 사용해서 각 요소에 인덱스 값을 할당한 배열 생성
// 클라이언트에게 200 상태 코드와 함께 JSON 형식으로 데이터 응답
// arr 배열이 JSON 형태로 변환되어 클라이언트로 전송됨