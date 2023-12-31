import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { getUserId } from '../../util/auth';

//use to fetch data from the database through 'api/collections/jobs/records'//
export async function load({ fetch }) {

    const userId = await getUserId();

    const resp = await fetch(PUBLIC_BACKEND_BASE_URL + `api/collections/jobs/records?filter=(user.id='${userId}')&page=1&perPage=4`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type':'application/json'
        }
    });

    const res = await resp.json();
    if (resp.status == 200) {
      return {
        jobs: res
      }
    } else {
      return {
        jobs: []
      }
    }
  }