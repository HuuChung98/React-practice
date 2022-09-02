// Dinh nghia cac action type cho action va reducer
// Them prefix vao tung reducer de tranh trung lap
const PREFIX = 'todo';

// voi 1 asyns action ta se tao ra 3 action type 
export const GET_TODOS_PENDING = `${PREFIX}/GET_TODOS_PENDING`;

// request khi thanh cong 
export const GET_TODOS_FULLFILLED = `${PREFIX}/GET_TODOS_FULLFILLED`;

// request khi that bai
export const GET_TODOS_REJECTED = `${PREFIX}/GET_TODOS_REJECTED`;

export const CHANGE_SEARCH = "CHANGE_SEARCH";
