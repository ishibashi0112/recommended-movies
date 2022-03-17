import { proxy } from "valtio";

export const countState = proxy({ count: 0 });
