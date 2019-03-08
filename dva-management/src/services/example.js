import request from '../utils/request';
/* import { resolve } from 'any-promise';
import { reject } from 'any-promise'; */

export function query(opt) {
  return request('/api/users',opt);
}
